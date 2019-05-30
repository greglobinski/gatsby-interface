import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs';

// add decorators
addDecorator(
  withInfo({
    inline: false,
    header: true
  })
);
addDecorator(withKnobs);

const Space = storyFn => (
  <div
    style={{
      margin: '30px 0',
      display: 'flex',
      minHeight: '68vh',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '10vh 20vh'
    }}
  >
    {storyFn()}
  </div>
);
addDecorator(Space);

const req = require.context('../__stories__', true, /\.stories\.js$/);

require('../__stories__/Welcome.stories');

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
