## FormField

`FormField` provides shared subcomponents:

- `FormField.Label`
- `FormField.Hint`
- `FormField.Error`
- `FormField.Wrapper` (only for 'singular' fields)

to all form element components:

- `InputField`
- `TextAreaField`
- `SelectField`
- `CheckboxField`
- `CheckboxGroupField`
- `RadioButtonField`

`FormField` is a styled version of `FormFieldSkeleton`. The only differences are:

- `FormField` has an additional subcomponent `FormField.Wrapper` which role is to provide a way to style the 'singular' field row as a block. The 'group' type components can be styled by appyling `css` prop directly to the `root`.
- `FormField.Label` accepts additional props
  - `size?: ['S','M','L']` - default value `M`
  - `isRequred?: boolean` - if true a 'required' flag is render inside the `<label>` tag. It's only presentational feature, besides that you have to add a HTML `required` attribute to `*.Control` component.

#### Label as ReactNode and required flag

If you want to set `FormField.Label` as something more than a `string` for example `<strong>Main</strong>category` and at the same time you need the `required` flag you have to wrap the content into a `span` tag, otherwise you get a weird result.

```
<FormField.Label isRequired={true}>
  <span><strong>Main</strong>category</span>
</FormField.Label>
```
