import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ButtonSkeleton, { buttonSkeletonPropTypes } from './Button.Skeleton';
import { StyledBaseButton } from './BaseButton';

let StyledSecondaryButton = styled(StyledBaseButton)`
  background: white;
  border: 1px solid purple;
  color: purple;
`;

const SecondaryButton = props => (
  <ButtonSkeleton StyledComponent={StyledSecondaryButton} {...props} />
);

SecondaryButton.propTypes = buttonSkeletonPropTypes;

export default SecondaryButton;
