/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment, useState, useEffect } from "react"
import PropTypes from "prop-types"

import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import hiddenStyles from "../../../theme/styles/hidden"
import { spaces } from "../../../utils/presets"
import { Toggle } from "../Toggle"

console.log(fonts)
function Switch({ fieldName, fieldValue, options = {}, onChange, ...rest }) {
  // const [toggleFieldValue, setToggleFieldValue] = useState(
  //   fieldValue === options.primary.value
  // )

  // useEffect(() => {
  //   setToggleFieldValue(fieldValue === options.primary.value)
  // }, [fieldValue])
  // const on = fieldValue === options[1].value

  // function onClick() {
  //   onChange({
  //     target: {
  //       value:
  //         fieldValue === options[1].value ? options[0].value : options[1].value,
  //     },
  //   })
  // }

  // function getLabelColor({ fieldValue, option, idx }) {
  //   if (fieldValue === option.value) {
  //     return idx === 0 ? colors.grey[90] : colors.green[90]
  //   }

  //   return colors.grey[50]
  // }

  const onToggleChange = e => {
    console.log(`onToggleChange`, e.target.value)

    onChange({
      target: { value: e.target.checked ? `YEARLY` : `MONTHLY` },
    })
  }

  return (
    <Toggle
      fieldName={`${fieldName}_primary`}
      fieldValue={fieldValue === options.primary.value}
      onChange={onToggleChange}
      tone={`SUCCESS`}
    >
      <Toggle.Wrapper
        customCss={{
          fontFamily: fonts.header.join(`,`),
          letterSpacing: `0.03em`,
        }}
      >
        <span aria-hidden css={{ marginRight: spaces.xs }}>
          {options.secondary.label}
        </span>
        <Toggle.Input />
        <Toggle.Mark />
        <Toggle.Label
          customCss={{
            textTransform: `uppercase`,
          }}
        >
          <span aria-hidden>{options.primary.label}</span>
          {options.primary.ariaLabel && (
            <span css={{ ...hiddenStyles }}> {options.primary.ariaLabel}</span>
          )}
        </Toggle.Label>
      </Toggle.Wrapper>
    </Toggle>
  )
}

Switch.propTypes = {
  fieldName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default Switch
