/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState, useCallback, useMemo, useEffect } from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"

import { MdChevronRight, MdChevronLeft } from "react-icons/md"
import { Button } from "../Button"
import colors from "../../../theme/colors"
import { spaces } from "../../../utils/presets"

const CarouselContext = React.createContext()

function Carousel({
  children,
  activeItemIndex = 0,
  customCss = {},
  hideNav = false,
  hideButtons = true,
  ...rest
}) {
  const [activeIndex, setActiveIndex] = useState(activeItemIndex)

  const numberOfItems = children.length

  const jumpToItem = useCallback(val => setActiveIndex(val), [])

  const nextItem = useCallback(() => {
    if (activeIndex < numberOfItems - 1) {
      setActiveIndex(activeIndex + 1)
    }
  }, [activeIndex])

  const previousItem = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1)
    }
  }, [activeIndex])

  const value = useMemo(() => {
    return { numberOfItems, activeIndex, jumpToItem, nextItem, previousItem }
  }, [activeIndex])

  return (
    <CarouselContext.Provider value={value}>
      <div
        css={{
          display: `grid`,
          gridTemplateColumns: `auto 1fr auto`,
          gridTemplateRows: `auto auto`,
        }}
      >
        {!hideButtons && numberOfItems > 1 && (
          <Carousel.Button direction="PREV" />
        )}
        <Carousel.Content>{children}</Carousel.Content>
        {!hideButtons && numberOfItems > 1 && (
          <Carousel.Button direction="NEXT" />
        )}
        {numberOfItems > 1 && !hideNav && <Carousel.Nav />}
      </div>
    </CarouselContext.Provider>
  )
}

Carousel.propTypes = {
  activeContentIndex: PropTypes.number,
}

Carousel.Content = ({ children, customCss = {}, ...rest }) => {
  const { activeIndex } = Carousel.useContext()

  return (
    <div
      css={deepmerge(
        {
          gridColumn: `2 / 3`,
          overflow: `hidden`,
          position: `relative`,
        },
        customCss
      )}
      {...rest}
    >
      <div
        css={deepmerge(
          {
            alignItems: `center`,
            display: `inline-flex`,
            transform: `translate(-${activeIndex * 100}%)`,
            transition: `transform 0.5s ease-in-out`,
            width: `100%`,
            height: `100%`,

            "& > *": {
              width: `100%`,
              flexShrink: 0,
            },
          },
          customCss
        )}
        {...rest}
      >
        {children}
      </div>
    </div>
  )
}

Carousel.Nav = ({ children }) => {
  const { numberOfItems, activeIndex, jumpToItem } = Carousel.useContext()
  const items = Array(numberOfItems).fill()

  return (
    <div
      css={{
        display: `flex`,
        justifyContent: `center`,
        marginTop: spaces[`2xl`],
        gridColumn: `1 / 4`,
      }}
    >
      {items.map((item, idx) => (
        <Button
          key={idx}
          onClick={() => jumpToItem(idx)}
          variant="GHOST"
          css={{
            padding: spaces.s,
          }}
        >
          <span
            css={{
              background:
                activeIndex === idx ? colors.purple[50] : colors.grey[30],
              borderRadius: `50%`,
              height: `12px`,
              width: `12px`,
            }}
          />
        </Button>
      ))}
    </div>
  )
}

Carousel.Button = ({ children, direction = `NEXT` }) => {
  const { nextItem, previousItem } = Carousel.useContext()
  const onClick = direction === `NEXT` ? nextItem : previousItem
  const icon = direction === `NEXT` ? <MdChevronRight /> : <MdChevronLeft />

  return (
    <Button variant="GHOST" size="XL" onClick={onClick}>
      {children ? children : icon}
    </Button>
  )
}

Carousel.useContext = () => {
  const context = React.useContext(CarouselContext)
  if (!context) {
    throw new Error(
      `Compound components cannot be rendered outside the Carousel component`
    )
  }
  return context
}

export default Carousel
