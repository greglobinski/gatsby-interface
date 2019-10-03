import React from "react"
import BaseElementContent, {
  BaseElementContentProps,
} from "../BaseElementContent/BaseElementContent"

export type BaseButtonProps = Omit<JSX.IntrinsicElements["button"], "ref"> &
  BaseElementContentProps & {
    loading?: boolean
    loadingLabel?: React.ReactNode
    LoadingIcon?: React.ComponentType<any> // TODO replace any with something more strict
  }

export const BaseButton = React.forwardRef<HTMLButtonElement, BaseButtonProps>(
  (props, ref) => {
    const {
      children,
      disabled = false,
      label,
      DefaultIcon,
      loading = false,
      loadingLabel = `Loading`,
      LoadingIcon,
      role = `button`,
      type = `button`,
      ...rest
    } = props

    return (
      <button
        disabled={loading ? true : disabled}
        type={type}
        {...rest}
        ref={ref}
      >
        {loading ? (
          <React.Fragment>
            {loadingLabel && <span>{loadingLabel}</span>}
            {` `}
            {LoadingIcon && <LoadingIcon />}
          </React.Fragment>
        ) : (
          <BaseElementContent
            children={children}
            label={label}
            DefaultIcon={DefaultIcon}
          />
        )}
      </button>
    )
  }
)

export default BaseButton
