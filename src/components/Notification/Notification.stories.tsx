/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"
import { Notification, NotificationTone, NotificationProps } from "."
import { StoryUtils } from "../../utils/storybook"
import { Button } from "../Button"

const NOTIFICATION_TONES: NotificationTone[] = [
  `BRAND`,
  `SUCCESS`,
  `DANGER`,
  `WARNING`,
  `NEUTRAL`,
]
const tonesOptions = NOTIFICATION_TONES.reduce(
  (memo, tone) => ({
    ...memo,
    [tone]: tone,
  }),
  {}
)

function ControlledNotification(props: NotificationProps) {
  const [isOpened, setIsOpened] = React.useState<boolean>(true)

  return isOpened ? (
    <Notification
      {...props}
      showDismissButton
      onDismissButtonClick={() => setIsOpened(false)}
    />
  ) : (
    <Button onClick={() => setIsOpened(true)}>Show notification</Button>
  )
}

storiesOf(`Notification`, module)
  .add(`default`, () => (
    <StoryUtils.Container>
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          width: `500px`,
          "& > button": { margin: `20px` },
        }}
      >
        <Notification
          tone={radios(`tone`, tonesOptions, `BRAND`)}
          content={`Notification variant 'PRIMARY'`}
          linkUrl="/"
          linkText="Link"
        />
        <Notification
          css={{ marginTop: `1rem` }}
          as="section"
          variant="SECONDARY"
          tone={radios(`tone`, tonesOptions, `BRAND`)}
          content={`Notification variant 'SECONDARY'`}
        />
      </div>
    </StoryUtils.Container>
  ))
  .add(`dismissable`, () => (
    <StoryUtils.Container>
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          width: `500px`,
          "& > button": { margin: `20px` },
        }}
      >
        <ControlledNotification
          css={{ marginTop: `1rem` }}
          tone={radios(`tone`, tonesOptions, `BRAND`)}
          content={`Notification variant 'PRIMARY' with close`}
        />
      </div>
    </StoryUtils.Container>
  ))
