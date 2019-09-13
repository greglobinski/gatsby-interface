/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import deepmerge from "deepmerge"

import { Heading } from "../Heading"
import { Button } from "../Button"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import { breakpoints, spaces } from "../../../utils/presets"

import PageContent from "./PageContent"

function PageHeader({
  children,
  heading,
  subheading,
  lede,
  actions,
  note,
  ornaments,
  ...rest
}) {
  return (
    <PageContent.Positioner
      customCss={{
        padding: `${spaces[`3xl`]} 0 ${spaces[`2xl`]}`,
      }}
    >
      {ornaments && ornaments}
      {subheading && (
        <PageHeader.Subheading>{subheading}</PageHeader.Subheading>
      )}
      {heading && <PageHeader.Heading>{heading}</PageHeader.Heading>}
      {lede && <PageHeader.Lede>{lede}</PageHeader.Lede>}
      {actions && <PageHeader.Actions actions={actions} />}
      {note && <PageHeader.Note html={note} />}
      {children}
    </PageContent.Positioner>
  )
}

PageHeader.Heading = ({ children, customCss = {}, ...rest }) => (
  <Heading
    variant="EMPHASIZED"
    as="h1"
    customCss={deepmerge(
      {
        maxWidth: `34rem`,
        fontSize: fontSizes[`4xl`],
        position: `relative`,

        [`@media (min-width: ${breakpoints.desktop}px)`]: {
          fontSize: fontSizes[`5xl`],
        },
      },
      customCss
    )}
    {...rest}
  >
    {children}
  </Heading>
)

PageHeader.Subheading = ({ children, customCss = {}, ...rest }) => (
  <PageHeader.Heading
    as="h3"
    variant="PRIMARY"
    customCss={deepmerge(
      {
        fontSize: fontSizes.xl,
        marginBottom: spaces.l,
        position: `relative`,
      },
      customCss
    )}
    {...rest}
  >
    {children}
  </PageHeader.Heading>
)

PageHeader.Lede = ({ children, customCss = {}, ...rest }) => (
  <div
    css={deepmerge(
      {
        maxWidth: `24rem`,
        fontSize: fontSizes.l,
        fontFamily: fonts.header.join(`,`),
        color: colors.grey[50],
        marginTop: spaces.l,
        lineHeight: 1.4,
        position: `relative`,
      },
      customCss
    )}
    {...rest}
  >
    {children}
  </div>
)

PageHeader.Actions = ({ children, actions, customCss = {}, ...rest }) => (
  <div
    css={deepmerge(
      {
        display: `flex`,
        flexWrap: `wrap`,
        marginTop: spaces[`4xl`],
        position: `relative`,

        "& > *": {
          marginRight: spaces.s,
        },
      },
      customCss
    )}
    {...rest}
  >
    {actions
      ? actions.map((item, idx) => (
          <PageHeader.Action key={idx} action={item} />
        ))
      : children}
  </div>
)

PageHeader.Action = ({ children, action = {}, customCss = {}, ...rest }) => {
  const { label, to, onClick, icon, variant } = action
  const Icon = icon

  return label && (to || onClick) ? (
    <Button
      size="XL"
      to={to}
      onClick={onClick}
      css={customCss}
      variant={variant}
      {...rest}
    >
      {action.label} {icon && <Icon />}
    </Button>
  ) : (
    children
  )
}

PageHeader.Note = ({ children, html, customCss = {}, ...rest }) => {
  const style = deepmerge(
    {
      fontFamily: fonts.header.join(`,`),
      marginTop: spaces.l,
      maxWidth: `16rem`,
      lineHeight: 1.3,
      color: colors.purple[60],
      position: `relative`,
    },
    customCss
  )

  return html ? (
    <div css={style} dangerouslySetInnerHTML={{ __html: html }} />
  ) : (
    <div css={style} {...rest}>
      {children}
    </div>
  )
}

export default PageHeader
