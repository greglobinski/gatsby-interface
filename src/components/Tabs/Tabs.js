import React from "react"
import styled from "react-emotion"

import TabsSkeleton from "./Tabs.Skeleton"
import { StyledBaseTabs } from "./BaseTabs"

const StyledTabs = styled(StyledBaseTabs)``

const Tabs = props => <TabsSkeleton StyledComponent={StyledTabs} {...props} />

export default Tabs
