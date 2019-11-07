This folder contains a set of skeleton components to be used for building accessible forms.

## Usage

All skeleton `*Field` components are compound components, each exposing the following components:

- `*Field`
- `*Field.Label` &mdash; a wrapper for either `<label />` or `<legend />` element
- `*Field.Error` &mdash; a wrapper for `<div />` element to display a error message
- `*Field.Hint` &mdash; a wrapper for `<div />` element to display a hint text

In addition to that, a `*Field` component can expose either of these:

- `*Field.Option` and `*Field.OptionLabel` &mdash; used exclusively by `CheckboxGroupField` and `RadioButtonField` to allow for customizing their options.
- `*Field.Control` &mdash; a component that renders the control for components that either do not offer a choice of options (text fields) or don't need to emphasize their options (selectors and confirmation checkboxes). In most cases it is just a wrapper for an HTML element (e.g. `InputField.Control` is a wrapper for `<input />`).

### Field props

Every `*Field` component accepts these props:

- `id: string` &mdash; passing an ID is required to create relationships between the field controls, label and hint/error messages
- `hasHint?: boolean` &mdash; whether the hint message should be displayed
- `hasError?: boolean` &mdash; whether the error message should be displayed

`CheckboxGroupField` and `RadioButtonField` also support `style` and `className` props that are passed to the `<fieldset />` element rendered by them to allow custom styles.

### Field.Label

`*Field.Label` renders either a `<label />` or a `<legend />` element and accepts all of the props supported by those, with the exception of `htmlFor`.

### Field.Error

`*Field.Label` renders a `<div />` with your error message, the message is only displayed when `hasError` is set to `true` for `*Field`. You can configure the error level by passing `validationMode`:

```jsx
// error message is announced by the screen reader as soon as "hasError" is changed to true
// can be useful fields like new password
<InputField.Error validationMode="change">This field is required</InputField.Error>

// error message is announced by the screen reader when the user enters/leaves the field
<InputField.Error validationMode="focus">This field is required</InputField.Error>

// same as validationMode="submit", error message is not announced by the screen reader on
<InputField.Error>This field is required</InputField.Error>
```

### Field.Hint

`*Field.Label` renders a `<div />` with your hint text, the text is only displayed when `hasHint` is set to `true` for `*Field`.

### Examples

Here's an example of rendering an input field in your component:

```javascript
import { InputField } from "gatsby-interface"

function MyInput() {
  const [value, setValue] = React.useState("")
  const [error, setError] = React.useState("")

  const onChange = e => {
    const nextValue = e.target.value

    setError(
      nextValue.length > 8 ? "Your username exceeds the limit of 8 symbols" : ""
    )
    setValue(nextValue)
  }

  return (
    <InputField id="my-input" hasError={!!error} hasHint>
      <InputField.Label>Username</InputField.Label>
      <InputField.Control type="text" value={value} onChange={onChange} />
      <InputField.Error>{error}</InputField.Error>
      <InputField.Hint>Max length: 8 symbols</InputField.Hint>
    </InputField>
  )
}
```

Displaying a checkbox group field:

```javascript
import { CheckboxGroupField } from "gatsby-interface"

const options = [
  `Assire var Anahid`,
  `Francesca Findabair`,
  `Fringilla Vigo`,
  `Ida Emean aep Sivney`,
  `Keira Metz`,
  `Margarita Laux-Antille`,
  `Philippa Eilhart`,
  `Sabrina Glevissig`,
  `Sheala de Tancarville`,
  `Triss Merigold`,
  `Yennefer of Vengerberg`,
].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

function MyCheckboxGroup() {
  const [value, setValue] = React.useState([])
  const [error, setError] = React.useState("")

  const onChange = e => {
    const optionValue = e.target.value

    const nextValue = value.includes(optionValue)
      ? value.filter(v => v !== optionValue)
      : [...value, optionValue]

    setError(
      nextValue.length === 0 ? "You have to select at least one option" : ""
    )
    setValue(nextValue)
  }

  return (
    <CheckboxGroupField id="my-checkbox-group" hasError={!!error} hasHint>
      <CheckboxGroupField.Label>Lodge of Sorceresses</CheckboxGroupField.Label>
      {options.map(({ label, value }) => (
        <React.Fragment key={value}>
          <CheckboxGroupField.Option
            value={value}
            name="checkbox-group"
            onChange={onChange}
          />
          <CheckboxGroupField.OptionLabel optionValue={value}>
            {label}
          </CheckboxGroupField.OptionLabel>
        </React.Fragment>
      ))}
      <CheckboxGroupField.Error>{error}</CheckboxGroupField.Error>
      <CheckboxGroupField.Hint>
        Lodge of Sorceresses is a secret society of female magic users in The
        Witcher saga
      </CheckboxGroupField.Hint>
    </CheckboxGroupField>
  )
}
```

## Components

### InputField

`InputField` is a compound component that can be used when you need to render an `<input />` form control.

`InputField.Control` accepts all of the props supported by `<input />` except for `id` and `aria-invalid` (those are taken care of by `InputField` itself). You also pass a `ref` to it like you would with a normal `<input />` element.

### TextAreaField

`TextAreaField` is a compound component that can be used when you need to render an `<textarea />` form control.

`TextAreaField.Control` accepts all of the props supported by `<textarea />` except for `id` and `aria-invalid` (those are taken care of by `TextAreaField` itself). You also pass a `ref` to it like you would with a normal `<textarea />` element.

### SelectField

`SelectField` is a compound component that can be used when you need to render an `<select />` form control.

`SelectField.Control` accepts all of the props supported by `<select />` except for `id` and `aria-invalid` (those are taken care of by `SelectField` itself), as well as `options`:

```jsx
return (
  <SelectField.Control
    options={[
      { value: "en", label: "English" },
      { value: "pl", label: "Polski" },
      { value: "ru", label: "Русский" },
    ]}
  />
)
```

You also pass a `ref` to it like you would with a normal `<select />` element.

### SingleCheckboxField

`SingleCheckboxField` is a compound component that can be used when you need to render a single `<input type="checkbox" />` with a label. A very common example is a field asking the user if they agree with terms and conditions.

`SingleCheckboxField.Control` accepts all of the props supported by `<input />` except for `type`, `id` and `aria-invalid` (those are taken care of by `SingleCheckboxField` itself). You also pass a `ref` to it like you would with a normal `<input />` element.

### CheckboxGroupField

`CheckboxGroupField` is a compound component that can be used when you need to render multiple checkbox options. It will wrap the options inside `<fieldset />` element, and `CheckboxGroupField.Label` will render a `<legend />` element. You can provide custom styles for those by passing `style` and/or `className` props to the corresponding components.

To render an option, you would need to use two components:

- `CheckboxGroupField.Option` &mdash; a wrapper for `<input type="checkbox" />`; it accepts all of the props supported by `<input />` except for `id` and `aria-invalid` (those are taken care of by `CheckboxGroupField` itself). You will also **have to** provide `value` and `name` props.
- `CheckboxGroupField.OptionLabel` &mdash; a wrapper for `<label />` to be associated with the option; accepts all of the props supported by `<label />` except for `htmlFor`. You will also **have to** provide `optionValue` prop so that the `CheckboxGroupField` can associate the label to its option.

### RadioButtonField

`RadioButtonField` is a compound component that can be used when you need to render a radio button. It is configured in exactly the same way as [CheckboxGroupField](#checkboxgroupfield)

### FormField

All other `*Field` components are built using `FormField`; this component provides default functionality for labels, hints and error messages. You should only use `FormField` if you want to build your own form control.
