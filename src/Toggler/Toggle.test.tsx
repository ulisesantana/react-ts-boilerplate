import React, {MouseEvent} from "react";
import Toggle from "./index";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import expect from "expect"

configure({adapter: new Adapter()})

export default describe('Toggle', () => {
	const changeHandlerMock = (e: MouseEvent<HTMLInputElement>) => Promise.resolve(true);
	const toggle = shallow(
		<Toggle checked={true} changeHandler={changeHandlerMock} />
	);
	
	it("Component state is connected to checkbox state", () => {
		const checkbox = toggle.find('input');
		expect(checkbox.props().checked).toEqual(true);
	});
	
	it("Triggers handler on checkbox change", () => {
		const changeHandler = expect.createSpy();
		toggle.setProps({changeHandler})
		toggle.find('input').simulate('change')
		expect(changeHandler).toHaveBeenCalled();
		expect(toggle.find('input').props().checked).toEqual(false);
		expect(toggle.state()).toEqual({enabled: false});
	});
})

