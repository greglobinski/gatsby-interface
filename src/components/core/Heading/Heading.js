/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { BaseHeading } from "../../skeletons/BaseHeading"
import { styles, options } from "../../../theme/styles/heading"
import tones from "../../../theme/tones"
import { showCustomCssDeprecationMessage } from "../../../utils/maintenance/deprecationMessages"

const { baseStyle, variantStyles } = styles
const { VARIANTS, TONES } = options

function Heading({
  children,
  customCss,
  tone = `NEUTRAL`,
  variant = `PRIMARY`,
  as = `h2`,
  ...rest
}) {
  showCustomCssDeprecationMessage(customCss)

  return (
    <BaseHeading
      as={as}
      css={[
        {
          ...baseStyle({ tone }),
          ...variantStyles({ tone })[variant],
        },
        customCss,
      ]}
      {...rest}
    >
      {children}
    </BaseHeading>
  )
}

Heading.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  tone: PropTypes.oneOf(TONES),
}

export default Heading
