/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import deepmerge from "deepmerge"

import { Heading } from "../Heading"
import fontSizes from "../../../theme/fontSizes"
import { spaces } from "../../../utils/presets"
import Testimonial from "./Testimonial"
import { Carousel } from "../Carousel"

function Testimonials({
  children,
  title,
  testimonials,
  customCss = {},
  ...rest
}) {
  return (
    <div
      css={deepmerge(
        {
          width: `40rem`,
          maxWidth: `100%`,
          margin: `0 auto`,
        },
        customCss
      )}
      {...rest}
    >
      <Testimonials.Title>{title}</Testimonials.Title>
      <Testimonials.Carousel>
        {testimonials &&
          testimonials.map((item, idx) => {
            const { quote, author } = item

            return <Testimonial key={idx} quote={quote} author={author} />
          })}
      </Testimonials.Carousel>
    </div>
  )
}

Testimonials.Carousel = Carousel

Testimonials.Title = ({ children }) => (
  <Heading
    as="h3"
    variant="LIGHT"
    customCss={{
      fontSize: fontSizes.s,
      textAlign: `center`,
      marginBottom: spaces[`3xl`],
    }}
  >
    {children}
  </Heading>
)

export default Testimonials
