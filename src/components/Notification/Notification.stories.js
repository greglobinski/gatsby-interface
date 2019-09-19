/** @jsx jsx */
import { jsx } from "@emotion/core"
import { MdCheck } from "react-icons/md"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { NOTIFICATION_TONES } from "../../utils/options"
import Notification from "./Notification"
import { StoryUtils } from "../../utils/storybook"

storiesOf(`Notification`, module).add(`default`, () => (
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
        tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
        icon={MdCheck}
        content={`Notification variant 'PRIMARY'`}
        linkUrl="/"
        linkText="Link"
      />
      <Notification
        css={{ marginTop: `1rem` }}
        tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
        icon={MdCheck}
        content={`Notification variant 'PRIMARY' with close`}
        closeNotificationButton
      />
      <Notification
        css={{ marginTop: `1rem` }}
        as="section"
        variant="SECONDARY"
        tone={radios(`tone`, NOTIFICATION_TONES, `BRAND`)}
        icon={MdCheck}
        content={`Notification variant 'SECONDARY'`}
      />
    </div>
  </StoryUtils.Container>
))
