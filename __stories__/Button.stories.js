import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MdArrowForward } from 'react-icons/md';

import {
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  ButtonSkeleton,
  CancelButton,
  PrimaryDeleteButton,
  SecondaryDeleteButton,
  SuccessButton,
  TextButton
} from '../src/components/Button';

storiesOf('Button', module)
  .add('ButtonSkeleton', () => (
    <ButtonSkeleton onClick={action('clicked')}>ButtonSkeleton</ButtonSkeleton>
  ))
  .add('BaseButton', () => (
    <BaseButton onClick={action('clicked')}>BaseButton</BaseButton>
  ))
  .add('PrimaryButton', () => (
    <PrimaryButton onClick={action('clicked')}>PrimaryButton</PrimaryButton>
  ))
  .add('SecondaryButton', () => (
    <SecondaryButton onClick={action('clicked')}>
      SecondaryButton
    </SecondaryButton>
  ))
  .add('CancelButton', () => (
    <CancelButton onClick={action('clicked')}>CancelButton</CancelButton>
  ))
  .add('PrimaryDeleteButton', () => (
    <PrimaryDeleteButton onClick={action('clicked')}>
      PrimaryDeleteButton
    </PrimaryDeleteButton>
  ))
  .add('SecondaryDeleteButton', () => (
    <SecondaryDeleteButton onClick={action('clicked')}>
      SecondaryDeleteButton
    </SecondaryDeleteButton>
  ))
  .add('SuccessButton', () => (
    <SuccessButton onClick={action('clicked')}>SuccessButton</SuccessButton>
  ))
  .add('TextButton', () => (
    <TextButton onClick={action('clicked')}>TextButton</TextButton>
  ));

storiesOf('Button/in use', module)
  .add('Button as an external link', () => (
    <PrimaryButton href="https://gatsbyjs.com" onClick={action('clicked')}>
      Button as &lt;a&gt; tag
    </PrimaryButton>
  ))
  .add('Button with icon', () => (
    <PrimaryButton onClick={action('clicked')}>
      ButtonWithIcon <MdArrowForward />
    </PrimaryButton>
  ));
