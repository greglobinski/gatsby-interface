import React from "react"
import PropTypes from "prop-types"

const ICON_SIZES = {
  xsmall: `xsmall`,
  small: `small`,
  medium: `medium`,
  large: `large`,
}

const iconHeightBySize = {
  [ICON_SIZES.xsmall]: `16px`,
  [ICON_SIZES.small]: `24px`,
  [ICON_SIZES.medium]: `32px`,
  [ICON_SIZES.large]: `40px`,
}

export default function IconSkeleton({
  iconName,
  size = ICON_SIZES.small,
  style,
  applyColorToStroke = true,
  ...rest
}) {
  return (
    <svg
      preserveAspectRatio="xMidYMid meet"
      height={iconHeightBySize[size]}
      width={iconHeightBySize[size]}
      viewBox="0 0 24 24"
      fill={applyColorToStroke ? `none` : `currentColor`}
      stroke={applyColorToStroke ? `currentColor` : `none`}
      strokeWidth="1"
      fillRule="evenodd"
      data-testid={`icon-${iconName}`}
      style={{
        verticalAlign: `middle`,
        ...(style || {}),
      }}
      {...rest}
    />
  )
}

IconSkeleton.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(ICON_SIZES)),
  applyColorToStroke: PropTypes.bool,
}
