import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { ButtonSkeleton } from '.';

export const StyledBaseButton = styled(`button`)`
  background: grey;
  border: 0;
  color: white;
  font-size: 1rem;
`;

const BaseButton = props => (
  <ButtonSkeleton {...props} StyledComponent={StyledBaseButton} />
);

export default BaseButton;
