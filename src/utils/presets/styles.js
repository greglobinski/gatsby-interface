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
}

export const styles = {
  ...elements,
}
