import React, { HTMLProps } from "react"
import styled from "@emotion/styled"
import { palette, spaces, radius, breakpoints } from "../../../utils/presets"
import { ModalType } from "../sharedTypes"
import { Overlay } from "./Overlay"
import { keyframes } from "@emotion/core"

const cardIncoming = keyframes`
  100% {
     transform: translate(0, 0) scale(1) perspective(1000px) rotateX(0);
  }
`

export const Card = styled.div`
  animation: ${cardIncoming} 0.5s 0.25s ease forwards;
  background: ${palette.white};
  align-self: center;
  padding: ${spaces.m};
  border-radius: ${radius.large};
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  margin: ${spaces.m} auto;
  max-width: calc(100% - (${spaces.m} * 2));
  outline: none;
  transform: translate(0, 90vh) scale(0.9) perspective(1000px) rotateX(-90deg);
  transform-origin: top center;

  @media (min-width: ${breakpoints.mobile}px) {
    max-width: calc(100% - (${spaces.l} * 2));
  }

  @media (min-width: ${breakpoints.phablet}px) {
    width: 620px;
  }
`

export interface ModalCardProps extends HTMLProps<HTMLDivElement> {
  type?: ModalType
}

export const ModalCard: React.FC<ModalCardProps> = ({
  children,
  type,
  ...htmlProps
}) => (
  <Overlay type={type}>
    <Card role="dialog" {...htmlProps}>
      {children}
    </Card>
  </Overlay>
)
