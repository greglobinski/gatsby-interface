/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState, Fragment } from "react"
import { MdCheck } from "react-icons/md"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { radios, boolean } from "@storybook/addon-knobs"

import Navigation from "./Navigation"

const Icon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="13" cy="13" r="4" transform="rotate(45 13 13)" fill="#8954A8" />
    <circle cx="13" cy="5" r="1" transform="rotate(90 13 5)" fill="#B17ACC" />
    <circle cx="5" cy="13" r="1" transform="rotate(90 5 13)" fill="#232129" />
    <circle
      cx="7.34302"
      cy="7.34317"
      r="1"
      transform="rotate(45 7.34302 7.34317)"
      fill="#232129"
    />
    <circle
      cx="7.34302"
      cy="18.6568"
      r="1"
      transform="rotate(45 7.34302 18.6568)"
      fill="#B17ACC"
    />
    <path
      d="M13 4.99994C17.4183 4.99994 21 8.58166 21 12.9999C21 17.4182 17.4183 20.9999 13 20.9999C10.8696 20.9999 8.93366 20.1672 7.5 18.8094"
      stroke="#B17ACC"
    />
  </svg>
)

const Component = () => {
  const [activeNav, setNav] = useState(`general`)
  const [subNav, setSubNav] = useState(`site`)
  return (
    <Fragment>
      <Navigation>
        <Navigation.List>
          <Navigation.Item
            to="/"
            active={activeNav === `general`}
            onClick={() => setNav(`general`)}
          >
            {activeNav === `general` && <Icon />}
            General
          </Navigation.Item>
          {activeNav === `general` && (
            <Navigation.List>
              <Navigation.SubItem
                to="#"
                active={subNav === `site`}
                onClick={() => setSubNav(`site`)}
              >
                Site Details
              </Navigation.SubItem>
              <Navigation.SubItem
                to="#"
                active={subNav === `contributors`}
                onClick={() => setSubNav(`contributors`)}
              >
                Contributors
              </Navigation.SubItem>
              <Navigation.SubItem
                to="#"
                active={subNav === `envVars`}
                onClick={() => setSubNav(`envVars`)}
              >
                Environment Variables
              </Navigation.SubItem>
            </Navigation.List>
          )}
          <Navigation.Item
            to="/"
            active={activeNav === `integrations`}
            onClick={() => setNav(`integrations`)}
          >
            {activeNav === `integrations` && <Icon />}
            Integrations
          </Navigation.Item>
          <Navigation.Item
            to="/"
            active={activeNav === `preview`}
            onClick={() => setNav(`preview`)}
          >
            {activeNav === `preview` && <Icon />}
            Preview
          </Navigation.Item>
          <Navigation.Item
            to="/"
            active={activeNav === `danger`}
            onClick={() => setNav(`danger`)}
          >
            {activeNav === `danger` && <Icon />}
            Danger Zone
          </Navigation.Item>
        </Navigation.List>
      </Navigation>
    </Fragment>
  )
}

storiesOf(`Navigation`, module).add(`default`, () => (
  <div
    css={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `flex-start`,
      width: `500px`,
    }}
  >
    <Component />
  </div>
))
