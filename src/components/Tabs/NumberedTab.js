import React from "react"
import styled from "react-emotion"

import { palette, colors } from "../../utils/presets"

import TabSkeleton, { tabPropTypes } from "./Tab.Skeleton"
import { StyledBaseTab } from "./BaseTab"

const StyledNumberedTab = styled(StyledBaseTab)`
  background: ${colors.secondaryBackground};
  border: 1px solid ${colors.standardLine};
  color: ${palette.grey[400]};

  a {
    color: ${palette.purple[400]};
  }

  &.active {
    background: ${colors.primaryBackground};
    border-bottom-color: ${colors.secondaryBackground};
    color: ${palette.grey[900]};
  }
`

const NumberedTab = props => (
  <TabSkeleton StyledComponent={StyledNumberedTab} {...props} />
)

NumberedTab.propTypes = tabPropTypes

export default NumberedTab
