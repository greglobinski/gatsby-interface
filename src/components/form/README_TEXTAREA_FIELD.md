## TextAreaField

`TextAreaField` is a styled version of `TextAreaFieldSkeleton`

```
<TextAreaField id="ID" hasError={!!error} hasHint={!!hint}>
  <TextAreaField.Wrapper>
    <TextAreaField.Label>Last name</TextAreaField.Label>
    <TextAreaField.Control
      onChange={e => {}}
    />
    <TextAreaField.Error>{error}</TextAreaField.Error>
    <TextAreaField.Hint>{hint}</TextAreaField.Hint>
  </TextAreaField.Wrapper>
</TextAreaField>
```

The only differences are:

- `TextAreaField` has an additional subcomponent `TextAreaField.Wrapper` which role is to provide a way to style the field row as a block.
- `TextAreaField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `TextAreaField.Control` component.

## TextAreaFieldBlock

`TextAreaFieldBlock` is a component which role is to provide a 'shortcut' usage of `TextAreaField`, instead of explicitly passing subcomponents as children of the root component we pass all data and callbacks as props to the parent component.

```
 <TextAreaFieldBlock
  id="ID"
  label="First name"
  onChange={e => {}}
  error={error}
  hint={hint}
/>
```

#### TextAreaFieldBlock props

`TextAreaFieldBLock` accepts all props `TextAreaField` and its subcomponents accept altogether, besides three distinctions:

- `label: ReactNode`
- `labelSize?: [L, M, S]` - default value `M`
- `error?: ReactNode` - instead of `hasError`
- `hint?: ReactNode` - instead of `hasHint`