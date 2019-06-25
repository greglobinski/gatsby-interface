import React from "react"
import styled from "react-emotion"

import ExternalLinkSkeleton, {
  externalLinkPropTypes,
  externalLinkDefaultPropTypes,
  SkeletonStyledComponent,
} from "./ExternalLink.Skeleton"

import { baseStyles } from "./BaseLink"

export const StyledExternalBaseLink = styled(SkeletonStyledComponent)`
  align-items: ${baseStyles.alignItems};
  display: ${baseStyles.display};
  font-size: ${baseStyles.fontSize};
  font-family: ${baseStyles.fontFamily};
  font-style:  ${baseStyles.fontStyle};
  font-weight:  ${baseStyles.fontWeight};
  letter-spacing: ${baseStyles.letterSpacing};
`

const BaseExternalLink = props => (
  <ExternalLinkSkeleton StyledComponent={StyledExternalBaseLink} {...props} />
)

BaseExternalLink.propTypes = externalLinkPropTypes
BaseExternalLink.defaultProps = externalLinkDefaultPropTypes

export default BaseExternalLink
