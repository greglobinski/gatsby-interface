/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, {
  Fragment,
  useState,
  useEffect,
  createRef,
  forwardRef,
  useMemo,
} from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"

import { MdInfo } from "react-icons/md"

import { useEventListener } from "../../../utils/hooks"
import colors from "../../../theme/colors"
import fontSizes from "../../../theme/fontSizes"
import { spaces, radius } from "../../../utils/presets"

function ToggleTip({ children, tip, customCss = {}, width, ...rest }) {
  const [visible, setVisible] = useState(false)

  const tipRef = createRef()

  useEventListener(`click`, checkClick)
  useEventListener(`keydown`, checkKeydown)

  // window.addEventListener("keydown", checkKeydown)

  function checkClick(e) {
    if (visible && e.target !== tipRef.current) {
      hideTip()
    }
  }

  function checkKeydown(e) {
    if ((e.keyCode || e.which) === 27) {
      hideTip()
    }
  }

  function showTip() {
    setVisible(false)
    const reopen = setTimeout(() => {
      setVisible(true)
      clearTimeout(reopen)
    }, 100)
  }

  function hideTip() {
    setVisible(false)
  }

  return (
    <span
      css={{
        position: `relative`,
      }}
    >
      {children ? (
        children
      ) : (
        <Fragment>
          <ToggleTip.Button onClick={showTip} />
          <ToggleTip.Tip tip={tip} visible={visible} ref={tipRef} />
        </Fragment>
      )}
    </span>
  )
}

ToggleTip.Button = ({ children, customCss = {}, ...rest }) => (
  <button
    css={deepmerge(
      {
        background: `transparent`,
        cursor: `pointer`,
        border: `0`,
        display: `inline-flex`,
        height: `1.4em`,
        padding: 0,
        verticalAlign: `text-bottom`,
        width: `1.4em`,
        borderRadius: `50%`,

        ":focus": {
          boxShadow: `0 0 0 3px ${colors.purple[30]}`,
          outline: `none`,
        },

        svg: {
          height: `100%`,
          color: colors.grey[50],
          width: `100%`,
        },
      },
      customCss
    )}
    {...rest}
  >
    {children ? children : <MdInfo />}
  </button>
)

const tipEntry = keyframes({
  "100%": {
    opacity: 1,
    transform: ` translate(-50%, 0) perspective(200px) scale(1) rotateX(0)`,
  },
})

ToggleTip.Tip = forwardRef(
  ({ tip, visible, width = `14rem`, customCss = {}, ...rest }, ref) => (
      <span
        ref={ref}
        role="status"
        dangerouslySetInnerHTML={{ __html: visible && tip ? tip : null }}
        css={
          visible
            ? deepmerge(
                {
                  animation: `${tipEntry} .5s ease forwards`,
                  background: colors.grey[80],
                  borderRadius: radius.default,
                  bottom: `calc(100% + .75rem)`,
                  color: colors.white,
                  fontSize: fontSizes[1],
                  left: `50%`,
                  lineHeight: 1.4,
                  opacity: 0.25,
                  padding: `${spaces.s} ${spaces.m}`,
                  position: `absolute`,
                  transform: ` translate(-50%, 10%) perspective(200px)  scale(.5) rotateX(-60deg)`,
                  transformOrigin: `center bottom`,
                  width: width,

                  ":before": {
                    content: `""`,
                    background: colors.grey[80],
                    bottom: 0,
                    height: `.5rem`,
                    left: `50%`,
                    position: `absolute`,
                    transform: `translate(-50%,50%) rotate(45deg)`,
                    transformOrigin: `center center`,
                    width: `.5rem`,
                    zIndes: -1,
                  },

                  "p:not(:last-of-type)": {
                    margin: 0,
                  },
                },
                customCss
              )
            : null
        }
      />
    )
)

ToggleTip.propTypes = {}

export default ToggleTip
