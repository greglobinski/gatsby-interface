/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"
import Img from "gatsby-image"

import { palette } from "../../../utils/presets"

const SIZES = {
  S: {
    width: `32px`,
  },
  M: {
    width: `60px`,
  },
  L: {
    width: `120px`,
  },
}

function Avatar({
  children,
  size = `M`,
  src,
  fixed,
  alt = ``,
  customCss = {},
  ...rest
}) {
  return (
    <div
      css={deepmerge(
        {
          background: palette.grey[100],
          borderRadius: `50%`,
          boxShadow: ` 0 0 5px 0 rgba(0, 0, 0, 0.3) inset;`,
          overflow: `hidden`,
          height: SIZES[size].width,
          width: SIZES[size].width,

          img: {
            margin: 0,
            width: `100%`,
            height: `100%`,
          },
        },
        customCss
      )}
      {...rest}
    >
      {src || fixed ? (
        <Avatar.Image src={src} fixed={fixed} alt={alt} />
      ) : (
        children
      )}
    </div>
  )
}

Avatar.Image = ({ src, fixed, alt, ...rest }) =>
  fixed ? (
    <Img fixed={fixed} {...rest} />
  ) : (
    <img src={src} alt={alt} {...rest} />
  )

Avatar.propTypes = {
  size: PropTypes.oneOf(Object.keys(SIZES)),
  src: PropTypes.string,
  fixed: PropTypes.object,
  alt: PropTypes.string,
  customCss: PropTypes.object,
}

export default Avatar
