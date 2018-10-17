import React from 'react'
import './test-register'

import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs/react'
import { withInfo } from '@storybook/addon-info'

addDecorator((story, context) => withInfo()(story)(context))
addDecorator(withKnobs)
addDecorator((story) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center', padding: '20px 10%' }}>
    {story()}
  </div>
))

setOptions({
  name: 'Your React TS App',
  url: '#'
})

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
