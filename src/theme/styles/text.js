import tones from "../tones"
import fontSizes from "../fontSizes"
import fonts from "../fonts"
import { spaces } from "../../utils/presets/spaces"

const VARIANTS = [`PRIMARY`, `EMPHASIZED`, `ERROR`]
const TONES = [`BRAND`, `NEUTRAL`]
const SIZES = [`S`, `M`, `L`, `XL`]

const baseStyle = ({ tone }) => {
  return {
    color: tones[tone].darker,
    fontFamily: fonts.system.join(`,`),
    fontWeight: `normal`,
  }
}

const variantStyles = () => {
  return {
    PRIMARY: {},

    EMPHASIZED: {
      fontWeight: `bold`,
    },

    ERROR: {
      svg: {
        marginRight: spaces.xs,
        verticalAlign: `middle`,
        marginTop: `-0.1rem`,
        color: tones.DANGER.medium,
      },
    },
  }
}

const sizeStyles = () => {
  return {
    S: {
      fontSize: fontSizes[1],
      lineHeight: 1.5,
    },
    M: {
      fontSize: fontSizes[2],
      lineHeight: 1.5,
    },
    L: {
      fontSize: fontSizes[3],
      lineHeight: 1.5,
    },
    XL: {
      fontSize: fontSizes[4],
      lineHeight: 1.5,
    },
  }
}

export const styles = {
  baseStyle,
  variantStyles,
  sizeStyles,
}

export const options = {
  VARIANTS,
  TONES,
  SIZES,
}
