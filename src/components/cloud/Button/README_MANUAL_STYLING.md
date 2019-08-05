## Override / extend Button's styles

Use directly imported and applied `styles` object to style HTML tag or third party components

```javascript
import { Button } from "gatsby-interface"
import { styles } from "../../../utils/presets"


function Component() => (
  <div>
      <button
        css={{
          ...styles.button.base(),
          ...styles.button.sizes["L"],
          ...styles.button.variants["PRIMARY"](styles.tones["STANDARD"]),
        }}
      >
       Directly applied styles
      </button>
  </div>
)
```
