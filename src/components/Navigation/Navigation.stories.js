/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState } from "react"

import { storiesOf } from "@storybook/react"

import Navigation from "./Navigation"

const Icon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="4" r="1" transform="rotate(90 12 4)" fill="#B17ACC" />
    <circle cx="12" cy="12" r="4" transform="rotate(45 12 12)" fill="#8954A8" />
    <circle cx="4" cy="12" r="1" transform="rotate(90 4 12)" fill="#232129" />
    <circle
      cx="6.34302"
      cy="6.34317"
      r="1"
      transform="rotate(45 6.34302 6.34317)"
      fill="#232129"
    />
    <circle
      cx="6.34302"
      cy="17.6568"
      r="1"
      transform="rotate(45 6.34302 17.6568)"
      fill="#B17ACC"
    />
    <path
      d="M12 3.99994C16.4183 3.99994 20 7.58166 20 11.9999C20 16.4182 16.4183 19.9999 12 19.9999C9.86958 19.9999 7.93366 19.1672 6.5 17.8094"
      stroke="#B17ACC"
    />
  </svg>
)

// The active prop should be managed by path rather than component state. This use case is for storybook only
const Component = () => {
  const [activeNav, setNav] = useState(`general`)
  const [subNav, setSubNav] = useState(`site`)

  const options = [
    {
      label: `General`,
      svg: Icon,
      onClick: () => setNav(`general`),
      active: activeNav === `general`,
      to: `/`,
      subItems: [
        {
          label: `Site Details`,
          onClick: () => setSubNav(`site`),
          active: subNav === `site`,
          to: `#`,
        },
        {
          label: `Contributors`,
          onClick: () => setSubNav(`contributors`),
          active: subNav === `contributors`,
          to: `#`,
        },
        {
          label: `Environment Variables`,
          onClick: () => setSubNav(`envVars`),
          active: subNav === `envVars`,
          to: `#`,
        },
      ],
    },
    {
      label: `Integrations`,
      svg: Icon,
      onClick: () => setNav(`integrations`),
      active: activeNav === `integrations`,
      to: `/`,
    },
    {
      label: `Preview`,
      svg: Icon,
      onClick: () => setNav(`preview`),
      active: activeNav === `preview`,
      to: `/`,
    },
    {
      label: `Danger Zone`,
      svg: Icon,
      onClick: () => setNav(`danger`),
      active: activeNav === `danger`,
      to: `/`,
    },
  ]

  return <Navigation options={options} />
}

storiesOf(`Navigation`, module).add(`default`, () => (
  <div
    css={{
      width: `800px`,
      marginTop: `1rem`,
      marginLeft: `1rem`,
    }}
  >
    <Component />
  </div>
))
