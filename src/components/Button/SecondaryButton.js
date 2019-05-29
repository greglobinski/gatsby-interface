import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes
} from './Button.Skeleton';
import { StyledBaseButton } from './BaseButton';

import { colors, palette } from '../../utils/presets';

let StyledSecondaryButton = styled(StyledBaseButton)`
  background: ${palette.white};
  border: 1px solid ${palette.purple[200]};
  color: ${colors.lilac};

  :focus,
  :hover {
    border: 1px solid ${palette.purple[600]};
    color: ${palette.purple[600]};
  }
`;

const SecondaryButton = ({ StyledComponent, ...rest }) => (
  <ButtonSkeleton StyledComponent={StyledSecondaryButton} {...rest} />
);

SecondaryButton.propTypes = buttonPropTypes;
SecondaryButton.defaultProps = buttonDefaultPropTypes;

export default SecondaryButton;
