import React from 'react'

import { storiesOf } from '@storybook/react'

import MyComponent from './MyComponent'

storiesOf('Test', module)
  .add(
    'with text',
    () => (
      <MyComponent
        title="My Super Component"
      >
        Its Work!
      </MyComponent>
    )
  )
