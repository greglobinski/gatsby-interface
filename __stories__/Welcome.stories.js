import React, { Fragment } from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Welcome from '../src/utils/storybook/Welcome';

storiesOf('Welcome', module).add('to Gatsby Inteface', () => <Welcome />);
