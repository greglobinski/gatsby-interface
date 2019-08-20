import React from "react"

import { storiesOf } from "@storybook/react"
import { MdEdit, MdArrowForward, MdAdd, MdDelete } from "react-icons/md"

import { StoryUtils } from "../../../utils/storybook"
import SpacePlaceholder from "../../../utils/storybook/SpacePlaceholder"
import SettingsBlock from "./SettingsBlock"

storiesOf(`core/SettingsBlock`, module)
  .add(`default usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsBlock>
          <SettingsBlock.Header>
            <SettingsBlock.Title>
              Automated Integrations
              <SettingsBlock.Doclink to="/" />
            </SettingsBlock.Title>
          </SettingsBlock.Header>
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
        <SettingsBlock>
          <SettingsBlock.Header>
            <SettingsBlock.Title>
              Automated Integrations <SettingsBlock.Doclink to="/" />
            </SettingsBlock.Title>
            <SettingsBlock.Description>
              Gatsby Cloud can automatically deploy each site build to one or
              more CDN hosts of your choice—just connect and you are good to go!
            </SettingsBlock.Description>
          </SettingsBlock.Header>
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
        <SettingsBlock>
          <SettingsBlock.Header>
            <SettingsBlock.Title>
              Deploy Targets <SettingsBlock.Doclink to="/" />
            </SettingsBlock.Title>
            <SettingsBlock.Description>
              Gatsby Cloud can automatically deploy each site build to one or
              more CDN hosts of your choice—just connect and you are good to go!
            </SettingsBlock.Description>
            <SettingsBlock.Description>
              CDN hosts of your choice—just connect and you are good to go!
            </SettingsBlock.Description>
          </SettingsBlock.Header>
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
  .add(`shortcut usage`, () => (
    <StoryUtils.Container secondaryBg={true}>
      <StoryUtils.Stack width={`35em`}>
        <SettingsBlock
          title="Automated Integrations"
          doclink="/"
          description=" Gatsby Cloud can automatically deploy each site build to one or more
              CDN hosts of your choice—just connect and you are good to go!"
        >
          <SettingsBlock.Content>
            <StoryUtils.Content hint="This is the Block's content section" />
          </SettingsBlock.Content>
        </SettingsBlock>
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
