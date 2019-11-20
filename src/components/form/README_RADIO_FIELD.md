## RadioButtonField

`RadioButtonField` is a styled version of `RadioButtonFieldSkeleton`

```
 <RadioButtonField id="ID" hasError={!!error} hasHint={!!hint}>
  <RadioButtonField.Label >
    Fieldset Legend
  </RadioButtonField.Label>
  <RadioButtonField.Options>
    {options.map(({ label, value }) => (
      <React.Fragment key={value}>
        <RadioButtonField.Option value={value} name="field_name" />
        <RadioButtonField.OptionLabel
          optionValue={value}
        >
          {label}
        </RadioButtonField.OptionLabel>
      </React.Fragment>
    ))}
  </RadioButtonField.Options>
  <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
  <RadioButtonField.Error>{error}</RadioButtonField.Error>
</RadioButtonField>
```

**IMPORTANT!** `RadioButtonField.OptionLabel` in the `map` callback must always be placed below `RadioButtonField.Option`.

The **differences** between `RadioButtonField` and `RadioButtonFieldSkeleton`:

- `RadioButtonField` accepts additional props:
  - `layout?: ['vertical', 'horizontal']`
  - `variant?: ['standard', 'framed'`
- `RadioButtonField` has additional subcomponents:
  - `RadioButtonField.Options` which role is to provide a way to style the list of option inputs as a block.
  - `RadioButtonField.OptionFrame` which provide a styled frame for cases when we need to conditionaly render a sub form under the selected option framed together as a block
- `RadioButtonField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<legend>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `RadioButtonField.Control` component.
- `RadioButtonField.OptionLabel` accepts additional prop
  - `size?: ['S','M','L']` - default value `L`

#### Long lists of options

For long lists of options in `vertical` layout for better UX you can consider placing `RadioButtonField.Hint` and `RadioButtonField.Error` just under the `RadioButtonField.Label` and above the `RadioButtonField.Options`
