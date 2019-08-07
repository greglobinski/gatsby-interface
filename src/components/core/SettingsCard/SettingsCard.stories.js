import React from "react"

import { storiesOf } from "@storybook/react"
import { MdEdit, MdArrowForward } from "react-icons/md"

import CardsWrapper from "../../../utils/storybook/CardsWrapper"
import SpacePlaceholder from "../../../utils/storybook/SpacePlaceholder"
import SettingsCard from "./SettingsCard"

storiesOf(`SettingsCard`, module).add(`default`, () => (
  <CardsWrapper>
    <SettingsCard>
      <SettingsCard.Title>Card's title</SettingsCard.Title>
      <SettingsCard.EditButton>
        Edit <MdEdit />
      </SettingsCard.EditButton>
      <SettingsCard.Content>
        <SettingsCard.Description>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </SettingsCard.Description>
        <SettingsCard.EditButton />
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
