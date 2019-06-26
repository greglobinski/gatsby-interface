import React from "react"
import styled from "react-emotion"

import { palette } from "../../utils/presets"

import LinkSkeleton, { linkPropTypes } from "./Link.Skeleton"
import { StyledBaseLink } from "./BaseLink"

export const StyledLink = styled(StyledBaseLink)`
  color: ${palette.purple[600]};
`

const Link = props => <LinkSkeleton StyledComponent={StyledLink} {...props} />

Link.propTypes = linkPropTypes

export default Link
