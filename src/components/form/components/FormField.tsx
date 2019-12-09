/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React from "react"

import { MdError, MdInfoOutline } from "react-icons/md"
import {
  FormFieldSkeletonProps,
  FormFieldSkeleton,
  FormFieldSkeletonLabelProps,
  FormFieldSkeletonHintProps,
  FormFieldSkeletonErrorProps,
} from "../../form-skeletons/components/FormFieldSkeleton"

import {
  getWrapperSpacingStyles,
  getLabelFontSize,
  getLabelStyles,
  getDescriptionStyles,
  RequiredFlag,
  FormFieldLabelSize,
} from "./FormField.helpers"

import colors from "../../../theme/colors"
import { spaces } from "../../../utils/presets"

export function FormField(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type FormFieldWrapperProps = Pick<
  JSX.IntrinsicElements["div"],
  "className" | "style"
>

const Wrapper: React.FC<FormFieldWrapperProps> = props => {
  const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()

  return <div css={getWrapperSpacingStyles(hasError)} {...props} />
}

FormField.Wrapper = Wrapper
FormField.Wrapper.displayName = `FormField.Wrapper`

export type FormFieldLabelProps = FormFieldSkeletonLabelProps & {
  isRequired?: boolean;
  size?: FormFieldLabelSize;
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
        getLabelStyles({ isRequired: isRequired }),
        {
          alignItems: `flex-end`,
          color: colors.grey[60],
          display: isRequired ? `flex` : `block`,
          justifyContent: `space-between`,
          margin: `0 ${spaces[`2xs`]} ${spaces[`2xs`]}`,
        },
      ]}
      {...rest}
    >
      {children} {isRequired && <RequiredFlag />}
    </FormFieldSkeleton.Label>
  )
}

FormField.Label = Label
FormField.Label.displayName = `FormField.Label`

const Hint: React.FC<FormFieldSkeletonHintProps> = ({ children, ...rest }) => {
  const { hasHint } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <FormFieldSkeleton.Hint
      css={[
        getDescriptionStyles(),
        {
          marginTop: hasHint ? spaces[`xs`] : 0,
        },
      ]}
      {...rest}
    >
      <MdInfoOutline />
      {children}
    </FormFieldSkeleton.Hint>
  )
}

FormField.Hint = Hint
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
    transform: scale(1)
  }
`

const Error: React.FC<FormFieldSkeletonErrorProps> = ({
  children,
  ...rest
}) => {
  const { hasHint, hasError } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <FormFieldSkeleton.Error
      css={[
        getDescriptionStyles(),
        {
          animation: `${errorEntry} .25s ease forwards`,
          color: colors.red[70],
          marginTop: hasHint && hasError ? spaces[`2xs`] : 0,
          marginBottom: hasError ? spaces.s : 0,
          opacity: 0,

          svg: {
            animation: `${errorIconEntry} .25s ease-out forwards`,
            transform: `scale(0)`,
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

FormField.Error = Error
FormField.Error.displayName = `FormField.Error`

export default FormField
