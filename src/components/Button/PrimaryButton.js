import React from "react"
import styled from "react-emotion"

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
} from "./Button.Skeleton"
import { StyledBaseButton } from "./BaseButton"

import { colors, palette } from "../../utils/presets"

const StyledPrimaryButton = styled(StyledBaseButton)`
  background: ${colors.gatsby};
  border: 0;
  color: ${palette.white};
  font-weight: bold;

  :focus,
  :hover {
    background: ${palette.purple[700]};
  }
`

const PrimaryButton = props => (
  <ButtonSkeleton StyledComponent={StyledPrimaryButton} {...props} />
)

PrimaryButton.propTypes = buttonPropTypes
PrimaryButton.defaultProps = buttonDefaultPropTypes

export default PrimaryButton
