/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"
import { MdArrowForward } from "react-icons/md"

import { Button } from "../Button"
import { Heading } from "../Heading"
import colors from "../../../theme/colors"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import { spaces, radius } from "../../../utils/presets"
import { newLineToBr } from "../../../utils/helpers"

function CtaBlock({ children, title, cta, note, customCss = {}, ...rest }) {
  return (
    <div
      css={deepmerge(
        {
          alignItems: `center`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
        },
        customCss
      )}
    >
      {title && <CtaBlock.Title> {title}</CtaBlock.Title>}
      {cta && <CtaBlock.Button cta={cta} />}
      {note && <CtaBlock.Note note={note} />}
    </div>
  )
}

CtaBlock.propTypes = {
  title: PropTypes.string,
  cta: PropTypes.object,
  note: PropTypes.string,
  customCss: PropTypes.object,
}

CtaBlock.Title = ({ children, title, customCss = {}, ...rest }) => (
  <Heading customCss={deepmerge({ fontSize: fontSizes[7] }, customCss)}>
    {children}
  </Heading>
)

CtaBlock.Button = ({ children, cta, customCss = {}, ...rest }) => {
  const { label, to, href, onClick } = cta
  return (
    <Button
      to={to}
      href={href}
      onClick={onClick}
      size="XL"
      css={deepmerge({ marginTop: spaces.xl }, customCss)}
    >
      {label ? (
        <Fragment>
          {label} <MdArrowForward />
        </Fragment>
      ) : (
        children
      )}
    </Button>
  )
}

CtaBlock.Note = ({ children, note, customCss = {}, ...rest }) => (
  <div
    dangerouslySetInnerHTML={{ __html: newLineToBr(note) }}
    css={deepmerge(
      {
        color: colors.purple[60],
        marginTop: spaces.l,
        fontFamily: fonts.header.join(`,`),
        lineHeight: 1.35,
        textAlign: `center`,
      },
      customCss
    )}
  />
)

export default CtaBlock
