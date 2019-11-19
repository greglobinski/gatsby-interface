import initStoryshots from "@storybook/addon-storyshots"
import { render } from "@testing-library/react"

initStoryshots({
  configPath: `.storybook`,
  renderer: (storyElement, rendererOptions) => {
    const { container } = render(storyElement, rendererOptions)
    return container
  },
  /**
   * We have to exclude DecorativeDots from snapshots since they are always rendered in a differnet way,
   * which makes snapshot testing useless
   */
  storyKindRegex: /^((?!.*?DecorativeDots).)*$/,
})
