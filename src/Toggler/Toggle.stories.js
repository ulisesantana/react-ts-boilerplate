import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from "@storybook/addon-info"
import {specs} from "storybook-addon-specifications"
import tests from "./Toggle.test"
// import {action} from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs/react';


import Toggle from "./index";

const changeHandlerMock = (e) => {Promise.resolve(true)};

storiesOf('Toggle', module)
	.add(
		'Component',
		withInfo({
			inline: true
		})(
			() => {
				specs(() => tests)
				return <Toggle checked={boolean('checked', true)} changeHandler={changeHandlerMock}/>;
			}),
	);