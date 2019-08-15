/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"

import styles from "../../theme/styles/notification"
import tones from "../../theme/tones"
import { spaces } from "../../utils/presets"
import { Link } from "../Link"

import { NOTIFICATION_TONES, NOTIFICATION_VARIANTS } from "../../utils/options"

const asOptions = {
  div: `div`,
  section: `section`,
}

function Notification({
  css,
  children,
  as = `div`,
  tone = `STANDARD`,
  variant = `PRIMARY`,
  ...rest
}) {
  const Component = asOptions[as]
  return (
    <Component
      css={{
        ...styles.base,
        ...styles.variants[variant](tones[tone]),
        ...css,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

Notification.propTypes = {
  icon: PropTypes.func,
  children: PropTypes.any,
  as: PropTypes.oneOf([`div`, `section`]),
  variant: PropTypes.oneOf(NOTIFICATION_VARIANTS),
  tone: PropTypes.oneOf(NOTIFICATION_TONES),
}

const contentAsOption = {
  div: `div`,
  span: `span`,
}

Notification.Content = ({
  children,
  css,
  as = `span`,
  tone = `STANDARD`,
  ...rest
}) => {
  const Component = contentAsOption[as]
  return (
    <Component
      css={{
        display: `flex`,
        alignItems: `center`,
        ...css,
        svg: {
          fill: tones[tone].dark,
          marginRight: spaces.xs,
        },
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

Notification.Content.propTypes = {
  children: PropTypes.any,
  as: PropTypes.oneOf([`div`, `span`]),
  tone: PropTypes.oneOf(NOTIFICATION_TONES),
}

Notification.Link = ({ children, to, onClick, ...rest }) => (
    <Link to={to} onClick={onClick} {...rest}>
      {children}
    </Link>
  )

export default Notification
