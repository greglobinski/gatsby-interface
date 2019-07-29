import React, { useState, useCallback, useMemo } from "react"
import PropTypes from "prop-types"

const BOX_BEHAVIOURS = [`TOGGLE`, `UNFOLD`]
const CONTENT_VARIANTS = [`PRIMARY`, `SECONDARY`]
const BUTTON_BEHAVIOURS = [`SHOW`, `HIDE`]

const ContentBoxContext = React.createContext()

function useContentBoxContext() {
  const context = React.useContext(ContentBoxContext)
  if (!context) {
    throw new Error(
      `ContentBox compound components cannot be rendered outside the ContentBox component`
    )
  }
  return context
}

function ContentBox({ children, as, behaviour = `TOGGLE`, ...props }) {
  const Component = as || `div`
  const [on, setOn] = useState(false)
  const changeContent = useCallback(() => setOn(oldOn => !oldOn), [])
  const value = useMemo(
    () => {return { on, boxBehaviour: behaviour, changeContent }},
    [on]
  )

  return (
    <ContentBoxContext.Provider value={value}>
      <Component {...props}>{children}</Component>
    </ContentBoxContext.Provider>
  )
}

ContentBox.propTypes = {
  children: PropTypes.any.isRequired,
  behaviour: PropTypes.oneOf(BOX_BEHAVIOURS),
}

ContentBox.Content = ({ children, as, variant = `PRIMARY`, ...props }) => {
  const Component = as || `div`
  const { on, boxBehaviour } = useContentBoxContext()
  const componentToReturn = <Component {...props}>{children}</Component>

  if (on && boxBehaviour === `TOGGLE`) {
    if (variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (on && boxBehaviour === `UNFOLD`) {
    if (variant === `PRIMARY` || variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (!on) {
    if (variant === `PRIMARY`) {
      return componentToReturn
    }
  }

  return null
}

ContentBox.Content.propTypes = {
  children: PropTypes.any.isRequired,
  variant: PropTypes.oneOf(CONTENT_VARIANTS),
}

ContentBox.Button = ({ children, behaviour = `SHOW`, as = `button` }) => {
  const Component = as || `button`
  const { on, changeContent } = useContentBoxContext()

  return on && behaviour === `HIDE` ? null : (
    <Component onClick={changeContent}>{children}</Component>
  )
}

ContentBox.Button.propTypes = {
  children: PropTypes.any.isRequired,
  behaviour: PropTypes.oneOf(BUTTON_BEHAVIOURS),
}

export default ContentBox
