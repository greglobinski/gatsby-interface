/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"

import { Avatar } from "../Avatar"
import colors from "../../../theme/colors"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"

import { radius, spaces } from "../../../utils/presets"

const VARIANTS = [`TESTIMONIAL`, `SETTINGS`]

function Person({ children, photo, name, position, customCss = {}, ...rest }) {
  return (
    <div
      css={deepmerge(
        {
          alignItems: `center`,
          display: `flex`,

          "& > *:first-child": {
            marginRight: photo ? spaces.s : 0,
          },
        },
        customCss
      )}
      {...rest}
    >
      {photo && (
        <Person.Avatar photo={photo} alt={photo.alt ? photo.alt : name} />
      )}
      {name && (
        <Person.Details>
          <Person.Name>{name}</Person.Name>
          {position && <Person.Attr html={position} />}
        </Person.Details>
      )}
    </div>
  )
}

Avatar.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  customCss: PropTypes.object,
}

Person.Avatar = ({ photo, alt, customCss = {}, ...rest }) => {
  const { src, fixed } = photo

  return (
    <Avatar
      size="M"
      css={deepmerge(
        {
          flexShrink: 0,
        },
        customCss
      )}
      src={src}
      fixed={fixed}
      alt={alt}
    />
  )
}

Person.Details = ({ children, customCss = {}, ...rest }) => (
  <div
    css={deepmerge(
      {
        display: `flex`,
        color: colors.grey[60],
        flexDirection: `column`,
        flexShrink: 0,
        fontFamily: fonts.header.join(`,`),
        fontSize: fontSizes[3],
        lineHeight: 1.25,
      },
      customCss
    )}
  >
    {children}
  </div>
)

Person.Name = ({ children, customCss = {}, ...rest }) => (
  <strong css={deepmerge({}, customCss)}>{children}</strong>
)

Person.Attr = ({ children, html, customCss = {}, ...rest }) => {
  const style = deepmerge(
    {
      fontSize: fontSizes[2],

      p: {
        margin: 0,
      },
    },
    customCss
  )

  return html ? (
    <div css={style} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <div css={style}>{children}</div>
  )
}

export default Person
