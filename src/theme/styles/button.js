import colors from "../colors"
import animations from "../animations"
import fontSizes from "../fontSizes"
import fonts from "../fonts"

import { breakpoints, radius, spaces } from "../../utils/presets"

const base = props => {
  const { loading = false } = props || {}

  return {
    alignItems: `center`,
    border: colors.grey[60],
    borderRadius: radius.default,
    boxSizing: `border-box`,
    cursor: `pointer`,
    display: `inline-flex`,
    fontFamily: fonts.header.join(`,`),
    justifyContent: `center`,
    transition: `background 0.5s, border 0.5s, color 0.5s`,
    lineHeight: `1`,
    textDecoration: `none`,

    "&[disabled], &[disabled]:hover": {
      cursor: `not-allowed`,
      opacity: !loading ? 0.5 : 0.9,
    },
    svg: {
      animation: loading
        ? `${animations.iconLoadingAnim} 1s linear infinite`
        : ``,
      flexShrink: `0`,
      margin: `0 ${spaces[`2xs`]}`,
      transform: `scale(1)`,

      "&:last-child": {
        marginRight: `-0.25em`,
      },
      "&:first-child": {
        marginLeft: `-0.30em`,
      },
    },
    "&:hover:not([disabled])": {
      svg: {
        animation: !loading
          ? `${animations.iconHoverAnim} 1s linear infinite`
          : ``,
      },
    },
  }
}

const sizes = {
  S: {
    fontSize: fontSizes[1],
    minHeight: `1.6rem`,
    padding: `0.3rem 0.5rem`,
  },
  M: {
    fontSize: fontSizes[2],
    minHeight: `2rem`,
    padding: `0.45rem 0.75rem`,
  },
  L: {
    fontSize: fontSizes[3],
    minHeight: `2.4rem`,
    padding: `0.55rem 1rem`,
  },
  XL: {
    fontSize: fontSizes[5],
    minHeight: `3.25rem`,
    padding: `0.65rem 1.25rem`,
  },
}

const variants = {
  PRIMARY: toneColors => {
    return {
      background: toneColors.dark,
      border: `1px solid ${toneColors.dark}`,
      color: colors.white,
      fontWeight: `bold`,
      ":hover": {
        background: toneColors.darker,
        border: `1px solid ${toneColors.darker}`,
      },
    }
  },
  SECONDARY: toneColors => {
    return {
      background: `transparent`,
      border: `1px solid ${toneColors.light}`,
      color: toneColors.medium,
      ":hover": {
        borderColor: toneColors.dark,
        color: toneColors.dark,
      },
    }
  },
  GHOST: toneColors => {
    return {
      background: `transparent`,
      border: `1px solid transparent`,
      color: toneColors.medium,
      ":hover": {
        background: toneColors.superLight,
        color: toneColors.dark,
      },
    }
  },
}

const button = {
  base,
  sizes,
  variants,
}

export default button
