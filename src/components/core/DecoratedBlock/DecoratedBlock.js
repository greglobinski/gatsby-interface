/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import deepmerge from "deepmerge"

import checkIcon from "./assets/checkIcon.svg"
import { Heading } from "../Heading"
import { Badge } from "../Badge"
import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import fontSizes from "../../../theme/fontSizes"

import { spaces, radius, breakpoints } from "../../../utils/presets"

function DecoratedBlock({
  children,
  title,
  subtitle,
  icon,
  badge,
  decorations,
  body,
  blockColors = [colors.purple[60], colors.purple[30], colors.purple[20]],
  customCss = {},
  ...rest
}) {
  return (
    <div css={{ position: `relative` }}>
      {decorations && decorations}
      <DecoratedBlock.Content blockColors={blockColors}>
        {title && (
          <DecoratedBlock.Header>
            <DecoratedBlock.Title blockColors={blockColors} badge={badge}>
              {title}
            </DecoratedBlock.Title>
            {icon && <DecoratedBlock.Icon Icon={icon} />}
            {subtitle && (
              <DecoratedBlock.Subtitle blockColors={blockColors}>
                {subtitle}
              </DecoratedBlock.Subtitle>
            )}
          </DecoratedBlock.Header>
        )}
        {body && <DecoratedBlock.Body html={body} blockColors={blockColors} />}
        {children}
      </DecoratedBlock.Content>
    </div>
  )
}

DecoratedBlock.Content = ({
  children,
  blockColors,
  customCss = {},
  ...rest
}) => (
  <div
    css={deepmerge(
      {
        background: colors.white,
        border: `1px solid ${blockColors[1]}`,
        borderRadius: radius.large,
        color: colors.grey[80],
        display: `flex`,
        flexDirection: `column`,
        padding: spaces[`2xl`],
        position: `relative`,
        height: `100%`,
        zIndex: 1,

        [`@media (min-width: ${breakpoints.desktop}px)`]: {
          padding: `${spaces[`4xl`]}`,
        },
      },
      customCss
    )}
    {...rest}
  >
    {children}
  </div>
)

DecoratedBlock.Header = ({ children, customCss = {}, ...rest }) => (
  <div
    css={deepmerge(
      {
        display: `grid`,
        gridTemplateColumns: `1fr auto`,
        gridColumnGap: spaces.xl,
      },
      customCss
    )}
  >
    {children}
  </div>
)

DecoratedBlock.Title = ({
  children,
  blockColors,
  badge,
  customCss = {},
  ...rest
}) => (
  <Heading
    customCss={deepmerge(
      {
        alignItems: `center`,
        display: `flex`,
        color: blockColors[0],
        fontSize: fontSizes.xl,
        gridColumn: `1 / 2`,
        gridRow: ` 1 / 2`,
      },
      customCss
    )}
  >
    {children}
    {badge && (
      <Badge css={{ marginLeft: spaces.xs }} variant="PILL" label={badge} />
    )}
  </Heading>
)

DecoratedBlock.Subtitle = ({
  children,
  blockColors,
  customCss = {},
  ...rest
}) => (
  <Heading
    as="h3"
    variant="LIGHT"
    customCss={deepmerge(
      {
        color: blockColors[0],
        gridColumn: `1 / 2`,
        gridRow: ` 2 / 3`,
        textTransform: `none`,
        fontSize: fontSizes.l,
        marginTop: spaces[`2xs`],
      },
      customCss
    )}
  >
    {children}
  </Heading>
)

DecoratedBlock.Icon = ({ Icon, customCss = {}, ...rest }) =>
  Icon && (
    <div
      variant="LIGHT"
      css={deepmerge(
        {
          alignSelf: `center`,
          gridColumn: `2 / 3`,
          gridRow: `1 / 3`,
        },
        customCss
      )}
    >
      <Icon />
    </div>
  )

DecoratedBlock.Body = ({
  children,
  html,
  blockColors,
  customCss = {},
  ...rest
}) => {
  const style = {
    marginTop: spaces.xl,
    lineHeight: 1.75,

    ul: {
      listStyle: `none`,
      margin: 0,
      padding: 0,
      marginTop: spaces[`2xl`],
    },

    li: {
      paddingLeft: `calc(1.1em + ${spaces.s})`,
      lineHeight: 1.5,
      marginBottom: spaces.s,
      position: `relative`,

      ":last-of-type": {
        marginBottom: `none`,
      },

      "&:before": {
        background: `${blockColors[2]} url(${checkIcon}) center center`,
        backgroundSize: `1em 1em`,
        borderRadius: `50%`,
        content: `""`,
        display: `inline-block`,
        height: `1.1em`,
        position: `absolute`,
        left: 0,
        top: `.3em`,
        width: `1.1em`,
      },
    },
  }

  return html ? (
    <div
      css={deepmerge(style, customCss)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  ) : (
    <div css={deepmerge(style, customCss)}>{children}</div>
  )
}

export default DecoratedBlock
