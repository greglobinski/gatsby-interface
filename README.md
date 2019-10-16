## Gatsby Interface

![Storybook](https://user-images.githubusercontent.com/18426780/63871208-b9aea600-c978-11e9-9107-79679b699c6f.png)

```
yarn storybook
```

### Patterns and best practices for contributing

These are some patterns and best practices we use when contributing to `gatsby-interface`

- Use React hooks and functional components - https://reactjs.org/docs/hooks-intro.html
- Use CSS props for styling - https://emotion.sh/docs/css-prop
- Use `gatsby-design-tokens` for styling constants - https://www.gatsbyjs.org/guidelines/design-tokens/
- Use compound components to make components more composable and flexible - https://kentcdodds.com/blog/how-to-optimize-your-context-value
- Make all PRs against the `dev` branch
- Use `TONE` and `VARIANT` prop (when appropriate) to determine color styles and version of a component - see Button as an example
- Make the component as generic as possible so it can be used anywhere by anything
- In `skeletons` folder, these contain only the functionality of a component (no styles) and can be used within other components
- Write Storybook stories for any component created - https://storybook.js.org/docs/basics/writing-stories/
- Typscript coming soon!
- Unit tests coming soon!

### Chromatic testing

To run the visual testing tool, run `CHROMATIC_APP_CODE=<insert_app_code> yarn chromatic`

You can find the app code in the Chromatic dashboard - https://www.chromaticqa.com
