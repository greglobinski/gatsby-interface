import React from "react"
import styled from "react-emotion"

import ExternalLinkSkeleton, {
  externalLinkPropTypes,
  externalLinkDefaultPropTypes,
} from "./ExternalLink.Skeleton"
import { StyledExternalBaseLink } from "./BaseExternalLink"
import { linkStyles, simpleLinkStyles } from "./BaseLink"

export const StyledSimpleExternalLink = styled(StyledExternalBaseLink)`
color: ${linkStyles.color};
text-decoration: ${simpleLinkStyles.textDecoration};

:focus,
:hover {
  color: ${simpleLinkStyles.altColor};
  text-decoration: ${simpleLinkStyles.altTextDecoration};
}
`

const SimpleExternalLink = props => (
  <ExternalLinkSkeleton StyledComponent={StyledSimpleExternalLink} {...props} />
)

SimpleExternalLink.propTypes = externalLinkPropTypes
SimpleExternalLink.defaultProps = externalLinkDefaultPropTypes

export default SimpleExternalLink
