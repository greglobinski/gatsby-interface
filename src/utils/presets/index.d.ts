declare module "presets"

/** Colors */
interface ColorVariant {
  900: string
  800: string
  700: string
  600: string
  500: string
  400: string
  300: string
  200: string
  100: string
  50: string
}
export const palette: {
  purple: ColorVariant
  orange: ColorVariant
  yellow: ColorVariant
  red: ColorVariant
  magenta: ColorVariant
  blue: ColorVariant
  teal: ColorVariant
  green: ColorVariant
  grey: ColorVariant
  white: string
  black: string
}

export const colors: {
  gatsby: string
  lilac: string
  accent: string
  lemon: string
  primaryBackground: string
  secondaryBackground: string
  standardLine: string
}

/** Fonts */
export const fontFamilies: {
  headerFontFamily: string
  bodyFontFamily: string
  monospaceFontFamily: string
}

export const fontSizes: {
  "7xl": string
  "6xl": string
  "5xl": string
  "4xl": string
  "3xl": string
  "2xl": string
  xl: string
  l: string
  m: string
  s: string
  xs: string
  "2xs": string
  "3xs": string
  "4xs": string
}

/** Spaces */
export const spaces: {
  "3xs": string
  "2xs": string
  xs: string
  s: string
  m: string
  l: string
  xl: string
  "2xl": string
  "3xl": string
  "4xl": string
  "5xl": string
}

export const breakpoints: {
  mobile: number
  phablet: number
  tablet: number
  desktop: number
  hd: number
}

/** Sizes */
export const dimensions: {
  siteHeader: {
    height: string
  }
  dropdown: {
    list: {
      width: string
    }
  }
  toast: {
    minHeight: string
  }
  pageNav: {
    minHeight: string
  }
  pagePadding: {
    mobile: string
    tablet: string
  }
  buildList: {
    indentation: string
  }
}

export const radius: {
  default: string
  large: string
}
