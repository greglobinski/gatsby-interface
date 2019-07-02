import React from "react"
import styled from "react-emotion"

import { colors, palette, fontFamilies, fontSizes } from "../../utils/presets"

import { StyledBaseTab } from "./BaseTab"
import TabSkeleton, { tabPropTypes } from "./Tab.Skeleton"

const StyledTab = styled(StyledBaseTab)`
  border: 1px solid ${colors.standardLine};
  color: ${palette.purple[500]};
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${fontSizes.m};
  font-weight: bold;

  a {
    &:active {
      color: inherit;
    }
  }

  &.active {
    background: ${colors.secondaryBackground};
    border-bottom-color: ${colors.secondaryBackground};
    color: ${palette.grey[900]};

    :before,
    :after {
      border: 1px solid ${colors.standardLine};
    }
  }
`

const Tab = props => <TabSkeleton StyledComponent={StyledTab} {...props} />

Tab.propTypes = tabPropTypes

export default Tab
