import React from "react"

function textIntoSpan(text: string) {
  return <span>{text}</span>
}

function wrapStringChild(child: React.ReactNode) {
  return typeof child === `string` ? textIntoSpan(child) : child
}

export type BaseElementContentProps = {
  children?: React.ReactNode
}

function BaseElementContent({
  children,
}: BaseElementContentProps): JSX.Element {
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
