import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

export const SkeletonStyledComponent = styled(`ul`)``

const tabsSkeletonPropTypes = {
  StyledComponent: PropTypes.any,
}

const tabsSkeletonDefaultPropTypes = {
  StyledComponent: SkeletonStyledComponent,
}

const TabsSkeleton = ({ StyledComponent, children, ...rest }) => (
  <StyledComponent {...rest}>{children}</StyledComponent>
)

TabsSkeleton.propTypes = tabsSkeletonPropTypes
TabsSkeleton.defaultProps = tabsSkeletonDefaultPropTypes

export default TabsSkeleton
