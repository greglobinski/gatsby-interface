import React, { useState, useCallback, useMemo } from "react"
import PropTypes from "prop-types"

const BOX_STATUSES = [`OPEN`, `CLOSED`]
const BOX_BEHAVIOURS = [`TOGGLE`, `UNFOLD`]
const CONTENT_VARIANTS = [`PRIMARY`, `SECONDARY`]

const ContentBoxContext = React.createContext()

function ContentBox({
  state = { status: `CLOSED` },
  children,
  as,
  behaviour = `TOGGLE`,
  tone = `STANDARD`,
  ...rest
}) {
  const Component = as || `div`
  const [boxState, setBoxState] = useState({ status: `CLOSED`, ...state })
  const changeContent = useCallback(
    () =>
      setBoxState(oldState => {return {
        ...oldState,
        status: oldState.status === `OPEN` ? `CLOSED` : `OPEN`,
      }}),
    []
  )
  const value = useMemo(() => {
    return { boxState, boxBehaviour: behaviour, changeContent, boxTone: tone }
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
  state: PropTypes.object, // PropTypes.oneOf(BOX_STATES),
}

ContentBox.Content = ({ children, as, variant = `PRIMARY`, ...rest }) => {
  const Component = as || `div`
  const { boxState, boxBehaviour } = ContentBox.useContentBoxContext()
  const componentToReturn = <Component {...rest}>{children}</Component>

  if (boxState.status === `OPEN` && boxBehaviour === `TOGGLE`) {
    if (variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (boxState.status === `OPEN` && boxBehaviour === `UNFOLD`) {
    if (variant === `PRIMARY` || variant === `SECONDARY`) {
      return componentToReturn
    }
  } else if (boxState.status === `CLOSED`) {
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

ContentBox.Button = ({ children, hiddenIf, as = `button`, ...props }) => {
  const Component = as || `button`
  const { boxState, changeContent, boxTone } = ContentBox.useContentBoxContext()

  if (hiddenIf === boxState.status) {
    return null
  }

  return (
    <Component onClick={changeContent} tone={boxTone} {...props}>
      {children}
    </Component>
  )
}

ContentBox.Button.propTypes = {
  children: PropTypes.any.isRequired,
  hiddenIf: PropTypes.oneOf(BOX_STATUSES),
}

ContentBox.useContentBoxContext = () => {
  const context = React.useContext(ContentBoxContext)
  if (!context) {
    throw new Error(
      `ContentBox compound components cannot be rendered outside the ContentBox component`
    )
  }
  return context
}

export default ContentBox
