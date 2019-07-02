import styled from "react-emotion"

import { breakpoints, dimensions } from "../../utils/presets"

export const TabsNav = styled(`nav`)`
  display: flex;
  flex-direction: column;
  margin: 0 auto -1px auto;
  padding: 0 ${dimensions.pagePadding.mobile};
  width: 100%;

  @media (min-width: ${breakpoints.tablet}px) {
    flex-direction: row;
    padding: 0 ${dimensions.pagePadding.tablet};
  }

  @media (min-width: ${breakpoints.tablet}px) {
    padding: 0 ${dimensions.pagePadding.tablet};
  }
`
