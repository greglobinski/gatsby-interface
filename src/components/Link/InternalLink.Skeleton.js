import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"
import { Link } from "gatsby"

export const SkeletonStyledComponent = styled(Link)``

export const internalLinkPropTypes = {
  to: PropTypes.string,
}

const internalLinkSkeletonPropTypes = {
  ...internalLinkPropTypes,
  StyledComponent: PropTypes.any,
}

export const internalLinkDefaultPropTypes = {}

const internalLinkSkeletonDefaultPropTypes = {
  ...internalLinkDefaultPropTypes,
  StyledComponent: SkeletonStyledComponent,
}

const InternalLinkSkeleton = ({ StyledComponent, children, to, ...rest }) => (
  <StyledComponent to={to} {...rest}>
    {children}
  </StyledComponent>
)

InternalLinkSkeleton.propTypes = internalLinkSkeletonPropTypes
InternalLinkSkeleton.defaultProps = internalLinkSkeletonDefaultPropTypes

export default InternalLinkSkeleton
