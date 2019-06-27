import React from "react"
import styled from "react-emotion"

import { palette } from "../../utils/presets"

import LinkSkeleton, { linkPropTypes } from "./Link.Skeleton"
import { StyledBaseLink } from "./BaseLink"

export const StyledLink = styled(StyledBaseLink)`
  color: ${palette.purple[600]};
  text-decoration: none;

  :focus,
  :hover {
    color: ${palette.purple[400]};
    text-decoration: underline;
  }
`

const SimpleLink = props => (
  <LinkSkeleton StyledComponent={StyledLink} {...props} />
)

SimpleLink.propTypes = linkPropTypes

export default SimpleLink
