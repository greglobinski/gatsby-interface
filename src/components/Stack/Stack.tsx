/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Interpolation } from "@emotion/serialize"
import React from "react"
import space, { SpaceSize } from "../../theme/space"

type PropsOf<Tag> = Tag extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[Tag]
  : Tag extends React.ComponentType<infer Props>
  ? Props & JSX.IntrinsicAttributes
  : never

export type StackGap = SpaceSize | string
export type StackAlign = `justify` | `center` | `left` | `right`
export type StackAlignCSS = `justify` | `center` | `flex-start` | `flex-end`

export type GetStackStyleProps = {
  gap?: StackGap;
  align?: StackAlign;
}

type AllowedAs = `div` | `span` | `ul` | `ol`

export type StacktProps = PropsOf<AllowedAs> & {
  children: React.ReactNode;
  as?: AllowedAs;
} & GetStackStyleProps

export const getStackStyle = ({
  align = `justify`,
  gap = 0,
}: GetStackStyleProps): Interpolation => ({
  margin: 0,
  display: `flex`,
  flexDirection: `column`,
  alignItems: translateAlignToCss(align),

  "& > * + *": {
    marginTop: gap,
  },
})

function translateAlignToCss(val: StackAlign): StackAlignCSS {
  const VAL_TO_CSSVAL: {
    [key: string]: StackAlignCSS
  } = {
    justify: `justify`,
    center: `center`,
    right: `flex-end`,
    left: `flex-start`,
  }
  return VAL_TO_CSSVAL[val]
}

function Stack({
  children,
  as = `div`,
  gap = 0,
  align = `justify`,
}: StacktProps) {
  const Component = as
  const gapVal: string = typeof gap === `string` ? gap : space[gap]

  return (
    <Component css={getStackStyle({ gap: gapVal, align })}>
      {children}
    </Component>
  )
}

export default Stack
