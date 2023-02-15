import React, { useState } from "react";
import { SelectFilter, SelectOptions } from "../Data/Types";
import { RiArrowDropDownLine } from "react-icons/ri";
const SelectInput = (props: {
	Options: SelectOptions;
	initialstate: string;
	extraclass: string;
}) => {
	const { options } = props.Options;

	const [selectedInput, setSelectedInput] = useState(props.initialstate);
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div
				className={`relative`}
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
			>
				<div
					onClick={() => setOpen(!open)}
					className={`flex items-center justify-between bg-transparent border ${props.extraclass}`}
				>
					<div>{selectedInput}</div>

					<RiArrowDropDownLine className="w-5 h-5" />
				</div>
				<div
					className={`${
						open ? "block" : "hidden"
					} w-full border absolute bg-primary cursor-pointer z-20`}
				>
					{options.map((item, index) => (
						<option
							className="hover:bg-[grey] px-2"
							key={index}
							value={item}
							onClick={(e) => {
								setSelectedInput((e.target as HTMLInputElement).value);
								setOpen(false);
								// {item.getCategory && item.getCategory()};
							}}
						>
							{item}
						</option>
					))}
				</div>
			</div>
		</div>
	);
};

export default SelectInput;

{
	/* <select
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
</select> */
}
