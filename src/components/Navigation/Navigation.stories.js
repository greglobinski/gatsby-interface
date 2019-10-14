/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import Navigation from "./Navigation"
import { StoryUtils } from "../../utils/storybook"

const navItems = [
  {
    node: {
      name: `Gatsby Days`,
      slug: `gatsby-days`,
      weight: -10,
      parentPage: {
        name: `Resources`,
        slug: `resources`,
      },
    },
  },
  {
    node: {
      name: `Resources`,
      slug: `resources`,
      weight: 500,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Docs`,
      slug: `docs`,
      weight: 600,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Start Building a Site`,
      slug: `start-project`,
      weight: 800,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Integrations`,
      slug: `integrations`,
      weight: 300,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Contact Us`,
      slug: `contact-us`,
      weight: 600,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Webinars`,
      slug: `webinars`,
      weight: null,
      parentPage: {
        name: `Resources`,
        slug: `resources`,
      },
    },
  },
  {
    node: {
      name: `Bring Data From Anywhere`,
      slug: `data-from-anywhere`,
      weight: 100,
      parentPage: {
        name: `How It Works`,
        slug: `how-it-works`,
      },
    },
  },
  {
    node: {
      name: `One-Click Deployment`,
      slug: `deployment`,
      weight: 400,
      parentPage: {
        name: `How It Works`,
        slug: `how-it-works`,
      },
    },
  },
  {
    node: {
      name: `How It Works`,
      slug: `how-it-works`,
      weight: 200,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Unreal Performance`,
      slug: `performance`,
      weight: 300,
      parentPage: {
        name: `How It Works`,
        slug: `how-it-works`,
      },
    },
  },
  {
    node: {
      name: `Write Modern Apps`,
      slug: `write-modern-apps`,
      weight: 200,
      parentPage: {
        name: `How It Works`,
        slug: `how-it-works`,
      },
    },
  },
  {
    node: {
      name: `About Us`,
      slug: `about`,
      weight: 400,
      parentPage: null,
    },
  },
  {
    node: {
      name: `Why Gatsby?`,
      slug: `why-gatsby`,
      weight: 100,
      parentPage: null,
    },
  },
]
const toggleNavigation = 1065
const bpToggleNavigation = `@media (min-width: ${toggleNavigation}px)`

storiesOf(`Navigation`, module)
  .add(`default`, () => (
    <StoryUtils.Container>
      <div>
        <Navigation
          isInverted={false}
          isMobileNavOpen={false}
          navItems={navItems}
          updateParentState={() => {}}
          bpToggleNavigation={bpToggleNavigation}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`inverted`, () => (
    <StoryUtils.Container>
      <div
        css={{
          background: `#362066`,
          padding: `8rem 4rem`,
        }}
      >
        <Navigation
          isInverted={true}
          isMobileNavOpen={false}
          navItems={navItems}
          updateParentState={() => {}}
          bpToggleNavigation={bpToggleNavigation}
        />
      </div>
    </StoryUtils.Container>
  ))
