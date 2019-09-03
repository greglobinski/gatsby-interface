/** @jsx jsx */
import { jsx } from "@emotion/core"
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

import colors from "../../../theme/colors"
import fontSizes from "../../../theme/fontSizes"
import { spaces, radius } from "../../../utils/presets"

function ToggleTip({ children, tip, customCss = {}, ...rest }) {
  const [visible, setVisible] = useState(false)
  const [tipPosition, setTipPosition] = useState()
  const buttonRef = createRef()
  const tipRef = createRef()

  function showTip() {
    setVisible(true)
    const buttonRect = buttonRef.current.getBoundingClientRect()
    setTipPosition({
      left: buttonRect.left + buttonRect.width / 2,
      bottom: buttonRect.bottom + 10,
    })
  }

  return (
    <Fragment>
      <ToggleTip.Button onClick={showTip} ref={buttonRef} />
      <span
        ref={tipRef}
        role="status"
        dangerouslySetInnerHTML={{ __html: visible && tip ? tip : null }}
        css={
          visible
            ? {
                position: `absolute`,
                background: colors.grey[90],
                color: colors.white,
                padding: `${spaces.s} ${spaces.m}`,
                fontSize: fontSizes[1],
                borderRadius: radius.default,
                left: tipPosition.left,
                bottom: tipPosition.bottom,
                lineHeight: 1.4,
                width: `auto`,
                transform: `translate(-50%, 0)`,
                maxWidth: `14rem`,

                p: {
                  margin: 0,
                },
              }
            : null
        }
      />
    </Fragment>
  )
}

ToggleTip.Button = forwardRef(({ children, customCss = {}, ...rest }, ref) => (
  <button
    ref={ref}
    css={deepmerge(
      {
        background: `transparent`,
        cursor: `pointer`,
        border: 0,
        display: `inline-flex`,
        height: `1.4em`,
        padding: 0,
        verticalAlign: `text-bottom`,
        width: `1.4em`,

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
))

ToggleTip.propTypes = {}

export default ToggleTip
