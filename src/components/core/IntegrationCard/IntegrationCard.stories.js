import React from "react"

import { storiesOf } from "@storybook/react"
import { MdEdit, MdArrowForward, MdAdd, MdDelete } from "react-icons/md"

import CardsWrapper from "../../../utils/storybook/CardsWrapper"
import SpacePlaceholder from "../../../utils/storybook/SpacePlaceholder"
import IntegrationCard from "./IntegrationCard"

storiesOf(`IntegrationCard`, module)
  .add(`shortcut usage`, () => (
    <CardsWrapper>
      <IntegrationCard
        title="Card's title"
        description=" Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
        actionLabel="Connect"
        detailsLabel="Details"
      >
        <IntegrationCard.Content variant="SECONDARY">
          <IntegrationCard.Description>
            Celery quandong swiss chard chicory earthnut pea potato. Salsify
            taro catsear garlic gram celery bitterleaf wattle seed collard
            greens nori. Grape wattle seed kombu beetroot horseradish carrot
            squash brussels sprout chard
          </IntegrationCard.Description>
        </IntegrationCard.Content>
      </IntegrationCard>
      <IntegrationCard
        state={{ isConnected: true }}
        title="Card's title"
        description=" Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic."
      >
        <IntegrationCard.Content variant="SECONDARY">
          Celery quandong swiss chard chicory earthnut pea potato. Salsify taro
          catsear garlic gram celery bitterleaf wattle seed collard greens nori.
          Grape wattle seed kombu beetroot horseradish carrot squash brussels
          sprout chard
        </IntegrationCard.Content>
      </IntegrationCard>
    </CardsWrapper>
  ))
  .add(`default usage`, () => (
    <CardsWrapper>
      <IntegrationCard>
        <IntegrationCard.Title>Card's title</IntegrationCard.Title>
        <IntegrationCard.DetailsButton />
        <IntegrationCard.ActionButton />

        <IntegrationCard.Description>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </IntegrationCard.Description>

        <IntegrationCard.Content variant="SECONDARY">
          <IntegrationCard.Description>
            Celery quandong swiss chard chicory earthnut pea potato. Salsify
            taro catsear garlic gram celery bitterleaf wattle seed collard
            greens nori. Grape wattle seed kombu beetroot horseradish carrot
            squash brussels sprout chard
          </IntegrationCard.Description>
        </IntegrationCard.Content>
      </IntegrationCard>
      <IntegrationCard state={{ isConnected: true }}>
        <IntegrationCard.Title>Card's title</IntegrationCard.Title>
        <IntegrationCard.DetailsButton />
        <IntegrationCard.ActionButton />

        <IntegrationCard.Description>
          Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
          onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
        </IntegrationCard.Description>

        <IntegrationCard.Content variant="SECONDARY">
          <IntegrationCard.Description>
            Celery quandong swiss chard chicory earthnut pea potato. Salsify
            taro catsear garlic gram celery bitterleaf wattle seed collard
            greens nori. Grape wattle seed kombu beetroot horseradish carrot
            squash brussels sprout chard
          </IntegrationCard.Description>
        </IntegrationCard.Content>
      </IntegrationCard>
    </CardsWrapper>
  ))
