import React from "react"
import { getHintId, getErrorId } from "../utils"

export type FormFieldContextValue = {
  id: string
  hasHint?: boolean
  hasError?: boolean
  meta: {
    hintId?: string
    errorId?: string
    controlDescribedBy?: string
  }
}

const FormFieldContext = React.createContext<FormFieldContextValue>({
  id: ``,
  hasHint: undefined,
  hasError: undefined,
  meta: {
    hintId: undefined,
    errorId: undefined,
    controlDescribedBy: undefined,
  },
})

export type FormFieldProps = {
  id: string
  hasHint?: boolean
  hasError?: boolean
  children?: React.ReactNode
}

function FormFieldProvider({
  id,
  hasError,
  hasHint,
  children,
}: FormFieldProps) {
  const fieldContext = React.useMemo<FormFieldContextValue>(() => {
    const hintId = getHintId(id)
    const errorId = getErrorId(id)
    const controlDescribedBy =
      [hasError && getErrorId(id), hasHint && getHintId(id)]
        .filter(describedBy => describedBy)
        .join(` `) || undefined

    return {
      id,
      hasError,
      hasHint,
      meta: {
        hintId,
        errorId,
        controlDescribedBy,
      },
    }
  }, [id, hasError, hasHint])

  return (
    <FormFieldContext.Provider value={fieldContext}>
      {children}
    </FormFieldContext.Provider>
  )
}

export type FormFieldLabelProps = Omit<
  JSX.IntrinsicElements["label"],
  "ref" | "htmlFor"
>

const FormFieldLabel: React.FC<FormFieldLabelProps> = props => {
  const { id } = useFormField()

  return <label htmlFor={id} {...props} />
}

export type FormFieldHintProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "id"
>

const FormFieldHint: React.FC<FormFieldHintProps> = props => {
  const { hasHint, meta } = useFormField()

  return hasHint ? <div id={meta.hintId} {...props} /> : null
}

export type ErrorValidationMode = "FOCUS" | "CHANGE" | "SUBMIT"
export type FormFieldErrorProps = Omit<
  JSX.IntrinsicElements["div"],
  "ref" | "id"
> & { validationMode?: ErrorValidationMode }

const FormFieldError: React.FC<FormFieldErrorProps> = ({
  validationMode,
  ...rest
}) => {
  const { hasError, meta } = useFormField()

  return hasError ? (
    <div
      id={meta.errorId}
      aria-live={getErrorAriaLiveAttribute(validationMode)}
      {...rest}
    />
  ) : null
}

function FormField(props: FormFieldProps) {
  return <FormFieldProvider {...props} />
}

FormField.displayName = `FormField`
FormField.Label = FormFieldLabel
FormField.Label.displayName = `FormField.Label`
FormField.Hint = FormFieldHint
FormField.Hint.displayName = `FormField.Hint`
FormField.Error = FormFieldError
FormField.Error.displayName = `FormField.Error`
FormField.useFormField = useFormField

export default FormField

function useFormField() {
  return React.useContext(FormFieldContext)
}

function getErrorAriaLiveAttribute(
  validationMode?: ErrorValidationMode
): React.HTMLAttributes<HTMLDivElement>["aria-live"] {
  if (validationMode === `FOCUS`) {
    return `assertive`
  }
  if (validationMode === `CHANGE`) {
    return `polite`
  }
  return undefined
}
