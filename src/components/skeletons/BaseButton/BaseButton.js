import React, { Fragment } from "react"
import { jsx, keyframes } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { secureTargetBlankLink } from "../../../utils/helpers"

function BaseButton(props) {
  const {
    children,
    disabled = false,
    href,
    label,
    DefaultIcon,
    loading = false,
    loadingLabel = `Loading`,
    LoadingIcon,
    rel,
    role = `button`,
    target = `_blank`,
    to,
    type = `button`,
    ...rest
  } = props

  if (href) {
    return (
      <a
        href={href}
        target={target}
        role={role}
        rel={secureTargetBlankLink({ rel, target })}
        {...rest}
      >
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} role={role} {...rest}>
        {children ? (
          children
        ) : (
          <Fragment>
            {label} {DefaultIcon && <DefaultIcon />}
          </Fragment>
        )}
      </Link>
    )
  }

  return (
    <button disabled={loading ? true : disabled} type={type} {...rest}>
      {loading ? (
        <Fragment>
          {loadingLabel && <span>{loadingLabel}</span>}
          {` `}
          {LoadingIcon && <LoadingIcon />}
        </Fragment>
      ) : (
        <Fragment>
          {children ? (
            React.Children.map(children, child =>
              typeof child === `string` ? <span>{child}</span> : child
            )
          ) : (
            <Fragment>
              {<span>{label}</span>} {DefaultIcon && <DefaultIcon />}
            </Fragment>
          )}
        </Fragment>
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
