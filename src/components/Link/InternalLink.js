import React from "react"
import styled from "react-emotion"

import InternalLinkSkeleton, {
  internalLinkPropTypes,
  internalLinkDefaultPropTypes,
} from "./InternalLink.Skeleton"
import { StyledInternalBaseLink } from "./BaseInternalLink"
import { linkStyles } from "./BaseLink"

export const StyledInternalLink = styled(StyledInternalBaseLink)`
  color: ${linkStyles.color}
`

const InternalLink = props => (
  <InternalLinkSkeleton StyledComponent={StyledInternalLink} {...props} />
)

InternalLink.propTypes = internalLinkPropTypes
InternalLink.defaultProps = internalLinkDefaultPropTypes

export default InternalLink
