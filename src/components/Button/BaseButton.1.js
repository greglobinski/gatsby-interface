import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'react-emotion';

import {
  colors,
  fontFamilies,
  radius,
  palette,
  fontSizes,
  breakpoints,
  spaces
} from '../../utils/presets';

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
  SkeletonStyledComponent
} from './Button.Skeleton';

import { MdRefresh } from 'react-icons/md';

const loading = keyframes`
  0% {
    transform: translateX(0.2em) rotate(0);
  }
  100% {
    transform: translateX(0.2em) rotate(360deg);
  }
`;

const pulse = keyframes`
  33% {
    transform: translateX(0.2em) scale(1.05);
  }
  66% {
    transform: translateX(0.2em) scale(0.85);
  }

`;

const sizes = {
  S: {
    fontSize: 0.875,
    height: 1.5,
    horizontalPadding: 0.5,
    verticalPadding: 0.3
  },
  M: {
    fontSize: 1,
    height: 2,
    horizontalPadding: 0.75,
    verticalPadding: 0.45
  },
  L: {
    fontSize: 1.125,
    height: 2.25,
    horizontalPadding: 1,
    verticalPadding: 0.55
  },
  XL: {
    fontSize: 1.5,
    height: 3.25,
    horizontalPadding: 1.25,
    verticalPadding: 0.65
  }
};

export const StyledBaseButton = styled(SkeletonStyledComponent)`
  align-items: center;
  border: ${palette.grey[600]};
  border-radius: ${radius.default};
  box-sizing: border-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  font-family: ${fontFamilies.headerFontFamily};
  font-size: ${props => sizes[props.size].fontSize}rem;
  line-height: 1;
  min-height: ${props => sizes[props.size].height}rem;
  padding: ${props => sizes[props.size].verticalPadding}rem
    ${props => sizes[props.size].horizontalPadding}rem;
  text-decoration: none;
  transition: 0.5s;

  &[disabled],
  &[disabled]:hover {
    cursor: not-allowed;
    background: ${palette.grey[400]};
    border: 1px solid ${palette.grey[400]};
  }

  svg {
    flex-shrink: 0;
    transform: translateX(0.2em) scale(1);
    animation: ${props =>
      props.loading ? `${loading} 1s linear infinite` : ``};
  }

  &:hover:not([disabled]) {
    svg {
      animation: ${pulse} 1s linear infinite;
    }
  }
`;

const BaseButton = props => (
  <ButtonSkeleton StyledComponent={StyledBaseButton} {...props} />
);

BaseButton.propTypes = buttonPropTypes;
BaseButton.defaultProps = buttonDefaultPropTypes;

export default BaseButton;
