/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Interpolation } from "@emotion/serialize"

import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import fontSizes from "../../../theme/fontSizes"
import radii from "../../../theme/radii"
import space from "../../../theme/space"

export const getWrapperSpacingStyles = (
  hasError: boolean | undefined
): Interpolation => ({
  marginBottom: hasError ? space[8] : space[7],

  "&:last-child": {
    marginBottom: hasError ? space[8] : 0,
  },
})

const FORM_FIELD_LABEL_SIZES = {
  L: fontSizes[2],
  M: fontSizes[1],
  S: fontSizes[0],
}

export type FormFieldLabelSize = "L" | "M" | "S"

export const getLabelFontSize = (size: FormFieldLabelSize): Interpolation => ({
  fontSize: FORM_FIELD_LABEL_SIZES[size],
})

export const getLabelStyles = ({
  isRequired,
}: {
  isRequired: boolean | undefined
}): Interpolation => ({
  alignItems: isRequired ? `flex-end` : undefined,
  color: colors.grey[60],
  display: isRequired ? `flex` : `block`,
  lineHeight: 1.3,
  justifyContent: `space-between`,
  margin: `0 ${space[2]} ${space[2]}`,
})

export const RequiredFlag = () => (
  <span
    css={{
      color: colors.purple[50],
      fontSize: fontSizes[0],
      marginRight: space[2],
    }}
  >
    required
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
  width: `100%`,
  position: `relative`,
  zIndex: 1,
  WebkitAppearance: `none`,

  ":focus": {
    //borderColor: colors.purple[40],
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
  alignItems: `flex-start`,
  color: colors.grey[50],
  display: `flex`,
  fontSize: fontSizes[0],
  lineHeight: 1.2,
  margin: `0 ${space[2]}`,
  position: `relative`,
  zIndex: 0,

  svg: {
    flexShrink: 0,
    marginRight: space[2],
    marginTop: `0.1em`,
    width: `1em`,
    height: `1em`,
  },
})
