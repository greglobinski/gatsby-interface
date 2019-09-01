/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment, useState, useEffect, useMemo } from "react"
import PropTypes from "prop-types"

import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import hiddenStyles from "../../../theme/styles/hidden"
import { spaces } from "../../../utils/presets"
import deepmerge from "deepmerge"

const IN_ON_POSITIONS = [`LEFT`, `RIGHT`]

const ToggleContext = React.createContext()

function getLeftValue({ checked, active, inOnPosition }) {
  const onRight = inOnPosition === `RIGHT`

  if ((checked && onRight) || (!checked && !onRight)) {
    return active ? `18px` : `24px`
  }

  return 0
}

function Toggle({
  children,
  fieldName,
  fieldValue,
  label,
  onChange,
  inOnPosition = `RIGHT`,
  customCss = {},
  ...rest
}) {
  const checked = fieldValue === true

  const [state, setState] = useState({
    fieldName,
    fieldValue,
    label,
    onChange,
    inOnPosition,
    checked,
  })

  useEffect(() => {
    setState({ ...state, fieldValue, checked: fieldValue === true })
  }, [fieldValue])

  const value = useMemo(() => state, [state])

  return (
    <div
      css={deepmerge(
        {
          // alignItems: `center`,
          // display: `inline-flex`,
        },
        customCss
      )}
      {...rest}
    >
      <ToggleContext.Provider value={value}>
        {children ? (
          children
        ) : (
          <Toggle.Label>
            <Toggle.Input />
            <Toggle.Mark />
          </Toggle.Label>
        )}
      </ToggleContext.Provider>
    </div>
  )
}

Toggle.propTypes = {
  fieldName: PropTypes.string.isRequired,
  inOnPosition: PropTypes.oneOf(IN_ON_POSITIONS),
}

Toggle.Input = ({ customCss = {}, ...rest }) => {
  const {
    fieldName,
    checked,
    onChange,
    inOnPosition,
  } = Toggle.useToggleContext()

  return (
    <input
      type="checkbox"
      name={fieldName}
      id={fieldName}
      value={true}
      checked={checked}
      onChange={onChange}
      css={{
        ...hiddenStyles,
      }}
      {...rest}
    />
  )
}

Toggle.Mark = ({ customCss = {}, ...rest }) => {
  const {
    fieldName,
    checked,
    onChange,
    inOnPosition,
  } = Toggle.useToggleContext()

  return (
    <span
      aria-hidden
      css={deepmerge(
        {
          background: checked ? colors.purple[50] : colors.grey[30],
          borderRadius: `999px`,
          cursor: `pointer`,
          display: `inline-block`,
          height: `24px`,
          marginRight: spaces.xs,
          order: 1,
          padding: `3px`,
          transition: `all 0.3s ease`,
          userSelect: `none`,
          width: `48px`,
          marginLeft: inOnPosition === `RIGHT` ? 0 : spaces.xs,
          marginRight: inOnPosition === `LEFT` ? 0 : spaces.xs,

          ":after": {
            background: colors.white,
            left: getLeftValue({
              checked,
              active: false,
              inOnPosition,
            }),
            position: `relative`,
            display: `block`,
            content: `""`,
            width: `18px`,
            height: `18px`,
            borderRadius: `999px`,
            transition: `all 0.1s ease`,
          },

          ":focus": {
            boxShadow: `0 0 0 3px ${colors.purple[20]}`,
            outline: `0`,
          },

          ":active": {
            ":after": {
              left: getLeftValue({
                checked,
                active: true,
                inOnPosition,
              }),
              width: `24px`,
            },
          },
        },
        customCss
      )}
      {...rest}
    />
  )
}

Toggle.Label = ({ children, customCss = {}, ...rest }) => {
  const { fieldName, label, inOnPosition } = Toggle.useToggleContext()

  return (
    <label
      css={deepmerge(
        {
          alignItems: `center`,
          display: `flex`,
          color: colors.grey[90],
          cursor: `pointer`,
          fontFamily: fonts.system.join(`,`),

          "span:last-child": {
            order: inOnPosition === `RIGHT` ? 2 : 0,
          },
        },
        customCss
      )}
      htmlFor={fieldName}
      {...rest}
    >
      {children}
      {label && <Toggle.Label.Content>{label}</Toggle.Label.Content>}
    </label>
  )
}

Toggle.Label.Content = ({ children, customCss = {}, ...rest }) => {
  const { label } = Toggle.useToggleContext()

  return (
    <span css={deepmerge({}, customCss)}>{children ? children : label}</span>
  )
}

Toggle.useToggleContext = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error(
      `Toggle compound components cannot be rendered outside the main component`
    )
  }
  return context
}

export default Toggle
