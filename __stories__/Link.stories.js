import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text } from "@storybook/addon-knobs"
import { MdArrowForward } from "react-icons/md"

import {
  InternalLinkSkeleton,
  ExternalLinkSkeleton,
  BaseInternalLink,
  BaseExternalLink,
  InternalLink,
  ExternalLink,
  SimpleInternalLink,
  SimpleExternalLink,
} from "../src/components/Link"

const internalLinkProps = () => ({
  to: text("The internal link ", "/"),
  onClick: action(`Link was clicked`),
})

const externalLinkProps = () => ({
  href: text("The external link ", "#"),
  onClick: action(`Link was clicked`),
})

storiesOf(`Link`, module)
storiesOf(`Link/Internal Link`, module)
  .add(
    `InternalLinkSkeleton`,
    () => (
      <InternalLinkSkeleton {...internalLinkProps()}>InternalLinkSkeleton</InternalLinkSkeleton>
    ),
    {
      info: {
        text: `
          It's a functional building block, on which all other InternalLink components are build on. 
          **Never used directly** in the codebase.
        `,
      },
    }
  )
  .add(`BaseInternalLink`, () => (
    <BaseInternalLink {...internalLinkProps()}>BaseInternalLink</BaseInternalLink>
  ))
  .add(`InternalLink`, () => (
    <InternalLink {...internalLinkProps()}>InternalLink</InternalLink>
  ))
  .add(`SimpleInternalLink`, () => (
    <SimpleInternalLink {...internalLinkProps()}>SimpleInternalLink</SimpleInternalLink>
  ))

storiesOf(`Link/External Link`, module)
  .add(
    `ExternalLinkSkeleton`,
    () => (
      <ExternalLinkSkeleton {...externalLinkProps()}>ExternalLinkSkeleton</ExternalLinkSkeleton>
    ),
    {
      info: {
        text: `
          It's a functional building block, on which all other ExternalLink components are build on. 
          **Never used directly** in the codebase.
        `,
      },
    }
  )
  .add(`BaseExternalLink`, () => (
    <BaseExternalLink {...externalLinkProps()}>BaseExternalLink</BaseExternalLink>
  ))
  .add(`ExternalLink`, () => (
    <ExternalLink {...externalLinkProps()}>ExternalLink</ExternalLink>
  ))
  .add(`SimpleExternalLink`, () => (
    <SimpleExternalLink {...externalLinkProps()}>ExternalLink</SimpleExternalLink>
  ))

  storiesOf(`Link/in use`, module)
  .add(`Simple Internal Link with icon`, () => (
    <SimpleInternalLink {...internalLinkProps()}>
      SimpleInternalLink with Icon <MdArrowForward />
    </SimpleInternalLink>
  ))
  .add(`External Link with icon`, () => (
    <ExternalLink {...externalLinkProps()}>
      ButtonWithIcon <MdArrowForward />
    </ExternalLink>
  ))

