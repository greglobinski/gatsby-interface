import styled from "@emotion/styled"

import colors from "../../theme/colors"
import space from "../../theme/space"

import { breakpoints, fontFamilies, fontSizes } from "../../utils/presets"

export const CardTitle = styled(`h2`)`
  align-items: center;
  color: ${colors.grey[90]};
  display: flex;
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${fontSizes.l};
  margin: ${space[3]} 0 ${space[4]};

  @media (min-width: ${breakpoints.desktop}px) {
    margin: 0;
  }
`
