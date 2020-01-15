/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonLabelProps,
  FormGroupFieldSkeletonOptionProps,
  FormGroupFieldSkeletonOptionLabelProps,
} from "../../form-skeletons/components/FormGroupFieldSkeleton"

import {
  FormField,
  FormFieldWrapperProps,
  FormFieldErrorProps,
  FormFieldHintProps,
} from "./FormField"
import { getStackStyles, StackGap } from "../../stack"
import { getClusterStyles } from "../../cluster"
import { useTheme } from "../../ThemeProvider"
import {
  getLabelFontSize,
  getLabelStyles,
  FormFieldLabelSize,
  RequiredFlag,
} from "./FormField.helpers"
import colors from "../../../theme/colors"
import space from "../../../theme/space"

export const INPUT_WIDTH = `20px`
export const INPUT_VERTICAL_OFFSET_CALC = `(1em - 14px) * 0.5`

export function getGroupFieldStackStyles(type: `stack` | `item`) {
  const { stackCss, stackItemCss } = getStackStyles({
    gap: 4,
    theme: useTheme(),
  })

  return type === `item` ? stackItemCss : stackCss
}

export function getGroupFieldClusterStyles(type: `cluster` | `item`) {
  const { clusterCss, clusterItemCss } = getClusterStyles({
    gap: 8,
    verticalGap: 4,
    theme: useTheme(),
  })

  return type === `item` ? clusterItemCss : clusterCss
}

export type FormGroupFieldContextValue = {
  layout?: `horizontal` | `vertical`
  variant?: `standard` | `framed`
}

const FormGroupFieldContext = React.createContext<FormGroupFieldContextValue>({
  variant: undefined,
  layout: undefined,
})

export type FormGroupFieldProviderProps = {
  layout?: `horizontal` | `vertical`
  variant?: `standard` | `framed`
  children?: React.ReactNode
  gap?: StackGap
}

function FormGroupFieldProvider({
  layout,
  variant,
  children,
}: FormGroupFieldProviderProps) {
  const fieldContext = React.useMemo<FormGroupFieldContextValue>(() => {
    return {
      layout,
      variant,
    }
  }, [variant, layout])

  return (
    <FormGroupFieldContext.Provider value={fieldContext}>
      {children}
    </FormGroupFieldContext.Provider>
  )
}

export type FormGroupFieldProps = FormGroupFieldProviderProps &
  FormGroupFieldSkeletonProps

export function FormGroupField({
  variant,
  layout,
  ...rest
}: FormGroupFieldProps) {
  return (
    <FormGroupFieldProvider variant={variant} layout={layout}>
      <FormGroupFieldSkeleton
        css={[
          {
            padding: 0,
            margin: 0,
            border: 0,
          },
        ]}
        {...rest}
      />
    </FormGroupFieldProvider>
  )
}

export type FormGroupFieldLabelProps = {
  isRequired?: boolean
  size?: FormFieldLabelSize
} & FormGroupFieldSkeletonLabelProps

const Label: React.FC<FormGroupFieldLabelProps> = ({
  children,
  isRequired,
  size = `M`,
  ...rest
}) => {
  return (
    <FormGroupFieldSkeleton.Label
      css={[
        getLabelFontSize(size),
        getLabelStyles(),
        getGroupFieldStackStyles(`item`),
        {
          padding: 0,
          marginRight: 0,
          marginLeft: 0,
          width: `100%`,
        },
      ]}
      {...rest}
    >
      {children} {isRequired && <RequiredFlag />}
    </FormGroupFieldSkeleton.Label>
  )
}

const Options: React.FC<{}> = props => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return isHorizontal ? (
    <div css={getGroupFieldStackStyles(`item`)}>
      <div css={getGroupFieldClusterStyles(`cluster`)} {...props} />
    </div>
  ) : (
    <div
      css={[
        getGroupFieldStackStyles(`item`),
        getGroupFieldStackStyles(`stack`),
      ]}
      {...props}
    />
  )
}

export type FormGroupFieldOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "ref"
>

const Option: React.FC<FormGroupFieldOptionProps> = props => (
  <FormGroupFieldSkeleton.Option {...props} />
)

export type FormGroupFieldOptionLabelProps = {
  size?: FormFieldLabelSize
} & FormGroupFieldSkeletonOptionLabelProps

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = ({
  size = `L`,
  ...rest
}) => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return (
    <FormGroupFieldSkeleton.OptionLabel
      css={[
        getLabelFontSize(size),

        {
          color: colors.grey[90],
          cursor: `pointer`,
          justifyContent: `flex-start`,
          lineHeight: 1.3,
          paddingLeft: `calc(${INPUT_WIDTH} + ${
            isHorizontal ? space[2] : space[4]
          })`,
          position: `relative`,
        },
      ]}
      {...rest}
    />
  )
}

const OptionWrapper: React.FC<FormFieldWrapperProps> = props => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return (
    <FormField.Wrapper
      css={[
        isHorizontal
          ? getGroupFieldClusterStyles(`item`)
          : getGroupFieldStackStyles(`item`),
      ]}
      {...props}
    />
  )
}

const FormGroupFieldHint: React.FC<FormFieldHintProps> = props => (
  <FormField.Hint css={[getGroupFieldStackStyles(`item`)]} {...props} />
)

const FormGroupFieldError: React.FC<FormFieldErrorProps> = props => (
  <FormField.Error css={[getGroupFieldStackStyles(`item`)]} {...props} />
)

function useFormGroupField() {
  return React.useContext(FormGroupFieldContext)
}

FormGroupField.Label = Label
FormGroupField.Label.displayName = `FormGroupField.Label`

FormGroupField.Options = Options
FormGroupField.Options.displayName = `FormGroupField.Options`

FormGroupField.Option = Option
FormGroupField.Option.displayName = `FormGroupField.Option`

FormGroupField.OptionLabel = OptionLabel
FormGroupField.OptionLabel.displayName = `FormGroupField.OptionLabel`

FormGroupField.OptionWrapper = OptionWrapper
FormGroupField.OptionWrapper.displayName = `FormGroupField.OptionWrapper`

FormGroupField.OptionWrapper = OptionWrapper
FormGroupField.OptionWrapper.displayName = `FormGroupField.OptionWrapper`

FormGroupField.Hint = FormGroupFieldHint
FormGroupField.Hint.displayName = `FormGroupField.Hint`

FormGroupField.Error = FormGroupFieldError
FormGroupField.Error.displayName = `FormGroupField.Error`

FormGroupField.useFormGroupField = useFormGroupField

export default FormGroupField
