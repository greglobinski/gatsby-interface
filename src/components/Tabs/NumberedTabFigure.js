import styled from "react-emotion"

import {
  palette,
  fontFamilies,
  fontSizes,
  breakpoints,
  spaces,
} from "../../utils/presets"

export const NumberedTabFigure = styled(`span`)`
  align-items: center;
  background: ${palette.grey[300]};
  border-radius: 50%;
  color: ${palette.white};
  display: flex;
  font-family: ${fontFamilies.bodyFontFamily};
  font-size: ${fontSizes[`3xs`]};
  font-weight: bold;
  height: 20px;
  justify-content: center;
  line-height: 1;
  width: 20px;

  .active & {
    background: ${palette.purple[400]};
    margin-right: ${spaces.s};
  }

  .done & {
    background: ${palette.purple[300]};
  }

  @media (min-width: ${breakpoints.tablet}px) {
    margin-right: ${spaces.s};
  }
`
