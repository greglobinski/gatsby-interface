import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  ButtonSkeleton
} from '../src/components/Button';

storiesOf('Button', module)
  .add('ButtonSkeleton', () => (
    <ButtonSkeleton onClick={action('clicked')}>
      Hello ButtonSkeleton
    </ButtonSkeleton>
  ))
  .add('BaseButton', () => (
    <BaseButton onClick={action('clicked')}>Hello BaseButton</BaseButton>
  ))
  .add('PrimaryButton', () => (
    <PrimaryButton onClick={action('clicked')}>
      Hello PrimaryButton
    </PrimaryButton>
  ))
  .add('SecondaryButton', () => (
    <SecondaryButton onClick={action('clicked')}>
      Hello SecondaryButton
    </SecondaryButton>
  ))
  .add('Button as external link', () => (
    <div>
      <SecondaryButton href="https://gatsbyjs.org" onClick={action('clicked')}>
        Go to gatsbyjs.org
      </SecondaryButton>
      <PrimaryButton href="https://gatsbyjs.com" onClick={action('clicked')}>
        Go to gatsbyjs.org
      </PrimaryButton>
    </div>
  ));
