import React from "react"
import styled from "@emotion/styled"

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
} from "./Button.Skeleton"
import { StyledBaseButton } from "./BaseButton"

import { palette } from "../../utils/presets"

const StyledSecondaryButton = styled(StyledBaseButton)`
  background: ${palette.white};
  border: 1px solid ${palette.purple[200]};
  color: ${palette.purple[500]};

  :focus,
  &:hover:not([disabled]) {
    border: 1px solid ${palette.purple[600]};
    color: ${palette.purple[600]};
  }
`

const SecondaryButton = ({ StyledComponent, ...rest }) => (
  <ButtonSkeleton StyledComponent={StyledSecondaryButton} {...rest} />
)

SecondaryButton.propTypes = buttonPropTypes
SecondaryButton.defaultProps = buttonDefaultPropTypes

export default SecondaryButton
