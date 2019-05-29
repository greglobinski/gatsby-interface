import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ButtonSkeleton, { buttonSkeletonPropTypes } from './Button.Skeleton';
import { StyledBaseButton } from './BaseButton';

let StyledPrimaryButton = styled(StyledBaseButton)`
  background: purple;
`;

const PrimaryButton = props => (
  <ButtonSkeleton StyledComponent={StyledPrimaryButton} {...props} />
);

PrimaryButton.propTypes = buttonSkeletonPropTypes;

export default PrimaryButton;
