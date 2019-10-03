import React from "react"

function textIntoSpan(text: string) {
  return <span>{text}</span>
}

function wrapStringChild(child: React.ReactNode) {
  return typeof child === `string` ? textIntoSpan(child) : child
}

export type BaseElementContentProps = {
  children?: React.ReactNode
  label?: React.ReactNode
  DefaultIcon?: React.ComponentType<any> // TODO replace any with something more strict
}

function BaseElementContent({
  children,
  label,
  DefaultIcon,
}: BaseElementContentProps): JSX.Element {
  if (label) {
    return (
      <React.Fragment>
        <span>{label}</span> {DefaultIcon && <DefaultIcon />}
      </React.Fragment>
    )
  }

  if (
    children &&
    (children as any).type &&
    (children as any).type === React.Fragment
  ) {
    return (
      <React.Fragment>
        {React.Children.map((children as any).props.children, wrapStringChild)}
      </React.Fragment>
    )
  }

  if (children && (children as React.ReactNodeArray).length > 1) {
    return (
      <React.Fragment>
        {React.Children.map(children, wrapStringChild)}
      </React.Fragment>
    )
  }

  return <React.Fragment>{children}</React.Fragment>
}

export default BaseElementContent
