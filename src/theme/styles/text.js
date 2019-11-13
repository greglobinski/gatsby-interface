import tones from "../tones"
import fontSizes from "../fontSizes"
import fonts from "../fonts"
import { spaces } from "../../utils/presets/spaces"

const VARIANTS = [`PRIMARY`, `EMPHASIZED`, `LEDE`, `EMPHASIZED_LEDE`, `ERROR`]
const TONES = [`BRAND`, `NEUTRAL`]
const SIZES = [`S`, `M`, `L`, `XL`]

const baseStyle = ({ tone }) => {
  return {
    color: tones[tone].darker,
    fontFamily: fonts.system.join(`,`),
    fontWeight: `normal`,
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
    "2XL": {
      fontSize: fontSizes[5],
      lineHeight: 1.5,
    },
  }
}

const variantStyles = () => {
  console.log(`sizeStyles()[M]`, sizeStyles()[`M`])
  console.log(`sizeStyles()[2XL]`, sizeStyles()[`2XL`])
  return {
    PRIMARY: {},

    EMPHASIZED: {
      fontWeight: `bold`,
    },
    LEDE: {
      ...sizeStyles()[`L`],
      margin: `0.5rem 0 0`,
    },
    EMPHASIZED_LEDE: {
      fontFamily: fonts.header.join(`,`),
      ...sizeStyles()[`2XL`],
      lineHeight: 1.3,
      margin: `1em 0 0`,
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
