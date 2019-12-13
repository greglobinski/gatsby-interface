import colors from "../colors"

import space  "../../theme/space"

const card = {
  frame: {
    background: colors.primaryBackground,
    borderRadius: space[2],
    boxShadow: `0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08)`,
  },
  space: {
    header: {
      padding: `${spaces.l} ${space[9]} ${spaces.xl}`,
    },
    row: {
      padding: `${spaces.m} ${space[9]}`,
    },
    activeRow: {
      padding: `${spaces.xl} ${space[9]} ${space[9]}`,
    },
    M: {
      padding: `${spaces.m} ${space[9]}`,
    },
    L: {
      padding: `${spaces.l} ${space[9]} ${spaces.xl}`,
    },
    XL: {
      padding: `${spaces.xl} ${space[9]} ${space[9]}`,
    },
  },
}

export default card
