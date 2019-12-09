/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Interpolation } from "@emotion/serialize"

import FormGroupFieldSkeleton, {
  FormGroupFieldSkeletonProps,
  FormGroupFieldSkeletonLabelProps,
  FormGroupFieldSkeletonOptionProps,
  FormGroupFieldSkeletonOptionLabelProps,
} from "../../form-skeletons/components/FormGroupFieldSkeleton"

import {
  getWrapperSpacingStyles,
  getLabelFontSize,
  getLabelStyles,
  FormFieldLabelSize,
  RequiredFlag,
} from "./FormField.helpers"
import colors from "../../../theme/colors"
import { spaces } from "../../../utils/presets"

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
  children: any;
}

export type FormGroupFieldProps = FormGroupFieldSkeletonProps &
  FormGroupFieldProviderProps

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

export function FormGroupField({
  variant,
  layout,
  ...rest
}: FormGroupFieldProps) {
  const { hasError } = rest

  return (
    <FormGroupFieldProvider variant={variant} layout={layout}>
      <FormGroupFieldSkeleton
        css={[
          {
            padding: 0,
            margin: 0,
            border: 0,
          },
          getWrapperSpacingStyles(hasError),
        ]}
        {...rest}
      />
    </FormGroupFieldProvider>
  )
}

export type FormGroupFieldLabelProps = FormGroupFieldSkeletonLabelProps & {
  isRequired?: boolean;
  size?: FormFieldLabelSize;
}

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
        getLabelStyles({ isRequired }),
        {
          padding: `0 ${spaces[`2xs`]} `,
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

export type FormGroupFieldOptionsProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

const Options: React.FC<FormGroupFieldOptionsProps> = ({ ...rest }) => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`

  return (
    <div
      css={{
        alignItems: `flex-start`,
        display: `flex`,
        flexWrap: `wrap`,
        flexDirection: isHorizontal ? `row` : `column`,
        margin: `calc((${spaces.xs} * -1) + ${spaces.xs}) 0 calc((${spaces.xs} * -1) + ${spaces.s})`,
      }}
      {...rest}
    />
  )
}

export const hiddenInputStyles: Interpolation = {}

export type FormGroupFieldOptionProps = Omit<
  FormGroupFieldSkeletonOptionProps,
  "ref"
>

const Option: React.FC<FormGroupFieldOptionProps> = props => (
  <FormGroupFieldSkeleton.Option css={hiddenInputStyles} {...props} />
)

export type FormGroupFieldOptionLabelProps = FormGroupFieldSkeletonOptionLabelProps & {
  size?: FormFieldLabelSize;
}

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = ({
  size = `L`,
  ...rest
}) => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`
  const marginRight = isHorizontal ? spaces.l : 0

  return (
    <FormGroupFieldSkeleton.OptionLabel
      css={[
        getLabelFontSize(size),
        {
          alignItems: `flex-start`,
          color: colors.grey[90],
          cursor: `pointer`,
          justifyContent: `flex-start`,
          lineHeight: 1.3,
          marginRight: marginRight,
          marginTop: spaces.xs,
          marginBottom: spaces.xs,
          paddingLeft: `calc(${INPUT_WIDTH} + ${
            isHorizontal ? spaces[`2xs`] : spaces.s
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
FormGroupField.useFormGroupField = useFormGroupField

export default FormGroupField
