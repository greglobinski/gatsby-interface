import styled from "@emotion/styled"

import {
  spaces,
  breakpoints,
  palette,
  fontFamilies,
  fontSizes,
} from "../../utils/presets"

export const CardText = styled(`p`)`
  color: ${palette.grey[500]};
  font-family: ${fontFamilies.bodyFontFamily};
  font-size: ${fontSizes.xs};
  line-height: 1.3125rem;
  letter-spacing: 0.015rem;
  margin: ${spaces.m} ${spaces.m} ${spaces.m} 0;

  @media (min-width: ${breakpoints.desktop}px) {
    margin: ${spaces.l} 15rem ${spaces.l} 0;
  }
`
