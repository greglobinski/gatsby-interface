/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"

import { ContentBox, SecondaryButton } from "../../"
import {
  breakpoints,
  fontFamilies,
  fontSizes,
  palette,
  spaces,
  styles,
} from "../../utils/presets"

function SettingsCard({ children }) {
  return (
    <ContentBox
      css={{
        ...styles.card.frame,
        display: `grid`,
        gridTemplateColumns: `1fr auto`,
        gridTemplateRows: `auto auto`,
        gridGap: spaces.m,
        padding: `${spaces.m} ${spaces.l} ${spaces.l}`,

        [`@media(min-width: ${breakpoints.desktop}px)`]: {
          padding: `${spaces.l} ${spaces.xl} ${spaces.xl}`,
        },
      }}
    >
      {children}
    </ContentBox>
  )
}

SettingsCard.propTypes = {
  children: PropTypes.any,
}

SettingsCard.Title = ({ children, className, ...props }) => (
  <h3
    css={{
      alignItems: `center`,
      color: palette.grey[900],
      display: `flex`,
      fontFamily: fontFamilies.headerFontFamily,
      fontSize: fontSizes.l,
      lineHeight: 1,
      margin: 0,
    }}
    className={className}
    {...props}
  >
    {children}
  </h3>
)

SettingsCard.Description = ({ children }) => (
  <p
    css={{
      color: palette.grey[500],
      fontSize: fontSizes.xs,
      fontFamily: fontFamilies.bodyFontFamily,
      gridColumn: `1 / 3`,
      lineHeight: 1.4,
      margin: 0,

      [`@media(min-width: ${breakpoints.desktop}px)`]: {
        gridColumn: `1 / 2`,
      },
    }}
  >
    {children}
  </p>
)

SettingsCard.ToggleButton = ({ children }) => (
    <ContentBox.Button
      as={SecondaryButton}
      css={{
        gridColumn: `2 / 3`,
        gridRow: `1 / 2`,
      }}
    >
      {children}
    </ContentBox.Button>
  )

SettingsCard.Content = ContentBox.Content

// SettingsCard.ToggleButton = ({ children, mode }) => {
//   const Button = mode === `danger` ? SecondaryDeleteButton : SecondaryButton

//   return (
//     <Button
//       css={{
//         gridColumn: `2 / 3`,
//         gridRow: `1 / 2`,
//       }}
//     >
//       {children}
//     </Button>
//   )
// }

export default SettingsCard
