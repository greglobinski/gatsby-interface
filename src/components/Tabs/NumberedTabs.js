import React from "react"
import styled from "react-emotion"

import { colors, dimensions, breakpoints, spaces } from "../../utils/presets"

import TabsSkeleton from "./Tabs.Skeleton"
import { StyledBaseTabs } from "./BaseTabs"

const StyledNumberedTabs = styled(StyledBaseTabs)`
  text-align: center;
  padding-top: ${spaces[`2xl`]};

  :after {
    border-bottom: 1px solid ${colors.standardLine};
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    width: calc(100% + (2 * ${dimensions.pagePadding.mobile}));
    margin-left: -${dimensions.pagePadding.mobile};
    z-index: 1;

    @media (min-width: ${breakpoints.tablet}px) {
      width: calc(100% + (2 * ${dimensions.pagePadding.tablet}));
      margin-left: -${dimensions.pagePadding.tablet};
    }
  }
`

const NumberedTabs = props => (
  <TabsSkeleton StyledComponent={StyledNumberedTabs} {...props} />
)

export default NumberedTabs
