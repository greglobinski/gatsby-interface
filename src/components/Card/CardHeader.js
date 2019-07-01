import styled from "react-emotion"

import { breakpoints } from "../../utils/presets"

export const CardHeader = styled(`header`)`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: ${breakpoints.tablet}px) {
    min-height: 2.3rem;
  }
`
