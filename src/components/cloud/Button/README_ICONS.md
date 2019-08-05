## Button with icon

#### A standard way to add an icon

```javascript
import { Button } from "gatsby-interface"
import { MdArrowForward } from "react-icons/md"

function Component() => (
  <div>
    <Button>
      On the right <MdArrowForward />
    </Button>

    <Button>
      <MdArrowForward /> On the left
    </Button>
  </div>
)
```

#### A shortcut

```javascript
import { Button } from "gatsby-interface"


function Component() => (

  /*
    * Set a 'label' prop, the 'MdArrowForward' icon
    * on the right will be added automaticaly
  */
  <Button label="With default icon" />

)
```
