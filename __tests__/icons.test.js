import React from "react"
import { render } from "react-testing-library"

import * as icons from "../src/components/icons/icons"

const sortedIconComponentNames = Object.keys(icons).sort()

describe(`icons`, () => {
  sortedIconComponentNames
    // filter out __esModule
    .filter(componentName => typeof icons[componentName] !== `boolean`)
    .forEach(componentName => {
      describe(`<${componentName} />`, () => {
        const IconComponent = icons[componentName]

        it(`renders unchanged`, () => {
          const { container } = render(<IconComponent />)

          expect(container).toMatchSnapshot()
        })
      })
    })
})
