import React from "react"

import { storiesOf } from "@storybook/react"

import CardsWrapper from "../src/utils/storybook/CardsWrapper"
import SpacePlaceholder from "../src/utils/storybook/SpacePlaceholder"
import { SettingsCard } from "../src"
import { Set } from "core-js"

storiesOf(`SettingsCard`, module).add(`default`, () => (
  <CardsWrapper>
    <SettingsCard>
      <SettingsCard.Title>Card's title</SettingsCard.Title>
      <SettingsCard.EditButton />
      <SettingsCard.Content>
        <SettingsCard.Description>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </SettingsCard.Description>
      </SettingsCard.Content>
      <SettingsCard.Content variant="SECONDARY">
        Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot
        courgette tatsoi pea sprouts fava bean collard greens dandelion okra
        wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
        <SettingsCard.Actions>
          <SettingsCard.CancelButton />
          <SettingsCard.SubmitButton />
        </SettingsCard.Actions>
      </SettingsCard.Content>
    </SettingsCard>
  </CardsWrapper>
))
