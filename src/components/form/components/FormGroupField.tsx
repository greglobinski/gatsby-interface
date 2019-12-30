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
  getWrapperSpacingStyles,
  getLabelFontSize,
  getLabelStyles,
  FormFieldLabelSize,
  RequiredFlag,
} from "./FormField.helpers"
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
        getLabelStyles({ isRequired }),
        {
          padding: `0 ${space[2]} `,
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
        margin: `calc((${space[3]} * -1) + ${space[3]}) 0 calc((${space[3]} * -1) + ${space[4]})`,
      }}
      {...rest}
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
  size?: FormFieldLabelSize;
} & FormGroupFieldSkeletonOptionLabelProps

const OptionLabel: React.FC<FormGroupFieldOptionLabelProps> = ({
  size = `L`,
  ...rest
}) => {
  const { layout } = FormGroupField.useFormGroupField()
  const isHorizontal = layout === `horizontal`
  const marginRight = isHorizontal ? space[7] : 0

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
          marginTop: space[3],
          marginBottom: space[3],
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
FormGroupField.useFormGroupField = useFormGroupField

export default FormGroupField
