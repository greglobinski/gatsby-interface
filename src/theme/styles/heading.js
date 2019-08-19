import colors from "../colors"
import animations from "../animations"
import tones from "../tones"
import fontSizes from "../fontSizes"
import fonts from "../fonts"

import { breakpoints, radius, spaces } from "../../utils/presets"

const VARIANTS = [`PRIMARY`, `EMPHASIZED`, `LIGHT`]
const TONES = [`BRAND`, `SUCCESS`, `DANGER`, `NEUTRAL`]

const baseStyle = ({ tone }) => {
  return {
    fontFamily: fonts.header.join(`,`),
    margin: `0`,
    color: tones[tone].superDark,
  }
}

const variantStyles = {
  PRIMARY: {
    fontWeight: `bold`,
  },

  EMPHASIZED: {
    fontWeight: 800,
  },

  LIGHT: {
    fontWeight: 100,
    textTransform: `uppercase`,
  },
}

export const styles = {
  baseStyle,
  variantStyles,
  // sizes,
}

export const options = {
  VARIANTS,
  TONES,
}

// const sizes = {
//   S: {
//     fontSize: `0.875rem`,
//     minHeight: `1.6rem`,
//     padding: `0.3rem 0.5rem`,
//   },
//   M: {
//     fontSize: `1rem`,
//     minHeight: `2rem`,
//     padding: `0.45rem 0.75rem`,
//   },
//   L: {
//     fontSize: `1.125rem`,
//     minHeight: `2.4rem`,
//     padding: `0.55rem 1rem`,
//   },
//   XL: {
//     fontSize: `1.5rem`,
//     minHeight: `3.25rem`,
//     padding: `0.65rem 1.25rem`,
//   },
// }
