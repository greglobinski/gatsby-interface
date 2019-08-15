import colors from "./colors"

const tones = {
  STANDARD: {
    superLight: colors.purple[5],
    light: colors.purple[20],
    medium: colors.purple[50],
    dark: colors.purple[60],
    darker: colors.purple[70],
  },
  SUCCESS: {
    superLight: colors.green[5],
    light: colors.green[20],
    medium: colors.green[50],
    dark: colors.green[80],
    darker: colors.green[90],
  },
  DANGER: {
    superLight: colors.red[5],
    light: colors.red[20],
    medium: colors.red[50],
    dark: colors.red[70],
    darker: colors.red[80],
  },
  NEUTRAL: {
    superLight: colors.grey[5],
    light: colors.grey[20],
    medium: colors.grey[40],
    dark: colors.grey[50],
    darker: colors.grey[60],
  },
  WARNING: {
    superLight: colors.yellow[5],
    light: colors.yellow[20],
    medium: colors.yellow[40],
    dark: colors.yellow[50],
    darker: colors.yellow[60],
  },
}

export default tones
