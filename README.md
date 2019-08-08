### Gatsby Interface

![Storybook](assets/storybook.png)

```
yarn storybook
```

## Chromatic testing

To run the visual testing tool, run `yarn test --app-code="<insert_app_code>"`

You can find the app code in the Chromatic dashboard.

When we integrate this with CI, we can use the environment variable `CHROMATIC_APP_CODE`
