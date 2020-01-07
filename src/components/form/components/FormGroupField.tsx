/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonLabelProps,
  FormGroupFieldSkeletonOptionProps,
  FormGroupFieldSkeletonOptionLabelProps,
} from "../../form-skeletons/components/FormGroupFieldSkeleton"

import { FormField } from "./FormField"
import { getStackStyle } from "../../Stack"
import {
  getLabelFontSize,
  getLabelStyles,
  FormFieldLabelSize,
  RequiredFlag,
} from "./FormField.helpers"
import { Stack, StackProps, StackGap } from "../../Stack"
import { Cluster, ClusterProps } from "../../Cluster"
import colors from "../../../theme/colors"
import space from "../../../theme/space"

export const INPUT_WIDTH = `20px`
export const INPUT_VERTICAL_OFFSET_CALC = `(1em - 14px) * 0.5`

export type FormGroupFieldContextValue = {
  layout?: `horizontal` | `vertical`;
  variant?: `standard` | `framed`;
}

const FormGroupFieldContext = React.createContext<FormGroupFieldContextValue>({
  variant: undefined,
  layout: undefined,
})

export type FormGroupFieldProviderProps = {
  layout?: `horizontal` | `vertical`;
  variant?: `standard` | `framed`;
  children?: React.ReactNode;
  gap?: StackGap;
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
  gap = 4,
  ...rest
}: FormGroupFieldProps) {
  return (
    <FormGroupFieldProvider variant={variant} layout={layout}>
      <FormGroupFieldSkeleton
        css={[
          {
            padding: 0,
            marginLeft: 0,
            marginRight: 0,
            marginBottom: 0,
            border: 0,
          },
          getStackStyle({ gap: gap }),
        ]}
        {...rest}
      />
    </FormGroupFieldProvider>
  )
}

export type FormGroupFieldLabelProps = {
  isRequired?: boolean;
  size?: FormFieldLabelSize;
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

export type FormGroupFieldOptionsProps = ClusterProps | StackProps

const Options: React.FC<FormGroupFieldOptionsProps> = props => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  if (isHorizontal) {
    return (
      <Cluster
        gap={8}
        verticalGap={4}
        align={`left`}
        {...(props as ClusterProps)}
      />
    )
  }

  return <Stack gap={4} align={`left`} {...(props as StackProps)} />
}

export type FormGroupFieldOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "ref"
>

const Option: React.FC<FormGroupFieldOptionProps> = props => (
  <FormGroupFieldSkeleton.Option {...props} />
)

export type FormGroupFieldOptionLabelProps = {
  size?: FormFieldLabelSize;
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

FormGroupField.OptionWrapper = FormField.Wrapper
FormGroupField.OptionWrapper.displayName = `FormGroupField.OptionWrapper`

FormGroupField.useFormGroupField = useFormGroupField

export default FormGroupField
