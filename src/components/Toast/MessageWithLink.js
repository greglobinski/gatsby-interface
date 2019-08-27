/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { css } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "../Link"

const messageCss = css`
  margin-bottom: 8px;
`

export default function MessageWithLink({ children, linkLabel, ...linkProps }) {
  return (
    <React.Fragment>
      <div css={messageCss}>{children}</div>
      <Link {...linkProps}>{linkLabel}</Link>
    </React.Fragment>
  )
}

MessageWithLink.propTypes = {
  children: PropTypes.node.isRequired,
  linkLabel: PropTypes.node.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
}
