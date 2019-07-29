import React from "react"

import { storiesOf } from "@storybook/react"

import { SettingsCard } from "../src"
import { Set } from "core-js"

storiesOf(`SettingsCard`, module).add(`default`, () => (
  <SettingsCard>
    <SettingsCard.Title>Card's title</SettingsCard.Title>
    <SettingsCard.Content>
      <SettingsCard.Description>
        Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
        onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        <SettingsCard.ToggleButton>Edit</SettingsCard.ToggleButton>
      </SettingsCard.Description>
    </SettingsCard.Content>
    <SettingsCard.Content variant="SECONDARY">
      <SettingsCard.Description>
        asdfafasfsad
        <SettingsCard.ToggleButton>Cancel</SettingsCard.ToggleButton>
      </SettingsCard.Description>
    </SettingsCard.Content>
  </SettingsCard>
))
