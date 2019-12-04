import React from "react"
import { useTooltip, BaseTooltipProps, TriggerParams } from "@reach/tooltip"
import { useTransition, animated } from "react-spring"

import { TooltipPosition } from "./types"
import TooltipContent from "./TooltipContent"

const AnimatedTooltipContent = animated(TooltipContent)

const transitionConfig = {
  from: { opacity: 0, transform: "translateY(10px)" },
  enter: { opacity: 1, transform: "translateY(0px)" },
  leave: { opacity: 0, transform: "translateY(10px)" },
}

export type TooltipTriggerParams = TriggerParams

export type TooltipTriggerRenderFn = (
  triggerProps: TooltipTriggerParams
) => React.ReactNode

export type TooltipProps = Omit<BaseTooltipProps, "position"> & {
  children: TooltipTriggerRenderFn;
  position?: TooltipPosition;
}

export default function Tooltip({
  children,
  label,
  style,
  ...rest
}: TooltipProps) {
  const [trigger, tooltipParams, isVisible] = useTooltip()

  const transitions = useTransition(
    isVisible ? tooltipParams : null,
    null,
    transitionConfig
  )

  return (
    <React.Fragment>
      {children(trigger)}

      {transitions.map(({ item: tooltip, props: transitionStyles, key }) => {
        if (!tooltip) {
          return null
        }
        return (
          <AnimatedTooltipContent
            key={key}
            label={label}
            tooltipParams={tooltip}
            style={{ ...style, ...transitionStyles }}
            {...rest}
          />
        )
      })}
    </React.Fragment>
  )
}
