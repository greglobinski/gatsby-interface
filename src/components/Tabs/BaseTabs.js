import React from "react"
import styled from "react-emotion"

import TabsSkeleton, { SkeletonStyledComponent } from "./Tabs.Skeleton"

export const StyledBaseTabs = styled(SkeletonStyledComponent)`
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: center;
`

const BaseTabs = props => (
  <TabsSkeleton StyledComponent={StyledBaseTabs} {...props} />
)

export default BaseTabs
