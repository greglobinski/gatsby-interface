import React from "react"
import styled from "react-emotion"

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
} from "./Button.Skeleton"
import { StyledBaseButton } from "./BaseButton"

import { palette } from "../../utils/presets"

const StyledCancelButton = styled(StyledBaseButton)`
  background: ${palette.white};
  border: 1px solid ${palette.grey[300]};
  color: ${palette.grey[600]};

  :focus,
  :hover {
    border: 1px solid ${palette.grey[600]};
    color: ${palette.grey[900]};
  }
`

const CancelButton = props => (
  <ButtonSkeleton StyledComponent={StyledCancelButton} {...props} />
)

// CancelButton.propTypes = buttonPropTypes
// CancelButton.defaultProps = buttonDefaultPropTypes

export default CancelButton
