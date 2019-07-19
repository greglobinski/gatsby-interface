import React, { useState } from "react"

import { storiesOf } from "@storybook/react"

import { StepsIndicator } from "../src/components/StepsIndicator"

const states = [`SUCCESS`, `IN_PROGRESS`, `NOT_STARTED`, `FAILED`]
const mockSteps = [
  {
    label: `Label 1`,
    status: states[1],
  },
  {
    label: `Label 1`,
    status: states[2],
  },
  {
    label: `Label 1`,
    status: states[2],
  },
  {
    label: `Label 2`,
    status: states[2],
  },
  {
    label: `Label 3`,
    status: states[2],
  },
  {
    label: `Label 4`,
    status: states[2],
  },
  {
    label: `Label 4`,
    status: states[2],
  },
  {
    label: `Label 4`,
    status: states[2],
  },
]

const staticMockSteps = [
  {
    label: `Label 1`,
    status: states[0],
  },
  {
    label: `Label 0`,
    status: states[0],
  },
  {
    label: `Label 1`,
    status: states[0],
  },
  {
    label: `Label 2`,
    status: states[1],
  },
  {
    label: `Label 3`,
    status: states[2],
  },
  {
    label: `Label 4`,
    status: states[2],
  },
  {
    label: `Label 4`,
    status: states[2],
  },
  {
    label: `Label 4`,
    status: states[2],
  },
]

const StepContainer = () => {
  const [steps, setSteps] = useState(mockSteps)
  const [currentStep, setCurrentStep] = useState(0)

  setTimeout(() => {
    steps[currentStep].status = `SUCCESS`
    steps[currentStep + 1].status = `IN_PROGRESS`
    setCurrentStep(currentStep + 1)
    setSteps(steps)
  }, 1000)

  return <StepsIndicator steps={steps} />
}

storiesOf(`StepsIndicator`, module)
  .add(`StepsIndicator`, () => <StepContainer />, {
    info: {
      text: `
          This is the Steps Bar
        `,
    },
  })
  .add(
    `StaticStepsIndicator`,
    () => <StepsIndicator expanded steps={staticMockSteps} />,
    {
      info: {
        text: `
          This is the Steps Bar
        `,
      },
    }
  )
