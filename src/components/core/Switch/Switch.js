/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"
import hiddenStyles from "../../../theme/styles/hidden"
import { spaces } from "../../../utils/presets"

function Switch({ fieldName, fieldValue, options = [], onChange, ...rest }) {
  const on = fieldValue === options[1].value

  function onClick() {
    onChange({
      target: {
        value:
          fieldValue === options[1].value ? options[0].value : options[1].value,
      },
    })
  }

  function getLabelColor({ fieldValue, option, idx }) {
    if (fieldValue === option.value) {
      return idx === 0 ? colors.grey[90] : colors.green[90]
    }

    return colors.grey[50]
  }

  return (
    <div
      css={{
        position: `relative`,
        display: `inline-block`,
      }}
      {...rest}
    >
      <div
        role="group"
        aria-label={fieldName}
        css={{
          display: `grid`,
          gridTemplateColumns: `1fr 1fr`,
          gridGap: `80px`,
        }}
      >
        {options.map((option, idx) => (
          <label
            key={`switcher-${fieldName}-${option.value}`}
            css={{
              cursor: `pointer`,
              fontFamily: fonts.header.join(`,`),
              order: idx + 1,
              color: getLabelColor({ fieldValue, option, idx }),
              letterSpacing: `0.03em`,
            }}
          >
            <input
              type="radio"
              name={fieldName}
              value={option.value}
              checked={option.value === fieldValue}
              onChange={onChange}
              css={{
                ...hiddenStyles,
              }}
            />
            {option.label ? option.label : option.value}
          </label>
        ))}
      </div>
      <button
        aria-hidden
        onClick={onClick}
        css={{
          position: `absolute`,
          left: `50%`,
          transform: `translate(-50%, -50%)`,
          top: `50%`,
          display: `inline-block`,
          outline: 0,
          width: `48px`,
          height: `24px`,
          cursor: `pointer`,
          userSelect: `none`,
          background: on ? colors.green[50] : colors.grey[30],
          borderRadius: `999px`,
          padding: `3px`,
          transition: `all 0.3s ease`,
          border: `none`,

          ":focus, :hover": {
            borderColor: colors.purple[40],
            boxShadow: `0 0 0 3px ${colors.purple[20]}`,
            outline: `0`,
            transition: `box-shadow 0.15s ease-in-out`,
          },

          ":after": {
            left: on ? `24px` : 0,
            position: `relative`,
            display: `block`,
            content: `""`,
            width: `18px`,
            height: `18px`,
            borderRadius: `999px`,
            background: colors.white,
            transition: `all 0.2s ease, padding 0.3s ease, margin 0.3s ease`,
          },

          ":active": {
            ":after": {
              width: `30px`,
              left: on ? `12px` : 0,
            },
          },
        }}
      />
    </div>
  )
}

Switch.propTypes = {
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default Switch
