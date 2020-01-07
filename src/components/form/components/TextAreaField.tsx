/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
} from "../../form-skeletons/components/FormFieldSkeleton"
import { FormField } from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import TextAreaFieldSkeleton, {
  TextAreaFieldSkeletonControlProps,
} from "../../form-skeletons/components/TextAreaFieldSkeleton"
import space from "../../../theme/space"

function TextAreaField(props: FormFieldSkeletonProps) {
  return <TextAreaFieldSkeleton {...props}></TextAreaFieldSkeleton>
}

export type TextAreaFieldControlProps = Omit<
  TextAreaFieldSkeletonControlProps,
  "ref"
>

const Control = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldControlProps
>((props, ref) => {
  const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()

  const placeholder =
    props.placeholder && props.disabled
      ? `The field is disabled`
      : props.placeholder

  return (
    <TextAreaFieldSkeleton.Control
      ref={ref}
      css={[
        getInputStyles(hasError),
        {
          display: `block`,
          minHeight: `5rem`,
          resize: `vertical`,
          padding: space[3],
        },
      ]}
      {...props}
      placeholder={placeholder}
    />
  )
})

TextAreaField.Control = Control
TextAreaField.Control.displayName = `TextAreaField.Control`

TextAreaField.Wrapper = FormField.Stack
TextAreaField.Wrapper.displayName = `TextAreaField.StackWrapper`

TextAreaField.Label = FormField.Label
TextAreaField.Label.displayName = `TextAreaField.Label`

TextAreaField.Hint = FormField.Hint
TextAreaField.Hint.displayName = `TextAreaField.Hint`

TextAreaField.Error = FormField.Error
TextAreaField.Error.displayName = `TextAreaField.Hint`

export default TextAreaField
