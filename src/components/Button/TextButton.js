import React from "react"
import styled from "react-emotion"

import ButtonSkeleton, {
  buttonPropTypes,
  buttonDefaultPropTypes,
} from "./Button.Skeleton"
import { StyledBaseButton } from "./BaseButton"

import { colors, palette } from "../../utils/presets"

const StyledTextButton = styled(StyledBaseButton)`
  background: ${palette.white};
  border: 1px solid ${palette.white};
  color: ${colors.lilac};

  :focus,
  :hover {
    color: ${colors.gatsby};
  }
`

const TextButton = props => (
  <ButtonSkeleton StyledComponent={StyledTextButton} {...props} />
)

TextButton.propTypes = buttonPropTypes
TextButton.defaultProps = buttonDefaultPropTypes

export default TextButton
