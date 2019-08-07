import React, { useState, useCallback, useMemo } from "react"
import PropTypes from "prop-types"

const BOX_STATES = [`OPEN`, `CLOSED`]
const BOX_BEHAVIOURS = [`TOGGLE`, `UNFOLD`]
const CONTENT_VARIANTS = [`PRIMARY`, `SECONDARY`]

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

function ContentBox({
  state = `CLOSED`,
  children,
  as,
  behaviour = `TOGGLE`,
  ...rest
}) {
  const Component = as || `div`
  const [boxState, setBoxState] = useState(state)
  const changeContent = useCallback(
    () => setBoxState(oldState => (oldState === `OPEN` ? `CLOSED` : `OPEN`)),
    []
  )
  const value = useMemo(() => {
    return { boxState, boxBehaviour: behaviour, changeContent }
  }, [boxState])

  return (
    <ContentBoxContext.Provider value={value}>
      <Component {...rest}>{children}</Component>
    </ContentBoxContext.Provider>
  )
}

ContentBox.propTypes = {
  children: PropTypes.any.isRequired,
  behaviour: PropTypes.oneOf(BOX_BEHAVIOURS),
  state: PropTypes.oneOf(BOX_STATES),
}

ContentBox.Content = ({ children, as, variant = `PRIMARY`, ...rest }) => {
  const Component = as || `div`
  const { boxState, boxBehaviour } = useContentBoxContext()
  const componentToReturn = <Component {...rest}>{children}</Component>

  if (boxState === `OPEN` && boxBehaviour === `TOGGLE`) {
    if (variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (boxState === `OPEN` && boxBehaviour === `UNFOLD`) {
    if (variant === `PRIMARY` || variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (boxState === `CLOSED`) {
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

ContentBox.Button = ({ children, belongsTo, as = `button`, ...props }) => {
  const Component = as || `button`
  const { boxState, changeContent } = useContentBoxContext()

  return (
    <Component onClick={changeContent} {...props}>
      {children}
    </Component>
  )
}

ContentBox.Button.propTypes = {
  children: PropTypes.any.isRequired,
  belongsTo: PropTypes.oneOf(CONTENT_VARIANTS),
}

export default ContentBox
