import React from "react"
import { render, fireEvent } from "react-testing-library"

import { PrimaryButton } from "../src/components/core/Button"

describe(`<PrimaryButton>`, () => {
  test(`renders unchanged`, async () => {
    const { container, debug } = render(
      <PrimaryButton>Click me!</PrimaryButton>
    )

    expect(container).toMatchSnapshot()
  })
})
