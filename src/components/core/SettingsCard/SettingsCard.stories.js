import React from "react"

import { storiesOf } from "@storybook/react"
import { MdEdit, MdArrowForward, MdAdd, MdDelete } from "react-icons/md"

import CardsWrapper from "../../../utils/storybook/CardsWrapper"
import SpacePlaceholder from "../../../utils/storybook/SpacePlaceholder"
import SettingsCard from "./SettingsCard"

storiesOf(`SettingsCard`, module)
  .add(`default usage`, () => (
    <CardsWrapper>
      <SettingsCard>
        <SettingsCard.Title>Card's title</SettingsCard.Title>
        <SettingsCard.EditButton hiddenIf="OPEN" />

        <SettingsCard.Content>
          <SettingsCard.Description>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </SettingsCard.Description>
        </SettingsCard.Content>
        <SettingsCard.Content variant="SECONDARY">
          <SettingsCard.Description>
            Celery quandong swiss chard chicory earthnut pea potato. Salsify
            taro catsear garlic gram celery bitterleaf wattle seed collard
            greens nori. Grape wattle seed kombu beetroot horseradish carrot
            squash brussels sprout chard.
          </SettingsCard.Description>
          <SpacePlaceholder hint="SECONDARY CONTENT" />
          <SettingsCard.Actions>
            <SettingsCard.CancelButton />
            <SettingsCard.SubmitButton />
          </SettingsCard.Actions>
        </SettingsCard.Content>
      </SettingsCard>
    </CardsWrapper>
  ))
  .add(`no secondary conent`, () => (
    <CardsWrapper>
      <SettingsCard>
        <SettingsCard.Title>Card's title</SettingsCard.Title>
        <SettingsCard.EditButton
          onClick={() =>
            alert(
              `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
            )
          }
        />
        <SettingsCard.Content>
          <SettingsCard.Description>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </SettingsCard.Description>
        </SettingsCard.Content>
      </SettingsCard>
      <SettingsCard>
        <SettingsCard.Title>Card's title</SettingsCard.Title>
        <SettingsCard.EditButton
          onClick={() =>
            alert(
              `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
            )
          }
        />
        <SettingsCard.Content>
          <SettingsCard.Description>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </SettingsCard.Description>
          <SettingsCard.Description>
            Amaranth tatsoi tomatillo melon azuki bean garlic.
          </SettingsCard.Description>
          <SpacePlaceholder hint="PRIMARY CONTENT" />
        </SettingsCard.Content>
      </SettingsCard>
    </CardsWrapper>
  ))
  .add(`custom EditButton`, () => (
    <CardsWrapper>
      <SettingsCard>
        <SettingsCard.Title>Card's title</SettingsCard.Title>
        <SettingsCard.EditButton
          label="Change"
          onClick={() =>
            alert(
              `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
            )
          }
        />
        <SettingsCard.Content>
          <SettingsCard.Description>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </SettingsCard.Description>
        </SettingsCard.Content>
      </SettingsCard>
      <SettingsCard>
        <SettingsCard.Title>Card's title</SettingsCard.Title>
        <SettingsCard.EditButton
          onClick={() =>
            alert(
              `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
            )
          }
        >
          Add <MdAdd />
        </SettingsCard.EditButton>
        <SettingsCard.Content>
          <SettingsCard.Description>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </SettingsCard.Description>
        </SettingsCard.Content>
      </SettingsCard>
    </CardsWrapper>
  ))
  .add(`setting tone`, () => (
    <CardsWrapper>
      <SettingsCard tone={`DANGER`}>
        <SettingsCard.Title>Card's title</SettingsCard.Title>
        <SettingsCard.EditButton
          onClick={() =>
            alert(
              `onClick on SettingsCard.EdituButton override the defaul toggle behaviour`
            )
          }
        >
          Remove <MdDelete />
        </SettingsCard.EditButton>
        <SettingsCard.Content>
          <SettingsCard.Description>
            Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi
            welsh onion daikon amaranth tatsoi tomatillo melon azuki bean
            garlic.
          </SettingsCard.Description>
        </SettingsCard.Content>
      </SettingsCard>
    </CardsWrapper>
  ))
