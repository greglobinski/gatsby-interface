import colors from "../colors"
import animations from "../animations"

import {
  breakpoints,
  fontFamilies,
  fontSizes,
  radius,
  spaces,
} from "../../utils/presets"

const base = toneColors => {
  return {
    fontFamily: fontFamilies.headerFontFamily,
    margin: `0`,
    color: toneColors.dark,
  }
}

const variants = {
  PRIMARY: toneColors => {
    return {
      fontWeight: `bold`,
    }
  },

  EMPHASIZED: toneColors => {
    return {
      fontWeight: `800`,
    }
  },
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

// const variants = {
//   PRIMARY: toneColors => {
//     return {
//       background: toneColors.dark,
//       border: `1px solid ${toneColors.dark}`,
//       color: colors.white,
//       fontWeight: `bold`,
//       ":hover": {
//         background: toneColors.darker,
//         border: `1px solid ${toneColors.darker}`,
//       },
//     }
//   },
//   SECONDARY: toneColors => {
//     return {
//       background: `transparent`,
//       border: `1px solid ${toneColors.light}`,
//       color: toneColors.medium,
//       ":hover": {
//         borderColor: toneColors.dark,
//         color: toneColors.dark,
//       },
//     }
//   },
//   GHOST: toneColors => {
//     return {
//       background: `transparent`,
//       border: `1px solid transparent`,
//       color: toneColors.medium,
//       ":hover": {
//         background: toneColors.superLight,
//         color: toneColors.dark,
//       },
//     }
//   },
// }

const heading = {
  base,
  // sizes,
  // variants,
}

export default heading
