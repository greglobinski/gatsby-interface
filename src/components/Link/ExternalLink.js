import React from "react"
import styled from "react-emotion"

import ExternalLinkSkeleton, {
  externalLinkPropTypes,
  externalLinkDefaultPropTypes,
} from "./ExternalLink.Skeleton"
import { StyledExternalBaseLink } from "./BaseExternalLink"
import { linkStyles } from "./BaseLink"

export const StyledExternalLink = styled(StyledExternalBaseLink)`
  color: ${linkStyles.color}
`

const ExternalLink = props => (
  <ExternalLinkSkeleton StyledComponent={StyledExternalLink} {...props} />
)

ExternalLink.propTypes = externalLinkPropTypes
ExternalLink.defaultProps = externalLinkDefaultPropTypes

export default ExternalLink
