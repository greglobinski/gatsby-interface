import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes
} from './Button.Skeleton';
import { StyledBaseButton } from './BaseButton';

import { colors, palette } from '../../utils/presets';

let StyledPrimaryDeleteButton = styled(StyledBaseButton)`
  background: ${palette.red[600]};
  border: 1px solid ${palette.red[600]};
  color: ${palette.white};
  font-weight: bold;

  :focus,
  :hover {
    background: ${palette.red[700]};
    border-color: ${palette.red[900]};
  }
`;

const PrimaryDeleteButton = props => (
  <ButtonSkeleton StyledComponent={StyledPrimaryDeleteButton} {...props} />
);

PrimaryDeleteButton.propTypes = buttonPropTypes;
PrimaryDeleteButton.defaultProps = buttonDefaultPropTypes;

export default PrimaryDeleteButton;
