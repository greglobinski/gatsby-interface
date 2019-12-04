/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import { TooltipPopup, TooltipParams, TooltipPopupProps } from "@reach/tooltip"
import colors from "../../theme/colors"
import fontSizes from "../../theme/fontSizes"
import { spaces } from "../../utils/presets"
import { TooltipPosition } from "./types"
import TooltipPointer from "./TooltipPointer"
import { tooltipPosition } from "./TooltipContent.helpers"

import "@reach/tooltip/styles.css"

type TooltipContentProps = Omit<TooltipPopupProps, "ref" | "position"> & {
  tooltipParams: TooltipParams;
  position?: TooltipPosition;
}

const baseCss = css({
  background: colors.black,
  color: colors.whiteFade[80],
  fontSize: fontSizes[0],
  border: "none",
  borderRadius: "2px",
  padding: `${spaces.s} ${spaces.m}`,
  transformOrigin: "center",
  whiteSpace: "normal",
})

export default function TooltipContent({
  position = "top",
  label,
  tooltipParams,
  style,
  ...rest
}: TooltipContentProps) {
  return (
    <TooltipPopup
      {...tooltipParams}
      {...rest}
      label={label}
      css={baseCss}
      style={style}
      position={tooltipPosition[position]}
    >
      {tooltipParams.triggerRect && (
        <TooltipPointer
          triggerRect={tooltipParams.triggerRect}
          position={position}
          style={style}
        />
      )}
      {label}
    </TooltipPopup>
  )
}
