/** @jsx jsx */
import { jsx } from "@emotion/core"
import { DecoratorFn } from "@storybook/react"
import { text, radios } from "@storybook/addon-knobs"
import { StoryUtils } from "../../utils/storybook"
import { radioKnobOptions } from "../../utils/storybook/knobs"
import { TestComponent, TestComponentVariant } from "."

export default {
  title: `TestComponent`,
  component: TestComponent,
  decorators: [
    story => (
      <StoryUtils.Container>
        <StoryUtils.Stack>{story()}</StoryUtils.Stack>
      </StoryUtils.Container>
    ),
  ] as DecoratorFn[],
}

export const Basic = () => <TestComponent>Hello world!</TestComponent>

const VARIANTS: TestComponentVariant[] = [`PRIMARY`, `SECONDARY`]

export const Sandbox = () => (
  <TestComponent
    variant={radios(
      `variant`,
      radioKnobOptions<TestComponentVariant>(VARIANTS),
      `PRIMARY`
    )}
  >
    {text("content", "Hello world!")}
  </TestComponent>
)

export const Variants = () =>
  VARIANTS.map(variant => (
    <TestComponent key={variant} variant={variant}>
      Variant: {variant}
    </TestComponent>
  ))
