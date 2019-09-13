/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import deepmerge from "deepmerge"

import { Person } from "../Person"
import { Button } from "../Button"
import {
  palette,
  radius,
  fontSizes,
  fontFamilies,
  spaces,
} from "../../../utils/presets"
import { newLineToBr } from "../../../utils/helpers"

function Testimonial({ children, quote, author, customCss = {}, ...rest }) {
  const { name, photo, position, href, to, onClick } = author

  return (
    <div
      css={deepmerge(
        {
          alignItems: `center`,
          display: `flex`,
          flexDirection: `column`,
        },
        customCss
      )}
      {...rest}
    >
      {quote && <Testimonial.Quote html={quote} />}
      {name && (
        <Testimonial.Author
          name={name}
          position={newLineToBr(position)}
          photo={photo}
          href={href}
          to={to}
          onClick={onClick}
        />
      )}
    </div>
  )
}

Testimonial.Quote = ({ children, html, customCss = {} }) => {
  const style = deepmerge(
    {
      border: 0,
      fontSize: fontSizes.xl,
      lineHeight: 1.35,
      fontFamily: fontFamilies.headerFontFamily,
      textAlign: `center`,
    },
    customCss
  )

  return html ? (
    <blockquote css={style} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <blockquote css={style}>{children}</blockquote>
  )
}

Testimonial.Author = ({ name, position, photo, href, to, onClick }) => (
  <Button
    customCss={{
      marginTop: spaces.l,
    }}
    variant="GHOST"
    href={href}
    to={to}
    onClick={onClick}
  >
    <Person name={name} position={position} photo={photo} />
  </Button>
)

export default Testimonial
