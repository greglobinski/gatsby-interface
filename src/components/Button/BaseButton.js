import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ButtonSkeleton, {
  buttonSkeletonPropTypes,
  SkeletonStyledComponent
} from './Button.Skeleton';

export const StyledBaseButton = styled(SkeletonStyledComponent)`
  background: grey;
  border: 0;
  color: white;
  font-size: 1rem;
`;

const BaseButton = props => (
  <ButtonSkeleton StyledComponent={StyledBaseButton} {...props} />
);

BaseButton.propTypes = buttonSkeletonPropTypes;

export default BaseButton;
