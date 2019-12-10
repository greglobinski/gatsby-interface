/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { FormField } from "./FormField"
import { getFocusStyles } from "./FormField.helpers"
import { FormGroupFieldSkeletonOptionProps } from "../../form-skeletons/components/FormGroupFieldSkeleton"
import { FormGroupFieldOptionsProps } from "./FormGroupField"
import FormGroupField, {
  FormGroupFieldOptionLabelProps,
} from "./FormGroupField"
import colors from "../../../theme/colors"
import { spaces, radius } from "../../../utils/presets"
import FormFieldSkeleton from "../../form-skeletons/components/FormFieldSkeleton"
import { FormGroupFieldProps } from "./FormGroupField"

import { INPUT_WIDTH, INPUT_VERTICAL_OFFSET_CALC } from "./FormGroupField"

function RadioButtonField(props: FormGroupFieldProps) {
  return <FormGroupField {...props} />
}

RadioButtonField.Option = React.forwardRef<
  HTMLInputElement,
  FormGroupFieldSkeletonOptionProps
>((props, ref) => (
  <FormGroupField.Option
    ref={ref}
    css={[
      {
        position: `absolute`,
        left: `-9999px`,
        opacity: 0,

        "&:checked + label": {
          borderColor: colors.purple[60],
        },

        "&:checked + label::before": {
          borderColor: colors.purple[60],
          backgroundColor: colors.purple[60],
          backgroundOrigin: `border-box`,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 0H0V20H20V0ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z' fill='white'/%3E%3C/svg%3E%0A")`,
        },

        "&:not(:checked):hover + label::before": {
          borderColor: colors.purple[40],
        },

        "&:focus + label::before": {
          ...getFocusStyles(),
          transition: `border-color 0.15s ease-in-out, background 0.15s ease-in-out`,
        },
      },
    ]}
    type="radio"
    {...props}
  />
))

const frameStyles = {
  border: `2px solid ${colors.white}`,
  borderRadius: radius.large,
  margin: 0,
  width: `100%`,
  transition: `border .15s ease-in-out`,
}

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = props => {
  const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()
  const { variant } = FormGroupField.useFormGroupField()

  return (
    <FormGroupField.OptionLabel
      css={[
        {
          "&:before": {
            backgroundColor: colors.white,
            border: hasError
              ? `1px solid ${colors.red[60]}`
              : `2px solid ${colors.grey[30]}`,
            display: `block`,
            borderRadius: `50%`,
            content: `""`,
            height: INPUT_WIDTH,
            position: `absolute`,
            top: 0,
            left: 0,
            transition: `border-color 0.15s ease-in-out`,
            transform: `translate(0, calc(${INPUT_VERTICAL_OFFSET_CALC}))`,
            width: INPUT_WIDTH,
          },
        },
        variant === `framed`
          ? {
              ...frameStyles,
              marginBottom: 0,
              padding: `${spaces.s} ${spaces.m}`,
              paddingLeft: `calc(${INPUT_WIDTH} + ${spaces.l})`,
              "&:before": {
                left: spaces.s,
                top: spaces.s,
              },
            }
          : {},
      ]}
      {...props}
    />
  )
}

export type RadioButtonFieldOptionFramProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

const OptionFrame: React.FC<RadioButtonFieldOptionFramProps> = props => {
  const { variant } = FormGroupField.useFormGroupField()

  return (
    <div
      css={[
        variant !== `framed` ? frameStyles : {},
        {
          padding: `${spaces.s} ${spaces.m}`,
          label: {
            display: `block`,
            margin: 0,
          },
          "&:focus-within": {
            borderColor: colors.purple[40],
          },
        },
      ]}
      {...props}
    />
  )
}

const Options: React.FC<FormGroupFieldOptionsProps> = props => {
  const { variant } = FormGroupField.useFormGroupField()

  return (
    <FormGroupField.Options
      css={{
        margin: variant === `framed` ? `${spaces[`2xs`]} 0 0` : undefined,
      }}
      {...props}
    />
  )
}

RadioButtonField.Label = FormGroupField.Label
RadioButtonField.Label.displayName = `RadioButtonField.Label`
RadioButtonField.OptionFrame = OptionFrame
RadioButtonField.OptionFrame.displayName = `RadioButtonField.OptionFrame`
RadioButtonField.OptionLabel = OptionLabel
RadioButtonField.OptionLabel.displayName = `RadioButtonField.OptionLabel`
RadioButtonField.Options = Options
RadioButtonField.Options.displayName = `RadioButtonField.Options`
RadioButtonField.Hint = FormField.Hint
RadioButtonField.Hint.displayName = `RadioButtonField.Hint`
RadioButtonField.Error = FormField.Error
RadioButtonField.Error.displayName = `RadioButtonField.Error`

export default RadioButtonField
