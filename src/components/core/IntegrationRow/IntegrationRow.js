/** @jsx jsx */
import { jsx, css, keyframes } from "@emotion/core"
import React, { Fragment, useEffect, useState } from "react"
import PropTypes from "prop-types"
import { MdEdit, MdArrowForward, MdFlashOn } from "react-icons/md"

import { ContentBox } from "../../skeletons/ContentBox"
import { Link } from "../../Link"
import { Button } from "../Button"
import { Heading } from "../Heading"
import { Badge } from "../Badge"
import { breakpoints, spaces } from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import cardStyles from "../../../theme/styles/card"
import { styles as headingStyles } from "../../../theme/styles/heading"

function IntegrationRow({
  isConnected = false,
  title,
  logoUrl,
  onClickEdit,
  editLabel,
  details,
  children,
  ...rest
}) {
  return (
    <ContentBox
      state={{ boxState: isConnected ? `OPEN` : `CLOSED` }}
      css={{
        alignItems: `center`,
        background: colors.white,
        borderTop: `1px solid ${colors.standardLine}`,
        display: `grid`,
        gridGap: spaces.m,
        gridTemplateColumns: `auto auto 1fr`,
        padding: isConnected
          ? `${spaces.xl} ${spaces.xl} ${spaces[`2xl`]}`
          : `${spaces.m} ${spaces.xl}`,
        width: `100%`,

        "&:last-of-type": {
          marginBottom: 0,
        },

        [`@media(min-width: ${breakpoints.desktop}px)`]: {
          // padding: `${spaces.m} ${spaces.xl}`,
        },
      }}
      {...rest}
    >
      {logoUrl && (
        <IntegrationRow.Logo>
          <img src={logoUrl} alt={title} />
        </IntegrationRow.Logo>
      )}
      {onClickEdit && (
        <IntegrationRow.EditButton label={editLabel} onClick={onClickEdit} />
      )}

      {details && <IntegrationRow.Content details={details} />}

      {isConnected && (
        <IntegrationRow.Badge>
          Connected <MdFlashOn />
        </IntegrationRow.Badge>
      )}
      {children}
    </ContentBox>
  )
}

IntegrationRow.propTypes = {
  children: PropTypes.any,
  isConnected: PropTypes.bool,
}

IntegrationRow.Logo = ({ children, ...rest }) => (
  <span
    css={{
      gridColumn: `1 / 2`,
      gridRow: `1 / 2`,

      [`img, svg`]: {
        height: `28px`,
        width: `auto`,
      },
    }}
  >
    {children}
  </span>
)

IntegrationRow.Badge = props => (
  <Badge
    css={{
      gridColumn: `2 / 3`,
      gridRow: `1 / 2`,
    }}
    {...props}
  />
)

IntegrationRow.EditButton = ({ children, label = `Connect`, ...rest }) => {
  const {
    state: { boxState },
    boxTone,
  } = ContentBox.useContentBoxContext()

  const isConnected = boxState === `OPEN`

  return (
    <Button
      variant={`GHOST`}
      tone={boxTone !== `NEUTRAL` ? boxTone : undefined}
      css={{
        gridColumn: `3 / 4`,
        gridRow: `1 / 2`,
        justifySelf: `end`,
      }}
      {...rest}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          {!isConnected ? label : `Edit`}
          {!isConnected ? <MdArrowForward /> : <MdEdit />}
        </Fragment>
      )}
    </Button>
  )
}

function renderData(data = []) {
  if (data.length > 0) {
    return data.map(item => (
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          fontSize: fontSizes[1],
        }}
      >
        <Heading as="span" variant="LIGHT">
          {item.name}
        </Heading>
        <span
          css={{
            marginTop: spaces[`2xs`],
            color: colors.grey[90],
          }}
        >
          {item.url ? <Link href={item.url}>{item.value}</Link> : item.value}
        </span>
      </div>
    ))
  }

  return null
}

IntegrationRow.Content = ({
  children,
  details,
  variant = `SECONDARY`,
  ...rest
}) =>
  details || children ? (
    <ContentBox.Content
      variant={variant}
      css={{
        gridColumn: `1 / 4`,
        display: `grid`,
        gridTemplateColumns: `1.5fr 1fr`,
      }}
      {...rest}
    >
      {!details ? children : renderData(details)}
    </ContentBox.Content>
  ) : null

export default IntegrationRow
