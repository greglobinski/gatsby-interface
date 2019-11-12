/** @jsx jsx */
import React from "react"
import { css, jsx } from "@emotion/core"
import { Link } from "../Link"

const messageCss = css`
  margin-bottom: 8px;
`

export interface MessageWithLinkProps {
  linkLabel: JSX.Element
  href: string
  target: string
  to: string
}

export const MessageWithLink: React.FC<MessageWithLinkProps> = ({
  children,
  linkLabel,
  ...linkProps
}) => (
  <React.Fragment>
    <div css={messageCss}>{children}</div>
    <Link {...linkProps}>{linkLabel}</Link>
  </React.Fragment>
)
