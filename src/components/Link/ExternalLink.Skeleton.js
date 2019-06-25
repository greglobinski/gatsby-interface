import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

export const SkeletonStyledComponent = styled(`a`)``

export const externalLinkPropTypes = {
  href: PropTypes.string,
}

const externalLinkSkeletonPropTypes = {
  ...externalLinkPropTypes,
  StyledComponent: PropTypes.any,
}

export const externalLinkDefaultPropTypes = {}

const externalLinkSkeletonDefaultPropTypes = {
  ...externalLinkDefaultPropTypes,
  StyledComponent: SkeletonStyledComponent,
}

const ExternalLinkSkeleton = ({ StyledComponent, children, href, ...rest }) => (
  <StyledComponent href={href} {...rest}>
    {children}
  </StyledComponent>
)

ExternalLinkSkeleton.propTypes = externalLinkSkeletonPropTypes
ExternalLinkSkeleton.defaultProps = externalLinkSkeletonDefaultPropTypes

export default ExternalLinkSkeleton
