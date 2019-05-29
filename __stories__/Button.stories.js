import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import {
  BaseButton,
  PrimaryButton,
  SecondaryButton
} from '../src/components/Button';

storiesOf('Button', module)
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
  ));
