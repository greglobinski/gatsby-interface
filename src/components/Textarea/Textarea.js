import React from "react"
import PropTypes from "prop-types"

import { spaces, theme } from "../../utils/presets"

const Textarea = ({
  id,
  rows,
  cols,
  children,
  placeholder,
  disabled,
  onChange,
}) => (
  <textarea
    id={id}
    rows={rows}
    cols={cols}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
    css={{
      ...theme.input,
      display: `block`,
      minHeight: `4rem`,
      resize: `vertical`,
      padding: `${spaces.xs} ${spaces.s}`,
    }}
  >
    {children}
  </textarea>
)

Textarea.propTypes = {
  id: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  children: PropTypes.node,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
}

export default Textarea
