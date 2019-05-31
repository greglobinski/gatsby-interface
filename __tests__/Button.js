import React from "react"
import { render, fireEvent } from "react-testing-library"

import { PrimaryButton } from "../src"

describe(`<PrimaryButton>`, () => {
  test(`renders unchanged`, async () => {
    const { container, debug } = render(
      <PrimaryButton>Click me!</PrimaryButton>
    )

    expect(container).toMatchSnapshot()
  })
})
