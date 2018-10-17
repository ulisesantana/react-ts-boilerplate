import React, { SFC, MouseEvent } from 'react';
import './Toggle.css'

export interface ToggleProps {
	/**
	 * The state of the Toggle
	 */
	checked: boolean,
	/**
	 * Callback when checked state changes
	 */
	changeHandler: (event: MouseEvent<HTMLInputElement>) => Promise<boolean>
}

export const Toggle: SFC<ToggleProps> = ({ checked, changeHandler }) => {
	const handleOnChange = async (e: MouseEvent<HTMLInputElement>) => {
		setTimeout(async () => {
			const isUpdated = await changeHandler(e);
			if (!isUpdated) {
				checked = !checked;
			}
		}, 400);
	}

	return (
		<label className="Toggle">
			<input 
				type="checkbox" 
				checked={checked} 
				onClick={handleOnChange} 
			/>
			<span className="slider" />
		</label>
	);
}

export default Toggle;