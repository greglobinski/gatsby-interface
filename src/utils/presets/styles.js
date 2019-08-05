import { colors } from "./colors"
import { radius } from "./sizes"
import { fontSizes } from "./typography"
import { spaces } from "./spaces"

const elements = {
  input: {
    border: `1px solid ${colors.grey[30]}`,
    borderRadius: radius.default,
    color: colors.grey[90],
    fontSize: fontSizes.s,
    height: `2.25rem`,
    padding: `0 ${spaces.s}`,
    width: `100%`,

    ":focus": {
      borderColor: colors.purple[40],
      boxShadow: `0 0 0 3px ${colors.purple[20]}`,
      outline: `0`,
      transition: `box-shadow 0.15s ease-in-out`,
    },
  },
  button: {
    sizes: {
      S: {
        fontSize: `0.875rem`,
        minHeight: `1.6rem`,
        padding: `0.3rem 0.5rem`,
      },
      M: {
        fontSize: `1rem`,
        minHeight: `2rem`,
        padding: `0.45rem 0.75rem`,
      },
      L: {
        fontSize: `1.125rem`,
        minHeight: `2.4rem`,
        padding: `0.55rem 1rem`,
      },
      XL: {
        fontSize: `1.5rem`,
        minHeight: `3.25rem`,
        padding: `0.65rem 1.25rem`,
      },
    },
    variants: {
      PRIMARY: toneColors => {return {
        background: toneColors[3],
        border: `1px solid ${toneColors[3]}`,
        color: colors.white,
        fontWeight: `bold`,
        ":hover": {
          background: toneColors[4],
          border: `1px solid ${toneColors[4]}`,
        },
      }},
      SECONDARY: toneColors => {return {
        background: `transparent`,
        border: `1px solid ${toneColors[1]}`,
        color: toneColors[2],
        ":hover": {
          borderColor: toneColors[3],
          color: toneColors[3],
        },
      }},
      GHOST: toneColors => {return {
        background: `transparent`,
        border: `1px solid transparent`,
        color: toneColors[2],
        ":hover": {
          background: toneColors[0],
          color: toneColors[3],
        },
      }},
    },
  },
}

const options = {
  tones: {
    STANDARD: [
      colors.purple[5],
      colors.purple[20],
      colors.purple[50],
      colors.purple[60],
      colors.purple[70],
    ],
    SUCCESS: [
      colors.green[5],
      colors.green[20],
      colors.green[50],
      colors.green[80],
      colors.green[90],
    ],
    DANGER: [
      colors.red[5],
      colors.red[20],
      colors.red[50],
      colors.red[70],
      colors.red[80],
    ],
    NEUTRAL: [
      colors.grey[5],
      colors.grey[20],
      colors.grey[40],
      colors.grey[50],
      colors.grey[60],
    ],
  },
}

export const styles = {
  ...elements,
  ...options,
}
