import styled from "@emotion/styled"
import { palette } from "../../../utils/presets"
import React, { HTMLProps } from "react"
import { Overlay } from "./Overlay"
import { keyframes } from "@emotion/core"
import { ModalOptions, ModalType } from "../sharedTypes"

const rotationIncoming = keyframes`
  100% {
     transform: translate(0, 0) scale(1) perspective(1000px) rotateX(0);
  }
`

export const ContentFullScreen = styled.div`
  animation: ${rotationIncoming} 0.5s 0.25s ease forwards;
  background: ${palette.white};
  height: 100vh;
  width: 100%;
  outline: none;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  transform: translate(0, 150vh) scale(0.9) perspective(1000px) rotateX(-90deg);
  transform-origin: top center;
`

export interface ModalFullScreenProps extends HTMLProps<HTMLDivElement> {
  type?: ModalType
}

export const ModalFullScreen: React.FC<ModalFullScreenProps> = ({
  children,
  type,
  ...htmlProps
}) => (
  <Overlay type={type}>
    <ContentFullScreen role="dialog" {...htmlProps}>
      {children}
    </ContentFullScreen>
  </Overlay>
)
