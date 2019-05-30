import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { MdArrowForward } from 'react-icons/md';
import { radios, boolean } from '@storybook/addon-knobs';

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

const sizes = {
  S: `S`,
  M: `M`,
  L: `L`,
  XL: `XL`
};

// mock env var for Gatsby Link
global.__PATH_PREFIX__ = '';

storiesOf('Button', module)
  .add('ButtonSkeleton', () => (
    <ButtonSkeleton onClick={action('Button was clicked')}>
      ButtonSkeleton
    </ButtonSkeleton>
  ))
  .add('BaseButton', () => (
    <BaseButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
    >
      BaseButton
    </BaseButton>
  ))
  .add('PrimaryButton', () => (
    <PrimaryButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
      disabled={boolean(`disabled`, false)}
    >
      PrimaryButton
    </PrimaryButton>
  ))
  .add('SecondaryButton', () => (
    <SecondaryButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
      disabled={boolean(`disabled`, false)}
    >
      SecondaryButton
    </SecondaryButton>
  ))
  .add('CancelButton', () => (
    <CancelButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
    >
      CancelButton
    </CancelButton>
  ))
  .add('PrimaryDeleteButton', () => (
    <PrimaryDeleteButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
      disabled={boolean(`disabled`, false)}
    >
      PrimaryDeleteButton
    </PrimaryDeleteButton>
  ))
  .add('SecondaryDeleteButton', () => (
    <SecondaryDeleteButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
      disabled={boolean(`disabled`, false)}
    >
      SecondaryDeleteButton
    </SecondaryDeleteButton>
  ))
  .add('SuccessButton', () => (
    <SuccessButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
      disabled={boolean(`disabled`, false)}
    >
      SuccessButton
    </SuccessButton>
  ))
  .add('TextButton', () => (
    <TextButton
      onClick={action('Button was clicked')}
      size={radios(`size`, sizes, `L`)}
    >
      TextButton
    </TextButton>
  ));

storiesOf('Button/in use', module)
  .add('Button as an external link', () => (
    <PrimaryButton
      href="https://gatsbyjs.com"
      onClick={action('Button was clicked')}
    >
      Button as &lt;a&gt; tag
    </PrimaryButton>
  ))
  .add('Button as a Gatsby Link', () => (
    <PrimaryButton to="/" onClick={action('Button was clicked')}>
      Button as &lt;Link&gt;
    </PrimaryButton>
  ))
  .add('Button with icon', () => (
    <PrimaryButton onClick={action('Button was clicked')}>
      ButtonWithIcon <MdArrowForward />
    </PrimaryButton>
  ))
  .add('Button in loading state', () => (
    <PrimaryButton
      onClick={action('Button was clicked')}
      loading={boolean(`loading`, true)}
    >
      Button
    </PrimaryButton>
  ));
