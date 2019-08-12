/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import {
  MdEdit,
  MdArrowForward,
  MdKeyboardArrowUp,
  MdFlashOn,
} from "react-icons/md"

import { ContentBox } from "../../skeletons/ContentBox"
import { Button } from "../Button"
import {
  breakpoints,
  colors,
  fontFamilies,
  fontSizes,
  palette,
  spaces,
} from "../../../utils/presets"
import cardStyles from "../../../theme/styles/card"

function IntegrationCard({
  state = { isConnected: false },
  title,
  description,
  actionLabel,
  detailsLabel,
  children,
  ...rest
}) {
  return (
    <ContentBox
      behaviour={`UNFOLD`}
      css={{
        ...cardStyles.frame,
        display: `grid`,
        gridGap: spaces.m,
        gridTemplateColumns: `1fr auto auto`,
        marginBottom: spaces.m,
        padding: `${spaces.m} ${spaces.l} ${spaces.l}`,

        "&:last-of-type": {
          marginBottom: 0,
        },

        [`@media(min-width: ${breakpoints.desktop}px)`]: {
          arginBottom: spaces.l,
          padding: `${spaces.l} ${spaces.xl} ${spaces.xl}`,
        },
      }}
      state={state}
      {...rest}
    >
      {title && <IntegrationCard.Title>{title}</IntegrationCard.Title>}
      {detailsLabel && <IntegrationCard.DetailsButton label={detailsLabel} />}
      {actionLabel && <IntegrationCard.ActionButton label={actionLabel} />}
      {description && (
        <IntegrationCard.Description>{description}</IntegrationCard.Description>
      )}
      {children}
    </ContentBox>
  )
}

IntegrationCard.propTypes = {
  children: PropTypes.any,
}

IntegrationCard.Title = ({ children, className, ...props }) => (
  <h3
    css={{
      ...cardStyles.title,
      gridColumn: `1 / 2`,
    }}
  >
    {children}
  </h3>
)

IntegrationCard.Description = ({ children }) => (
  <div
    css={{
      color: palette.grey[500],
      gridColumn: `1 / 4`,

      fontSize: fontSizes.xs,
      fontFamily: fontFamilies.bodyFontFamily,
      lineHeight: 1.4,
      margin: 0,

      [`@media(min-width: ${breakpoints.desktop}px)`]: {},
    }}
  >
    {children}
  </div>
)

IntegrationCard.DetailsButton = ({ children, ...rest }) => {
  const { boxState } = ContentBox.useContentBoxContext()
  const isOpen = boxState.status === `OPEN`

  return (
    <ContentBox.Button
      as={Button}
      variant={`GHOST`}
      css={{
        display: isOpen ? `none` : `block`,
        gridColumn: `2 / 3`,
      }}
      {...rest}
    >
      {children ? children : <Fragment>Details</Fragment>}
    </ContentBox.Button>
  )
}

IntegrationCard.ActionButton = ({ children, label = `Connect`, ...rest }) => {
  const {
    boxState: { isConnected },
  } = ContentBox.useContentBoxContext()

  return (
    <Button
      variant={`SECONDARY`}
      css={{
        gridColumn: `3 / 4`,
      }}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          {!isConnected ? label : `Edit`} <MdFlashOn />
        </Fragment>
      )}
    </Button>
  )
}

IntegrationCard.Content = props => {
  const { children, variant } = props

  return (
    <ContentBox.Content
      css={{
        gridColumn: `1 / 4`,
      }}
      {...props}
    >
      <div
        css={{
          position: `relative`,
          display: `flex`,
          justifyContent: `flex-end`,
          marginBottom: spaces.m,

          "&:before": {
            background: colors.grey[10],
            content: `""`,
            width: `100%`,
            height: `1px`,
            position: `absolute`,
            left: `0`,
            top: `50%`,
          },
        }}
      >
        <ContentBox.Button
          as={Button}
          variant={`GHOST`}
          size={`M`}
          css={{
            background: `white`,
            zIndex: 1,
          }}
        >
          Hide details <MdKeyboardArrowUp />
        </ContentBox.Button>
      </div>
      {children}
    </ContentBox.Content>
  )
}

export default IntegrationCard
