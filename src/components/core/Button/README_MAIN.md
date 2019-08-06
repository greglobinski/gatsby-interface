## Button

Built on the basis of [`BaseButton`](??path=/story/basebutton--tags-components)

```javascript
import { Button } from "gatsby-interface"

function Component() => (
  <Button>Label</Button>
)
```

### Props

#### `variant`

- type: **enum** ['PRIMARY', 'SECONDARY', 'GHOST']
- default: 'PRIMARY'

#### `size`

- type: **enum** ['S', 'M', 'L', 'XL']
- default: 'L'

#### `tone`

- type: **enum** ['STANDARD', 'SUCCESS', 'DANGER', 'NEUTRAL']
- default: 'STANDARD'

#### and all [`BaseButton`](?path=/story/basebutton--tags-components) `props`

- `to`
- `href`
- `disabled`
- `label`
- `loading`
- `loadingLabel`
- `rel`
- `target`
- `type`
