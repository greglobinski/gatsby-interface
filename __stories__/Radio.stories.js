import React, { Fragment, useState } from "react"

import { storiesOf } from "@storybook/react"

import { Radio, RadioSkeleton } from "../src/components/Radio"

storiesOf(`Radio`, module)
  .add(
    `RadioSkeleton`,

    () =>
      React.createElement(() => {
        const [optionValue, setOptionValue] = useState(`on`)

        return (
          <Fragment>
            <div>
              <RadioSkeleton
                fieldName="name"
                id="on"
                label="This is radio label"
                value="on"
                optionValue={optionValue}
                onChange={() => setOptionValue(`on`)}
              />
            </div>
            <div>
              <RadioSkeleton
                fieldName="name"
                id="off"
                label="This is radio label"
                value="off"
                optionValue={optionValue}
                onChange={() => setOptionValue(`off`)}
              />
            </div>
          </Fragment>
        )
      }),
    {
      info: {
        text: `
          It's a functional building block, on which Radio components are built on. 
        `,
      },
    }
  )
  .add(
    `Radio`,

    () =>
      React.createElement(() => {
        const [optionValue, setOptionValue] = useState(`on`)

        return (
          <Fragment>
            <div>
              <Radio
                fieldName="name"
                id="on"
                label="This is radio label"
                value="on"
                optionValue={optionValue}
                onChange={() => setOptionValue(`on`)}
              />
            </div>
            <div>
              <Radio
                fieldName="name"
                id="off"
                label="This is radio label"
                value="off"
                optionValue={optionValue}
                onChange={() => setOptionValue(`off`)}
              />
            </div>
          </Fragment>
        )
      }),
    {
      info: {
        text: `
          It's a functional building block, on which Radio components are built on. 
        `,
      },
    }
  )
