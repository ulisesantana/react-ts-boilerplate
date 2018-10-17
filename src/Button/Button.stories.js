import React from 'react';
import tests from "./Button.test"
import { storiesOf } from '@storybook/react';
import { Button } from './Button';
import { text, boolean } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import { specs } from "storybook-addon-specifications"

const wInfoStyle = {
  header: {
    h1: {
      marginRight: '20px',
      fontSize: '25px',
      display: 'inline'
    },
    body: {
      paddingTop: 0,
      paddingBottom: 0
    },
    h2: {
      display: 'inline',
      color: '#999'
    }
  },
  infoBody: {
    backgroundColor: '#eee',
    padding: '0px 5px',
    lineHeight: '2'
  }
};

const wInfo = (text) => withInfo({
  inline: true,
  source: false,
  styles: wInfoStyle,
  text: text
});

storiesOf('Components/Button', module).add(
  'basic Button',
  wInfo(`

  ### Notes

  This is a button

  ### Usage
  ~~~js
  <Button
    label={'Enroll'}
    disabled={false}
    onClick={() => alert('hello there')}
  />
  ~~~`
  )(() => {
    specs(() => tests)
    return (
      <Button
        label={text('label', 'Enroll')}
        disabled={boolean('disabled', false)}
        onClick={() => alert('hello there')}
      />
    )
  }
  ))