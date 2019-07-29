import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

import {
  colors,
  palette,
  radius,
  spaces,
  fontFamilies,
  fontSizes,
} from "../../utils/presets"

const INPUT_BORDER_WIDTH = `2px`
const INPUT_INNER_DIA = `22px`
const INPUT_OUTER_DIA = `calc(${INPUT_INNER_DIA} + (2 * ${INPUT_BORDER_WIDTH}))`

import RadioSkeleton, {
  radioPropTypes,
  radioDefaultPropTypes,
} from "./Radio.Skeleton"

const Label = styled(`label`)`
  align-items: center;
  color: ${palette.grey[800]};
  cursor: pointer;
  display: flex;
  font-family: ${fontFamilies.bodyFontFamily};
  font-size: ${fontSizes.s};
  line-height: 1;
  padding-left: calc(${INPUT_OUTER_DIA} + ${spaces.s});
  position: relative;
  min-height: ${INPUT_OUTER_DIA};

  :after,
  :before {
    border-radius: 50%;
    content: "";
    flex-grow: 0;
    flex-shrink: 0;
    left: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.15s ease-in-out;
  }

  :before {
    background: ${colors.primaryBackground};
    border: ${INPUT_BORDER_WIDTH} solid ${palette.grey[300]};
    height: ${INPUT_INNER_DIA};
    width: ${INPUT_INNER_DIA};
  }

  :after {
    background: ${palette.purple[600]};
    height: 8px;
    left: 7px;
    opacity: 0;
    width: 8px;
  }

  small {
    color: ${palette.grey[500]};
    font-size: ${fontSizes.xs};
    line-height: 1.1;
  }

  &.emphasized {
    padding: ${spaces.s} ${spaces.m} ${spaces.s}
      calc(${INPUT_OUTER_DIA} + ${spaces.s} + ${spaces.m});

    :before {
      left: ${spaces.m};
    }
    :after {
      left: calc(${spaces.m} + 7px);
    }
  }

  .selected &.emphasized {
    padding: ${spaces.m} ${spaces.m} ${spaces.m}
      calc(${INPUT_OUTER_DIA} + ${spaces.s} + ${spaces.m});
  }
`

const RadioInput = styled(`input`)`
  cursor: pointer;
  left: 0;
  height: 20px;
  opacity: 0;
  position: absolute;
  width: 20px;
  z-index: 2;

  &:checked + label::before {
    border-color: ${palette.purple[600]};
  }

  &:checked + label::after {
    opacity: 1;
  }

  &:hover + label::before {
    border-color: ${palette.purple[400]};
  }

  &:focus + label::before {
    border-color: ${palette.purple[600]};
    box-shadow: 0 0 0 3px ${palette.purple[200]};
  }
`

const StandardContainer = styled(`div`)`
  margin-bottom: ${spaces.m};
  position: relative;
`

const ColourfulContainer = styled(StandardContainer)`
  margin: 0;
  position: relative;

  :before,
  :after {
    content: "";
    position: absolute;
    background: #eee;
    z-index: -1;
  }
  :before {
    border-radius: ${radius.large};
    bottom: 0;
    left: 0;
    opacity: 0;
    right: 0;
    top: 0;
  }
  :after {
    background: ${palette.white};
    border-radius: 6px;
    bottom: 2px;
    left: 2px;
    right: 2px;
    top: 2px;
  }

  :hover:not(.selected) {
    :before,
    :after {
      background: ${palette.purple[50]};
      opacity: 1;
    }
  }

  &.selected {
    margin: ${spaces[`2xs`]} 0;

    :before {
      opacity: 1;
      background-image: linear-gradient(
        110deg,
        #8954a8 0,
        #663399 25%,
        #bc027f 50%,
        #ffdf37 75%,
        #05f7f4 100%
      );
    }
  }
`

const Radio = props => {
  const { selectionStyle } = props

  return (
    <RadioSkeleton
      StyledContainer={
        selectionStyle === `emphasized` ? ColourfulContainer : StandardContainer
      }
      StyledInput={RadioInput}
      StyledLabel={Label}
      {...props}
    />
  )
}

Radio.propTypes = radioPropTypes
Radio.defaultProps = radioDefaultPropTypes

export default Radio
