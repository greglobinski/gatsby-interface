/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Interpolation } from "@emotion/serialize"

import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import fontSizes from "../../../theme/fontSizes"
import radii from "../../../theme/radii"
import space from "../../../theme/space"

const FORM_FIELD_LABEL_SIZES = {
  L: fontSizes[2],
  M: fontSizes[1],
  S: fontSizes[0],
}

export type FormFieldLabelSize = "L" | "M" | "S"

export const getLabelFontSize = (size: FormFieldLabelSize): Interpolation => ({
  fontSize: FORM_FIELD_LABEL_SIZES[size],
})

export const getLabelStyles = (): Interpolation => ({
  color: colors.grey[90],
  lineHeight: 1.1,
})

export const RequiredFlag = () => (
  <span
    css={{
      color: colors.grey[50],
      fontSize: fontSizes[0],
      marginLeft: space[1],
    }}
  >
    (required)
  </span>
)

export const getFocusStyles = (hasError?: boolean) => ({
  boxShadow: `0 0 0 3px ${hasError ? colors.red[10] : colors.purple[20]}`,
  borderColor: hasError ? colors.red[30] : colors.purple[60],
})

export const getInputStyles = (hasError?: boolean): Interpolation => ({
  border: hasError
    ? `1px solid ${colors.red[60]}`
    : `1px solid ${colors.grey[30]}`,
  background: colors.white,
  borderRadius: radii[2],
  color: colors.grey[90],
  fontFamily: fonts.system,
  fontSize: fontSizes[2],
  height: `2.25rem`,
  padding: `0 ${space[3]}`,
  position: `relative`,
  width: `100%`,
  zIndex: 1,
  WebkitAppearance: `none`,

  ":focus": {
    outline: `0`,
    transition: `box-shadow 0.15s ease-in-out`,
    ...getFocusStyles(hasError),
  },

  ":disabled": {
    background: colors.grey[10],
    cursor: `not-allowed`,
  },

  "&:disabled::placeholder": {
    color: colors.grey[40],
  },

  "&::placeholder": {
    color: colors.grey[50],
  },
})

export const getDescriptionStyles = (): Interpolation => ({
  color: colors.grey[50],
  fontSize: fontSizes[0],
  lineHeight: 1.2,
  position: `relative`,
  zIndex: 0,
})
