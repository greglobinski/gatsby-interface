import React from "react"
import styled from "react-emotion"

import {
  colors,
  palette,
  radius,
  spaces,
  breakpoints,
  fontFamilies,
  fontSizes,
} from "../../utils/presets"

import TabSkeleton, {
  tabPropTypes,
  SkeletonStyledComponent,
} from "./Tab.Skeleton"

export const StyledBaseTab = styled(SkeletonStyledComponent)`
  align-items: center;
  border-radius: ${radius.default} ${radius.default} 0 0;
  color: ${palette.purple[500]};
  display: inline-flex;
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${fontSizes.m};
  font-weight: bold;
  height: 3.5rem;
  margin: 0 ${spaces[`2xs`]};
  padding: ${spaces[`3xs`]} ${spaces.m} 0;
  position: relative;
  z-index: 0;

  a {
    align-items: center;
    display: flex;
    text-decoration: none;
    &:active {
      color: inherit;
    }
  }

  &.active {
    z-index: 2;

    :before,
    :after {
      border: 1px solid ${colors.standardLine};
      bottom: -1px;
      content: "";
      height: 6px;
      position: absolute;
      width: 6px;
    }

    :before {
      border-bottom-right-radius: 6px;
      border-width: 0 1px 1px 0;
      box-shadow: 2px 2px 0 #fff;
      left: -6px;
    }
    :after {
      border-bottom-left-radius: 6px;
      border-width: 0 0 1px 1px;
      box-shadow: -2px 2px 0 #fff;
      right: -6px;
    }
  }

  @media (min-width: ${breakpoints.phablet}px) {
    padding: ${spaces[`3xs`]} ${spaces.l} 0;
  }
`

const BaseTab = props => (
  <TabSkeleton StyledComponent={StyledBaseTab} {...props} />
)

BaseTab.propTypes = tabPropTypes

export default BaseTab
