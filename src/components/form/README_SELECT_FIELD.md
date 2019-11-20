## SelectField

`SelectField` is a styled version of `SelectFieldSkeleton`

```
const options = [
  {
    label: `option 1`,
    value: `option1`
  },
  {
    label: `option 1`,
    value: `option1`
  }
]


<SelectField id="ID" hasError={!!error} hasHint={!!hint}>
  <SelectField.Wrapper>
    <SelectField.Label>Comment</SelectField.Label>
    <SelectField.Control
      options={options}
      onChange={e => action(`Change`)(e.target.value)}
    />
    <SelectField.Hint>{hint}</SelectField.Hint>
    <SelectField.Error>{error}</SelectField.Error>
  </SelectField.Wrapper>
</SelectField>
```

The only difference are:

- `SelectField` has an additional subcomponent `SelectField.Wrapper` which role is to provide a way to style the field row as a block.
- `SelectField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `SelectField.Control` component.

## SelectFieldBlock

`SelectFieldBlock` is a component which role is to provide a 'shortcut' usage of `SelectField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
const options = [
  {
    label: `option 1`,
    value: `option1`
  },
  {
    label: `option 1`,
    value: `option1`
  }
]

 <SelectFieldBlock
  id="ID"
  label="First name"
  options={options}
  onChange={e => {}}
  error={error}
  hint={hint}
/>
```

#### SelectFieldBlock props

`SelectFieldBLock` accepts all props `SelectField` and its subcomponents accept altogether, besides three distinctions:

- `label: ReactNode`
- `labelSize?: [L, M, S]` - default value `M`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`
