/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { BaseText } from "../skeletons/BaseText"
import { styles, options } from "../../theme/styles/text"

const { baseStyle, variantStyles, sizeStyles } = styles
const { VARIANTS, TONES, SIZES } = options

function Text({
  children,
  tone = `NEUTRAL`,
  variant = `PRIMARY`,
  size = `M`,
  as = `p`,
  ...rest
}) {
  return (
    <BaseText
      as={as}
      css={[
        {
          ...baseStyle({ tone }),
          ...sizeStyles()[size],
          ...variantStyles()[variant],
        },
      ]}
      {...rest}
    >
      {children}
    </BaseText>
  )
}

Text.propTypes = {
  tone: PropTypes.oneOf(TONES),
  variant: PropTypes.oneOf(VARIANTS),
  size: PropTypes.oneOf(SIZES),
}

export default Text
