## Avatar

Pass a `src` prop to the component to render a regular `img` tag.

```javascript
import { Avatar } from "gatsby-interface"
import avatarSrc from "./assets/avatarSrc.jpg"

function Component() => (
   <Avatar src={avatarSrc}  />
)
```

Pass a `fixed` prop to render the `Img` component from the `gatsby-image` package.

```javascript
import { Avatar } from "gatsby-interface"

...

function Component() => (
   <Avatar fixed={photo.fixed} size="M" />
)

...

export const pageQuery = graphql`
  query ContentfulPage($id: String!) {

    ...

    photo {
      fixed(width: 60, height: 60, quality: 90) {
        ...GatsbyContentfulFixed
      }
    }

    ...

  }
`
```

### Props

#### `size`

- type: **enum** ['S', 'M', 'L']
- default: 'S'

#### `src`

- type: **string**

#### `fixed`

- type: **object**

#### `alt`

- type: **string**

#### `customCss`

- type: **object**
