import React from "react"
import styled from "@emotion/styled"

import LinkSkeleton, {
  linkPropTypes,
  SkeletonStyledComponent,
} from "./Link.Skeleton"

export const StyledBaseLink = styled(SkeletonStyledComponent)`
  align-items: center;
  display: inline-flex;
  font-size: inherit;
  font-family: inherit;
  font-style: inherit;
  font-weight: inherit;
`

const BaseLink = props => (
  <LinkSkeleton StyledComponent={StyledBaseLink} {...props} />
)

BaseLink.propTypes = linkPropTypes

export default BaseLink
