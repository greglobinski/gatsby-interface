/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { MdEdit, MdArrowForward } from "react-icons/md"

import {
  ContentBox,
  SecondaryButton,
  CancelButton,
  PrimaryButton,
} from "../../"
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
        gridGap: spaces.m,
        gridTemplateColumns: `1fr auto`,
        gridTemplateRows: `auto auto`,

        padding: `${spaces.m} ${spaces.l} ${spaces.l}`,
        transition: `height 0.5s`,

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
      ...styles.card.title,
    }}
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

SettingsCard.EditButton = ({ children }) => (
  <ContentBox.Button
    as={SecondaryButton}
    behaviour="HIDE"
    css={{
      gridColumn: `2 / 3`,
      gridRow: `1 / 2`,
    }}
  >
    {children ? (
      children
    ) : (
      <Fragment>
        Edit <MdEdit />
      </Fragment>
    )}
  </ContentBox.Button>
)

SettingsCard.ActionButton = ({ children, onClick }) => (
  <SecondaryButton onClick={onClick}>{children}</SecondaryButton>
)

const entry = keyframes`
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

SettingsCard.Actions = ({ children }) => (
  <div
    css={{
      animation: `${entry} 0.5s 0.2s ease forwards`,
      display: `flex`,
      justifyContent: `space-between`,
      marginTop: spaces.m,
      opacity: 0,
      transform: `translateY(.5rem)`,
    }}
  >
    {children}
  </div>
)

SettingsCard.CancelButton = ({ children }) => (
  <ContentBox.Button as={CancelButton} css={{}}>
    {children ? children : `Cancel`}
  </ContentBox.Button>
)

SettingsCard.SubmitButton = ({ children }) => (
  <PrimaryButton>
    {children ? (
      children
    ) : (
      <Fragment>
        Save <MdArrowForward />
      </Fragment>
    )}
  </PrimaryButton>
)

SettingsCard.Content = ({ children, ...props }) => (
  <ContentBox.Content
    css={{
      animation: `${entry} 0.5s 0.1s ease forwards`,
      gridColumn: `1 / 3`,
      opacity: 0,
      transform: `translateY(.5rem)`,
    }}
    {...props}
  >
    {children}
  </ContentBox.Content>
)

export default SettingsCard
