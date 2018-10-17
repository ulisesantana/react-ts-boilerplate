import React from "react";
import {Button} from "./Button";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect"

configure({adapter: new Adapter()})

export default describe('Button', () => {
	const noop = () => {};
	const button = shallow(
		<Button disabled={true} onClick={noop} label='Meh'/>
	);

	
	it("Triggers handler on checkbox change", () => {
		const onClick = expect.createSpy();
		button.setProps({onClick})
		button.props().onClick()
		expect(onClick).toHaveBeenCalled();
	});
})

