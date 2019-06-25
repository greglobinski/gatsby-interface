import { fontSizes, fontFamilies, palette } from "../../utils/presets"

export const baseStyles = {
    alignItems: 'center',
    display: 'flex',
    fontSize: `${fontSizes.xs}`,
    fontFamily: `${fontFamilies.bodyFontFamily}`,
    fontStyle: 'normal',
    fontWeight: 'normal',
    letterSpacing: '0.25px',
}

export const linkStyles = {
    color: `${palette.purple[600]}`
}

export const simpleLinkStyles = {
    textDecoration: 'none',
    altColor: `${palette.purple[400]}`,
    altTextDecoration: 'underline',
}