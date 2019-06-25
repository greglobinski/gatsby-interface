import React from "react"
import styled from "react-emotion"

import InternalLinkSkeleton, {
  internalLinkPropTypes,
  internalLinkDefaultPropTypes,
} from "./InternalLink.Skeleton"
import { StyledInternalBaseLink } from "./BaseInternalLink"
import { linkStyles, simpleLinkStyles } from "./BaseLink"

export const StyledSimpleInternalLink = styled(StyledInternalBaseLink)`
  color: ${linkStyles.color};
  text-decoration: ${simpleLinkStyles.textDecoration};

  :focus,
  :hover {
    color: ${simpleLinkStyles.altColor};
    text-decoration: ${simpleLinkStyles.altTextDecoration};
  }
`

const SimpleInternalLink = props => (
  <InternalLinkSkeleton StyledComponent={StyledSimpleInternalLink} {...props} />
)

SimpleInternalLink.propTypes = internalLinkPropTypes
SimpleInternalLink.defaultProps = internalLinkDefaultPropTypes

export default SimpleInternalLink
