/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import DecoratedBlock from "./DecoratedBlock"
import README from "./README.md"
import HeaderIcon from "./assets/HeaderIcon"
import FrameFrill from "./assets/FrameFrill"
import colors from "../../../theme/colors"

storiesOf(`core/DecoratedBlock`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`undecorated`, () => (
    <StoryUtils.Container>
      <div css={{ width: `30rem` }}>
        <DecoratedBlock
          title="Veggies es bonus "
          subtitle="Parsley shallot courgette tatsoi pea "
          icon={HeaderIcon}
          body={`
            <p>              
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter purslane kale. Celery potato scallion desert raisin horseradish spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea. Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi beetroot carrot watercress.
            </p> 
            <ul>
              <li>Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell</li>
              <li>Nori grape silver beet broccoli kombu beet greens </li>
              <li>Kohlrabi radish okra azuki </li>
              <li>Beetroot water spinach okra water chestnut  </li>
            </ul> 
          `}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`with decorations`, () => (
    <StoryUtils.Container>
      <div css={{ width: `30rem` }}>
        <DecoratedBlock
          title="Veggies es bonus "
          subtitle="Parsley shallot courgette tatsoi pea "
          blockColors={[colors.blue[90], colors.blue[30], colors.blue[30]]}
          body={`
            <p>              
              Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce kohlrabi amaranth water. 
            </p> 
            <ul>
              <li>Corn amaranth salsify bunya nuts nori azuki bean chickweed potato bell</li>
              <li>Nori grape silver beet broccoli kombu beet greens </li>
              <li>Kohlrabi radish okra azuki </li>
              <li>Beetroot water spinach okra water chestnut  </li>
            </ul> 
          `}
          decorations={[
            <FrameFrill
              css={{
                position: `absolute`,
                bottom: `20%`,
                right: 0,
                transform: `translate(50%, 0)`,
                zIndex: 2,
              }}
            />,
          ]}
        />
      </div>
    </StoryUtils.Container>
  ))
