import styled from "@emotion/styled"

import {
  spaces,
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
} from "../../utils/presets"

export const CardText = styled(`p`)`
  color: ${colors.grey[50]};
  font-family: ${fontFamilies.bodyFontFamily};
  font-size: ${fontSizes.xs};
  line-height: 1.3125rem;
  letter-spacing: 0.015rem;
  margin: ${spaces.m} ${spaces.m} ${spaces.m} 0;

  @media (min-width: ${breakpoints.desktop}px) {
    margin: ${spaces.l} 15rem ${spaces.l} 0;
  }
`
