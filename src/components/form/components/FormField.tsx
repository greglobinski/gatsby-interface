/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"

import { MdError } from "react-icons/md"
import { getStackStyles } from "../../stack"
import { useTheme } from "../../ThemeProvider"
import {
  FormFieldSkeletonProps,
  FormFieldSkeleton,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonErrorProps,
} from "../../form-skeletons/components/FormFieldSkeleton"

import {
  getLabelFontSize,
  getLabelStyles,
  getDescriptionStyles,
  RequiredFlag,
  FormFieldLabelSize,
} from "./FormField.helpers"

import colors from "../../../theme/colors"
import space from "../../../theme/space"

export function getFieldStackStyles(type: `stack` | `item`) {
  const { stackCss, stackItemCss } = getStackStyles({
    gap: 2,
    align: "left",
    theme: useTheme(),
  })

  return type === `item` ? stackItemCss : stackCss
}

export function FormField(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type FormFieldWrapperProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

export const FieldWrapper: React.FC<FormFieldWrapperProps> = props => {
  return <div {...props} />
}

FormField.Wrapper = FieldWrapper
FormField.Wrapper.displayName = `FormField.Wrapper`

export const FieldStack: React.FC<{}> = props => {
  return <div css={getFieldStackStyles(`stack`)} {...props} />
}

FormField.Stack = FieldStack
FormField.Stack.displayName = `FormField.FieldStack`

export type FormFieldLabelProps = FormFieldSkeletonLabelProps & {
  isRequired?: boolean
  size?: FormFieldLabelSize
}

const Label: React.FC<FormFieldLabelProps> = ({
  children,
  isRequired,
  size = `M`,
  ...rest
}) => {
  return (
    <FormFieldSkeleton.Label
      css={[
        getLabelFontSize(size),
        getLabelStyles(),
        getFieldStackStyles(`item`),
      ]}
      {...rest}
    >
      {children} {isRequired && <RequiredFlag />}
    </FormFieldSkeleton.Label>
  )
}

FormField.Label = Label
FormField.Label.displayName = `FormField.Label`

export type FormFieldHintProps = FormFieldSkeletonHintProps

const FormFieldHint: React.FC<FormFieldHintProps> = ({ children, ...rest }) => {
  const { hasHint } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <FormFieldSkeleton.Hint
      css={[
        getDescriptionStyles(),
        getFieldStackStyles(`item`),
        {
          "&&": {
            marginTop: !hasHint ? 0 : undefined,
          },
        },
      ]}
      {...rest}
    >
      {children}
    </FormFieldSkeleton.Hint>
  )
}

FormField.Hint = FormFieldHint
FormField.Hint.displayName = `FormField.Hint`

const errorEntry = keyframes`
  50% {
    opacity: .5;
  }
  to {
    opacity: 1;
  }
`

const errorIconEntry = keyframes`
  to {
    transform: translateY(-0.1em) scale(1) 
  }
`

export type FormFieldErrorProps = FormFieldSkeletonErrorProps

export const FormFieldError: React.FC<FormFieldErrorProps> = ({
  children,
  ...rest
}) => {
  const { hasError, hasHint } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <FormFieldSkeleton.Error
      css={[
        getDescriptionStyles(),
        getFieldStackStyles(`item`),
        {
          animation: `${errorEntry} .25s ease forwards`,
          color: colors.red[70],
          opacity: 0,
          // marginTop: !hasError ? 0 : hasHint ? `${space[1]}` : undefined,

          "&&": {
            marginTop: !hasError ? 0 : hasHint ? `${space[1]}` : undefined,
          },

          svg: {
            animation: `${errorIconEntry} .25s ease-out forwards`,
            height: `1em`,
            marginRight: space[1],
            transform: `translateY(-0.1em) scale(0)`,
            verticalAlign: `middle`,
            width: `1em`,
          },
        },
      ]}
      {...rest}
    >
      <MdError />
      {children}
    </FormFieldSkeleton.Error>
  )
}

FormField.Error = FormFieldError
FormField.Error.displayName = `FormField.Error`

export default FormField
