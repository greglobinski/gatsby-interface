import styled from "@emotion/styled"

import { breakpoints } from "../../utils/presets"

export const NumberedTabLabel = styled(`span`)`
  display: none;

  .active & {
    display: inline;
  }

  &.desktop {
    display: none;
  }

  @media (min-width: ${breakpoints.tablet}px) {
    display: inline;

    &.desktop {
      display: inline;
    }

    &.mobile {
      display: none;
    }
  }
`
