import React from "react"
import styled from "react-emotion"

import InternalLinkSkeleton, {
  internalLinkPropTypes,
  internalLinkDefaultPropTypes,
  SkeletonStyledComponent,
} from "./InternalLink.Skeleton"

import { baseStyles } from "./BaseLink"

export const StyledInternalBaseLink = styled(SkeletonStyledComponent)`
  align-items: ${baseStyles.alignItems};
  display: ${baseStyles.display};
  font-size: ${baseStyles.fontSize};
  font-family: ${baseStyles.fontFamily};
  font-style:  ${baseStyles.fontStyle};
  font-weight:  ${baseStyles.fontWeight};
  letter-spacing: ${baseStyles.letterSpacing};
`

const BaseInternalLink = props => (
  <InternalLinkSkeleton StyledComponent={StyledInternalBaseLink} {...props} />
)

BaseInternalLink.propTypes = internalLinkPropTypes
BaseInternalLink.defaultProps = internalLinkDefaultPropTypes

export default BaseInternalLink
