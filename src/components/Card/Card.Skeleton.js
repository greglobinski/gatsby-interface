import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

export const SkeletonStyledComponent = styled(`div`)``

const cardSkeletonPropTypes = {
  StyledComponent: PropTypes.any,
}

const cardSkeletonDefaultPropTypes = {
  StyledComponent: SkeletonStyledComponent,
}

const CardSkeleton = ({ StyledComponent, children, ...rest }) => <StyledComponent {...rest}>{children}</StyledComponent>

CardSkeleton.propTypes = cardSkeletonPropTypes
CardSkeleton.defaultProps = cardSkeletonDefaultPropTypes

export default CardSkeleton
