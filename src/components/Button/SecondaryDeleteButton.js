import React from "react"
import styled from "react-emotion"

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
} from "./Button.Skeleton"
import { StyledBaseButton } from "./BaseButton"

import { palette } from "../../utils/presets"

const StyledSecondaryDeleteButton = styled(StyledBaseButton)`
  background: ${palette.white};
  border: 1px solid ${palette.red[200]};
  color: ${palette.red[500]};

  :focus,
  :hover {
    border-color: ${palette.red[600]};
    color: ${palette.red[600]};
  }
`

const SecondaryDeleteButton = props => (
  <ButtonSkeleton StyledComponent={StyledSecondaryDeleteButton} {...props} />
)

SecondaryDeleteButton.propTypes = buttonPropTypes
SecondaryDeleteButton.defaultProps = buttonDefaultPropTypes

export default SecondaryDeleteButton
