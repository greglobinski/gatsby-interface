import { configure } from '@storybook/react';

// automatically import all files ending in *.stories.js
const req = require.context('../__stories__', true, /\.stories\.js$/);

// put welcome screen at the top of the list so it's the first one displayed
require('../__stories__/welcome.stories');

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
