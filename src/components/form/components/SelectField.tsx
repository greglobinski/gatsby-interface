/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  FormFieldSkeleton,
  FormFieldSkeletonProps,
} from "../../form-skeletons/components/FormFieldSkeleton"
import { FormField } from "./FormField"
import { getInputStyles } from "./FormField.helpers"
import SelectFieldSkeleton, {
  SelectFieldSkeletonControlProps,
} from "../../form-skeletons/components/SelectFieldSkeleton"

import { spaces } from "../../../utils/presets"

function SelectField(props: FormFieldSkeletonProps) {
  return <SelectFieldSkeleton {...props}></SelectFieldSkeleton>
}

export type SelectFieldControlProps = Omit<
  SelectFieldSkeletonControlProps,
  "ref"
>

const Control = React.forwardRef<HTMLSelectElement, SelectFieldControlProps>(
  (props, ref) => {
    const { hasError } = FormFieldSkeleton.useFormFieldSkeleton()

    return (
      <SelectFieldSkeleton.Control
        ref={ref}
        css={[
          getInputStyles(hasError),
          {
            padding: `0 ${spaces[`xs`]}`,
            backgroundImage: `url("data:image/svg+xml,%3Csvg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 24 24' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundRepeat: `no-repeat`,
            backgroundPosition: `right ${spaces.xs} top 50%, 0 0`,
          },
        ]}
        {...props}
      />
    )
  }
)

SelectField.Control = Control
SelectField.Control.displayName = `SelectField.Control`

SelectField.Wrapper = FormField.Wrapper
SelectField.Wrapper.displayName = `SelectField.Wrapper`

SelectField.Label = FormField.Label
SelectField.Label.displayName = `SelectField.Label`

SelectField.Hint = FormField.Hint
SelectField.Hint.displayName = `SelectField.Hint`

SelectField.Error = FormField.Error
SelectField.Error.displayName = `SelectField.Hint`

export default SelectField
