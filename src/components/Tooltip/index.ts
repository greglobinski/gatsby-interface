import {
  TooltipProps as TooltipPropsDefinition,
  TooltipTriggerParams as TooltipTriggerParamsDefinition,
  TooltipTriggerRenderFn as TooltipTriggerRenderFnDefinition,
} from "./Tooltip"
import { TooltipPosition as TooltipPositionDefinition } from "./types"

export { default as Tooltip } from "./Tooltip"

export type TooltipProps = TooltipPropsDefinition
export type TooltipTriggerRenderFn = TooltipTriggerRenderFnDefinition
export type TooltipTriggerParams = TooltipTriggerParamsDefinition
export type TooltipPosition = TooltipPositionDefinition
