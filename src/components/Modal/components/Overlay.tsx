import React from "react"
import styled from "@emotion/styled"
import { keyframes } from "@emotion/core"
import { Keyframes } from "@emotion/serialize"
import { palette } from "../../../utils/presets"
import { ModalOptions, ModalType } from "../sharedTypes"

const buildFadeIn = (color: string) =>
  keyframes`
    0% {
       background-color: transparent
     }
   
     100% {
       background-color: ${color};
     }
   `

const successFade = buildFadeIn(`rgba(55, 182, 53, 0.75)`)
const errorFade = buildFadeIn(`rgba(184, 0, 0, 0.75)`)
const infoFade = buildFadeIn(`rgba(102, 51, 153, 0.75)`)
const warnFade = buildFadeIn(palette.orange[`500`])

const getAnimation = (type: ModalType) => {
  if (type === `success`) return successFade
  if (type === `error`) return errorFade
  if (type === `warn`) return warnFade

  return infoFade
}

const OverlayWrapper = styled.div<{ animation: Keyframes }>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  animation: ${props => props.animation} 0.5s ease forwards;
  display: flex;
  z-index: 9999;
`

export interface OverlayProps {
  type?: ModalType
}

export const Overlay: React.FC<OverlayProps> = ({ children, type }) => (
  <OverlayWrapper animation={getAnimation(type || `info`)}>
    {children}
  </OverlayWrapper>
)
