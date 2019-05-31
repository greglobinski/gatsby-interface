import React from 'react';
import styled from 'react-emotion';

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes
} from './Button.Skeleton';
import { StyledBaseButton } from './BaseButton';

import { palette } from '../../utils/presets';

const StyledSuccessButton = styled(StyledBaseButton)`
  background: ${palette.green[600]};
  border: 1px solid ${palette.green[600]};
  color: ${palette.white};
  font-weight: bold;

  :focus,
  :hover {
    background: ${palette.green[700]};
    border-color: ${palette.green[900]};
  }
`;

const SuccessButton = props => (
  <ButtonSkeleton StyledComponent={StyledSuccessButton} {...props} />
);

SuccessButton.propTypes = buttonPropTypes;
SuccessButton.defaultProps = buttonDefaultPropTypes;

export default SuccessButton;
