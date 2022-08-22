import React from "react";
import { Select } from "../Data/Types";

const SelectInput = (props: { Options: Select }) => {
	const { optionId, options } = props.Options;
	return (
		<>
			<select
				name={optionId}
				className="border border-secondary p-1 bg-transparent rounded-sm outline-none capitalize"
			>
				{options.map((option, index) => (
					<option
						key={index}
						value={option}
						disabled={index === 0 ? true : false}
						selected={index === 0 ? true : false}
						hidden={index === 0 ? true : false}
						className="bg-secondary capitalize"
					>
						{option}
					</option>
				))}
			</select>
		</>
	);
};

export default SelectInput;
