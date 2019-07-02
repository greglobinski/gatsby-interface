import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"
import { Link } from "gatsby"

export const SkeletonStyledComponent = styled(`li`)``

export const tabPropTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
}

const tabSkeletonPropTypes = {
  ...tabPropTypes,
  StyledComponent: PropTypes.any,
}

const tabSkeletonDefaultPropTypes = {
  StyledComponent: SkeletonStyledComponent,
}

const TabSkeleton = ({
  StyledComponent,
  className,
  to,
  onClick,
  children,
  ...rest
}) => (
  <StyledComponent className={className} {...rest}>
    {to ? (
      <Link to={to} onClick={onClick}>
        {children}
      </Link>
    ) : (
      children
    )}
  </StyledComponent>
)

TabSkeleton.propTypes = tabSkeletonPropTypes
TabSkeleton.defaultProps = tabSkeletonDefaultPropTypes

export default TabSkeleton
