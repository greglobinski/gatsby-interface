## CheckboxGroupField

`CheckboxGroupField` is a styled version of `CheckboxGroupFieldSkeleton`

```
 <CheckboxGroupField id="ID" hasError={!!error} hasHint={!!hint}>
  <CheckboxGroupField.Label >
    Fieldset Legend
  </CheckboxGroupField.Label>
  <CheckboxGroupField.Options>
    {options.map(({ label, value }) => (
      <React.Fragment key={value}>
        <CheckboxGroupField.Option value={value} name="field_name" />
        <CheckboxGroupField.OptionLabel
          optionValue={value}
        >
          {label}
        </CheckboxGroupField.OptionLabel>
      </React.Fragment>
    ))}
  </CheckboxGroupField.Options>
  <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
  <CheckboxGroupField.Error>{error}</CheckboxGroupField.Error>
</CheckboxGroupField>
```

**IMPORTANT!** `CheckboxGroupField.OptionLabel` in the `map` callback must always be placed below `CheckboxGroupField.Option`.

The **differences** between `CheckboxGroupField` and `CheckboxGroupFieldSkeleton`:

- `CheckboxGroupField` accepts additional prop:
  - `layout?: ['vertical', 'horizontal']`
- `CheckboxGroupField` has additional subcomponent:
  - `CheckboxGroupField.Options` which role is to provide a way to style the list of option inputs as a block.
- `CheckboxGroupField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<legend>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `CheckboxGroupField.Control` component.
- `CheckboxGroupField.OptionLabel` accepts additional prop
  - `size?: ['S','M','L']` - default value `L`
