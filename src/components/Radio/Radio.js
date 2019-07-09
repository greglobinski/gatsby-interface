import React from "react"
import PropTypes from "prop-types"
import styled from "react-emotion"

import { colors, palette, radius, spaces, fontSizes } from "../../utils/presets"

import RadioSkeleton, { radioSkeletonPropTypes } from "./Radio.Skeleton"

const Label = styled(`label`)`
  align-items: center;
  line-height: 1;
  display: flex;
  cursor: pointer;
  position: relative;

  :after,
  :before {
    border-radius: 50%;
    content: "";
    display: flex;
    left: 0;
    position: absolute;
    transition: 0.15s ease-in-out;
    top: 0;
  }

  :before {
    background: ${colors.primaryBackground};
    border: 2px solid ${palette.grey[300]};
    height: 22px;
    width: 22px;
  }

  :after {
    background: ${palette.purple[600]};
    height: 8px;
    left: 7px;
    opacity: 0;
    top: 7px;
    width: 8px;
  }

  small {
    color: ${palette.grey[500]};
    font-size: ${fontSizes.xs};
    line-height: 1.1;
  }
`

const RadioInput = styled(`input`)`
  position: absolute;
  left: 0;
  width: 20px;
  height: 20px;
  opacity: 0;
  cursor: pointer;
  z-index: 2;

  &:checked + label::before {
    border-color: ${palette.purple[600]};
  }

  &:checked + label::after {
    opacity: 1;
  }

  &:hover + label::before {
    border-color: red;
  }

  &:focus + label::before {
    border-color: ${palette.purple[600]};
    box-shadow: 0 0 0 3px ${palette.purple[200]};
  }
`

const StandardContainer = styled(`div`)`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin: ${spaces.m} ${spaces[`2xs`]};
  position: relative;

  ${Label} {
    padding-left: ${spaces.xl};

    :before {
      left: 0;
    }

    :after {
      left: 7px;
    }
  }
`

const ColourfulContainer = styled(StandardContainer)`
  margin: 0;

  :before,
  :after {
    content: "";
    position: absolute;
    z-index: -1;
    background: #eee;
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
    top: 2px;
    left: 2px;
    bottom: 2px;
    right: 2px;
    background: ${palette.white};
    border-radius: 6px;
  }

  :hover:not(.selected) {
    :before,
    :after {
      opacity: 1;
      background: ${palette.purple[50]};
    }
  }

  &.selected {
    margin: ${spaces[`2xs`]} 0;
    padding: ${spaces[`3xs`]} 0;

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

  ${Label} {
    padding: ${spaces.m};
    padding-left: ${spaces[`3xl`]};
    width: 100%;

    :before {
      left: ${spaces.m};
      top: 50%;
      transform: translateY(-50%);
    }

    :after {
      left: calc(${spaces.m} + 7px);
      top: 50%;
      transform: translateY(-50%);
    }
  }
`

const Radio = ({ selectionStyle, ...rest }) => (
    <RadioSkeleton
      StyledContainer={
        selectionStyle === `emphasized` ? ColourfulContainer : StandardContainer
      }
      StyledInput={RadioInput}
      StyledLabel={Label}
      {...rest}
    />
  )

Radio.propTypes = {
  ...radioSkeletonPropTypes,
  selectionStyle: PropTypes.oneOf([`standard`, `emphasize`]),
}

Radio.defaultProps = {
  selectionStyle: `standard`,
}

export default Radio
