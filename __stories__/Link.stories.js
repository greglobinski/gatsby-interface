import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { text, boolean } from "@storybook/addon-knobs"
import { MdArrowForward } from "react-icons/md"

import {
  LinkSkeleton,
  BaseLink,
  Link,
  SimpleLink,
} from "../src/components/Link"

const getLinkType = () => {
  if (boolean(`Internal link`, true)) return { to: text(`Url`, `/`) }
  else return { href: text(`Url`, `#`) }
}

const linkProps = () => {
  return {
    ...getLinkType(),
    onClick: action(`Link was clicked`),
  }
}

storiesOf(`Link`, module)
  .add(
    `LinkSkeleton`,
    () => <LinkSkeleton {...linkProps()}>LinkSkeleton</LinkSkeleton>,
    {
      info: {
        text: `
          It's a functional building block, on which all other Link components are built on. 
          **Never used directly** in the codebase.
        `,
      },
    }
  )
  .add(`BaseLink`, () => <BaseLink {...linkProps()}>BaseLink</BaseLink>)
  .add(`Link`, () => <Link {...linkProps()}>Link</Link>)
  .add(`SimpleLink`, () => <SimpleLink {...linkProps()}>SimpleLink</SimpleLink>)

storiesOf(`Link/in use`, module)
  .add(`Link with icon`, () => (
    <Link {...linkProps()}>
      LinkWithIcon <MdArrowForward />
    </Link>
  ))
  .add(`SimpleLink with icon`, () => (
    <SimpleLink {...linkProps()}>
      LinkWithIcon <MdArrowForward />
    </SimpleLink>
  ))
