## Custom Button

### Override/extend styles

Use `emotion` `css` prop.

```javascript
import { Button } from "gatsby-interface"

function Component() => (
  <div>
    <Button
      label={`Button with custom style`}
      css={{
        color: colors.purple[60],
        background: colors.yellow[60],
        borderColor: colors.yellow[60],

        "&:hover:not([disabled])": {
          color: colors.white,
        },
      }}
    />
  </div>
)
```
