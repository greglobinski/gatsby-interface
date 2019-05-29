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

// automatically import all files ending in *.stories.js
const req = require.context('../__stories__', true, /\.stories\.js$/);

// put welcome screen at the top of the list so it's the first one displayed
require('../__stories__/Welcome.stories');

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
