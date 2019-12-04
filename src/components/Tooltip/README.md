## Tooltip

A component to display a tooltip built on top of [Reach UI Tooltip](https://reacttraining.com/reach-ui/tooltip).

```javascript
import { Tooltip } from "gatsby-interface"

function Component() {
  return (
    <Tooltip label="Lorem ipsum!" position="top">
      {triggerProps => {
        return <button {...triggerProps}>Hover on me!</button>
      }}
    </Tooltip>
  )
}
```

### Usage

#### Tooltip trigger

A trigger is an element that makes the tooltip appear when it is hovered or focused. It is achieved by spreading the `triggerProps` object in the `Tooltip`'s children render function. It is essential that whatever component you're spreading `triggerProps` on can receive a React ref, and that ref should return a DOM node. This is required to "anchor" the tooltip to its trigger.

#### Tooltips for interactive elements

According to [Reach UI Tooltip](https://reacttraining.com/reach-ui/tooltip#usage), the content inside the trigger is not announced by screenreaders:

> For screenreader users, the only content announced to them is whatever is in the tooltip

If you have some information displayed your trigger that is relevant to the user, you should use `ariaLabel` prop:

```javascript
import { Tooltip } from "gatsby-interface"

function Component() {
  return (
    <Tooltip label="Edit content" ariaLabel="Edit content via Contentful CMS">
      {triggerProps => {
        return <button {...triggerProps}>Contentful CMS</button>
      }}
    </Tooltip>
  )
}
```

#### Touch events

Touch events are not currently supported by [Reach UI Tooltip](https://reacttraining.com/reach-ui/tooltip) and therefor by this component.

### Props

| Prop      | Type                                                | Default value | Description                                                                                                                                       |
| --------- | --------------------------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| label     | `React.ReactNode`                                   |               | Required, the content that is going to be displayed in the tooltip                                                                                |
| ariaLabel | `string`                                            |               | Can be used to override `label` for screenreaders only; a common use case is when the trigger contains some information that you want to announce |
| children  | [`TooltipTriggerRenderFn`](#tooltiptriggerrenderfn) |               | Required, a function that renders the trigger component                                                                                           |
| position  | [`TooltipPosition`](#tooltipposition)               | `"top"`       | Tooltip position relative to the trigger                                                                                                          |

You can also pass any props supported by `<div />` element &mdash; they will be applied to the tooltip.

#### TooltipTriggerRenderFn

```typescript
type TooltipTriggerRenderFn = (
  triggerProps: TooltipTriggerParams
) => React.ReactNode

type TooltipTriggerParams = {
  "aria-describedby": string
  "data-reach-tooltip-trigger": string
  ref: React.Ref<any>
  onMouseEnter: React.ReactEventHandler
  onMouseMove: React.ReactEventHandler
  onFocus: React.ReactEventHandler
  onBlur: React.ReactEventHandler
  onMouseLeave: React.ReactEventHandler
  onKeyDown: React.ReactEventHandler
  onMouseDown: React.ReactEventHandler
}
```

#### TooltipPosition

```typescript
type TooltipPosition = "top" | "bottom"
```
