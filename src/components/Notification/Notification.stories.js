/** @jsx jsx */
import { jsx } from "@emotion/core"
import { MdCheck, MdArrowForward } from "react-icons/md"
import { Link } from "gatsby"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { NOTIFICATION_TONES } from "../../utils/options"
import Notification from "./Notification"

storiesOf(`Notification`, module).add(`default`, () => (
  <div
    css={{
      display: `flex`,
      flexDirection: `column`,
      alignItems: `flex-start`,
      width: `500px`,
      "& > button": { margin: `20px` },
    }}
  >
    <Notification tone={radios(`tone`, NOTIFICATION_TONES, `STANDARD`)}>
      <Notification.Content
        tone={radios(`tone`, NOTIFICATION_TONES, `STANDARD`)}
      >
        <MdCheck /> Notification variant 'PRIMARY'
      </Notification.Content>
      <Notification.Link to="/" LinkComponent={Link}>
        Link
        <MdArrowForward />
      </Notification.Link>
    </Notification>
    <Notification
      css={{ marginTop: `1rem` }}
      as="section"
      variant="SECONDARY"
      tone={radios(`tone`, NOTIFICATION_TONES, `STANDARD`)}
    >
      <Notification.Content>
        <MdCheck /> Notification variant 'SECONDARY'
      </Notification.Content>
    </Notification>
  </div>
))
