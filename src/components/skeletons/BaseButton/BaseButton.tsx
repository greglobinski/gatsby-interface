import React from "react"
import { jsx, keyframes } from "@emotion/core"
import PropTypes from "prop-types"
import { GatsbyLinkProps, Link } from "gatsby"
import { secureTargetBlankLink } from "../../../utils/helpers"

function textIntoSpan(text: string) {
  return <span>{text}</span>
}

function wrapStringChild(child: React.ReactNode) {
  return typeof child === `string` ? textIntoSpan(child) : child
}

type ContentProps = {
  children?: React.ReactNode
  label?: React.ReactNode
  DefaultIcon?: React.ComponentType<any> // TODO replace any with something more strict
}

function Content({ children, label, DefaultIcon }: ContentProps): JSX.Element {
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

type SharedBaseButtonProps = ContentProps & {}

export type BaseAnchorProps = JSX.IntrinsicElements["a"] &
  SharedBaseButtonProps & {}

export const BaseAnchor = React.forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (
    {
      label,
      role = `button`,
      target = `_blank`,
      rel,
      DefaultIcon,
      children,
      ...rest
    }: BaseAnchorProps,
    ref
  ) => (
      <a
        target={target}
        role={role}
        rel={secureTargetBlankLink({ rel, target })}
        {...rest}
        ref={ref}
      >
        <Content label={label} DefaultIcon={DefaultIcon}>
          {children}
        </Content>
      </a>
    )
)

export type BaseLinkProps<TState> = GatsbyLinkProps<TState> &
  SharedBaseButtonProps

export const BaseLink = React.forwardRef<Link<any>, BaseLinkProps<any>>(
  (
    {
      to,
      role = `button`,
      children,
      label,
      DefaultIcon,
      ...rest
    }: BaseLinkProps<any>,
    ref
  ) => (
      <Link to={to} role={role} {...rest} ref={ref}>
        <Content label={label} DefaultIcon={DefaultIcon}>
          {children}
        </Content>
      </Link>
    )
)

function BaseButton(props) {
  const {
    children,
    disabled = false,
    label,
    DefaultIcon,
    loading = false,
    loadingLabel = `Loading`,
    LoadingIcon,
    role = `button`,
    to,
    type = `button`,
    ...rest
  } = props

  if (to) {
    return (
      <Link to={to} role={role} {...rest}>
        <Content children={children} label={label} DefaultIcon={DefaultIcon} />
      </Link>
    )
  }

  return (
    <button disabled={loading ? true : disabled} type={type} {...rest}>
      {loading ? (
        <React.Fragment>
          {loadingLabel && <span>{loadingLabel}</span>}
          {` `}
          {LoadingIcon && <LoadingIcon />}
        </React.Fragment>
      ) : (
        <Content children={children} label={label} DefaultIcon={DefaultIcon} />
      )}
    </button>
  )
}

BaseButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  onClick: PropTypes.func,
  rel: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
  type: PropTypes.oneOf([`button`, `reset`, `submit`]),
}

export default BaseButton
