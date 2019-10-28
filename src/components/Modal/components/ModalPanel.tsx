import React, { HTMLProps } from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { Keyframes } from "@emotion/serialize"
import { palette, spaces } from "../../../utils/presets"
import { Overlay } from "./Overlay"
import { ModalType, ModalPosition } from "../sharedTypes"

const buildTranslation = (position: ModalPanelProps["position"]) => keyframes`
  0% {
    transform: translate3d${position === `left` ? `(-100%, 0,0)` : `(100%,0,0)`}
   }
 
   100% {
    transform: translate3d(0,0,0);
   }
 `

export const Panel = styled.div<ModalPanelProps & { animation: Keyframes }>`
  background: ${palette.white};
  max-width: ${props => props.maxWidth || `20%`};
  height: 100vh;
  padding: ${spaces.m};
  position: absolute;
  right: ${props => props.position === `right` && 0};

  animation: ${props => props.animation} 0.5s ease forwards;
`

const translateLeft = buildTranslation(`left`)
const translateRight = buildTranslation(`right`)

export interface ModalPanelProps extends HTMLProps<HTMLDivElement> {
  maxWidth?: string
  position?: ModalPosition
  type?: ModalType
}

export const ModalPanel: React.FC<ModalPanelProps> = ({
  children,
  maxWidth,
  position,
  type,
  ...htmlProps
}) => {
  const animation = position === `right` ? translateRight : translateLeft

  return (
    <Overlay type={type}>
      <Panel
        role="dialog"
        maxWidth={maxWidth}
        position={position || `left`}
        animation={animation}
        {...htmlProps}
      >
        {children}
      </Panel>
    </Overlay>
  )
}
