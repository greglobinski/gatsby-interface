import React from "react"
import FormFieldSkeleton, { FormFieldSkeletonProps } from "./FormFieldSkeleton"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function InputFieldSkeleton(props: FormFieldSkeletonProps) {
  return <FormFieldSkeleton {...props} />
}

export type InputFieldSkeletonControlProps = OmitControlProps<
  JSX.IntrinsicElements["input"]
>

InputFieldSkeleton.Control = React.forwardRef<
  HTMLInputElement,
  InputFieldSkeletonControlProps
>((props, ref) => {
  const { id, hasError, meta } = FormFieldSkeleton.useFormFieldSkeleton()

  return (
    <input
      id={id}
      {...props}
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        props[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    />
  )
})
InputFieldSkeleton.Control.displayName = `InputFieldSkeleton.Control`

InputFieldSkeleton.Label = FormFieldSkeleton.Label
InputFieldSkeleton.Label.displayName = `InputFieldSkeleton.Label`
InputFieldSkeleton.Hint = FormFieldSkeleton.Hint
InputFieldSkeleton.Hint.displayName = `InputFieldSkeleton.Hint`
InputFieldSkeleton.Error = FormFieldSkeleton.Error
InputFieldSkeleton.Error.displayName = `InputFieldSkeleton.Hint`

export default InputFieldSkeleton
