# BaseButton

A skeleton component on which styled [Button](?path=/story/button--variants) is built.

It's main jog is to render proper `tag`/`component` depending on passed `props`.

- `to` - the Gatsby `<Link>`
- `href` - a `<a>` tag
- in other case a `<button />` tag

```javascript
import { Button } from "gatsby-interface"

function Component() => (
  <BaseButton>Label</BaseButton>
)
```

## Props

#### `disabled`

- type: **boolean**
- default: false

#### `to`

- type: **string**

#### `href`

- type: **string**

#### `loading`

- type: **boolean**
- default: false

#### `loadingLabel`

- type: **string**

#### `rel`

- type: **string**

#### `target`

- type: **enum** ['_blank', '_self', '_parent', '_top']

#### `type`

- type: **enum** ['button', 'reset' , 'submit']
- default: 'button'
