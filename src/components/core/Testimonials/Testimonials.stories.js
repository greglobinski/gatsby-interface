/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import Testimonials from "./Testimonials"
import Testimonial from "./Testimonial"
import README from "./README.md"
import avatar from "./assets/20190908_164140.jpg"

const mockData = [
  {
    quote:
      `Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.`,
    author: {
      name: `Greg Lobinski`,
      position: `fron-end developer at Gatsby`,
      photo: { src: avatar },
      href: `https://gatsbyjs.com`,
    },
  },
  {
    quote:
      `Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.`,
    author: {
      name: `Greg Lobinski`,
      position: `fron-end developer at Gatsby`,
      photo: { src: avatar },
      href: `https://gatsbyjs.com`,
    },
  },
]

storiesOf(`core/Testimonials`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`in Carousel`, () => (
    <StoryUtils.Container>
      <Testimonials testimonials={mockData} />
    </StoryUtils.Container>
  ))
  .add(`static single item`, () => (
    <StoryUtils.Container>
      <Testimonial {...mockData[0]} />
    </StoryUtils.Container>
  ))
