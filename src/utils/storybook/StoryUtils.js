/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { MdInfoOutline } from "react-icons/md"

const StoryUtils = {}

StoryUtils.Stack = ({ children }) => (
  <div css={{ display: `grid`, gridGap: `2rem` }}>{children}</div>
)

StoryUtils.Default = () => (
  <div
    css={{
      alignItems: `center`,
      background: `#eee`,
      color: `green`,
      display: `inline-flex`,
      fontSize: `.9rem`,
      fontWeight: `normal`,
      marginLeft: `1em`,
      padding: `.3em .6em`,
      verticalAlign: `text-bottom`,

      svg: {
        marginRight: `0.2em`,
      },
    }}
  >
    <MdInfoOutline /> default
  </div>
)

export default StoryUtils
