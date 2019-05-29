import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { ButtonSkeleton } from '.';
import { StyledBaseButton } from './BaseButton';

let StyledPrimaryButton = styled(StyledBaseButton)`
  background: purple;
`;

const PrimaryButton = props => (
  <ButtonSkeleton {...props} StyledComponent={StyledPrimaryButton} />
);

export default PrimaryButton;
