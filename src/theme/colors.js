import { colors as baseColors } from "gatsby-design-tokens"

const defaultColors = {
  primaryBackground: baseColors.white,
  secondaryBackground: baseColors.grey[5],
  standardLine: baseColors.grey[20],
}

const colors = {
  ...baseColors,
  ...defaultColors,
}

export default colors
