import React from "react"
import Button from "./Button"

export const PrimaryButton = ({ children, ...rest }) => (
  <Button {...rest}>{children}</Button>
)

export const SecondaryButton = ({ children, ...rest }) => (
  <Button variant="SECONDARY">{children}</Button>
)

export const CancelButton = ({ children, ...rest }) => (
  <Button variant="SECONDARY" tone="NEUTRAL">
    {children}
  </Button>
)

export const SuccessButton = ({ children, ...rest }) => (
  <Button tone="SUCCESS">{children}</Button>
)

export const TextButton = ({ children, ...rest }) => (
  <Button variant="GHOST">{children}</Button>
)

export const PrimaryDeleteButton = ({ children, ...rest }) => (
  <Button variant="PRIMARY" tone="DANGER">
    {children}
  </Button>
)

export const SecondaryDeleteButton = ({ children, ...rest }) => (
  <Button variant="SECONDARY" tone="DANGER">
    {children}
  </Button>
)
