/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { ThemeCss, Theme } from "../../theme"

const baseCss: ThemeCss = theme => ({
  fontFamily: theme.fonts.body,
  fontSize: theme.fontSizes[3],
})

const variantPrimaryCss: ThemeCss = theme => ({
  color: theme.colors.gatsby,
})

const variantSecondaryCss: ThemeCss = theme => ({
  color: theme.colors.grey[70],
})

const variantCss: Record<TestComponentVariant, ThemeCss> = {
  PRIMARY: variantPrimaryCss,
  SECONDARY: variantSecondaryCss,
}

export type TestComponentVariant = `PRIMARY` | `SECONDARY`

export type TestComponentProps = {
  variant?: TestComponentVariant
  children?: React.ReactNode
}

export function TestComponent({
  variant = `PRIMARY`,
  children,
}: TestComponentProps) {
  return (
    <div css={(theme: Theme) => [baseCss(theme), variantCss[variant](theme)]}>
      {children}
    </div>
  )
}
