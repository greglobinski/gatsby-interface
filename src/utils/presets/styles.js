import {
  colors,
  breakpoints,
  fontFamilies,
  fontSizes,
  palette,
  spaces,
} from "./"

export const styles = {
  card: {
    frame: {
      background: colors.primaryBackground,
      borderRadius: spaces[`2xs`],
      boxShadow: `0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08)`,
      padding: `${spaces.l} ${spaces[`2xl`]} ${spaces.xl};`,

      [`@media (min-width: ${breakpoints.desktop}px)`]: {
        marginBottom: spaces.l,
        padding: `${spaces.l} ${spaces[`2xl`]} ${spaces.xl}`,
      },
    },
    title: {
      alignItems: `center`,
      color: palette.grey[900],
      display: `flex`,
      fontFamily: fontFamilies.headerFontFamily,
      fontSize: fontSizes.l,
      lineHeight: 1,
      margin: 0,
      minHeight: `2.25rem`,
    },
  },
}
