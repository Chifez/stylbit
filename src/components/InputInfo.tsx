import React from "react";

const InputForm = (props: {
	label?: string;
	type?: string;
	placeholder?: string;
	className?: string;
}) => {
	return (
		<>
			{props.label && (
				<label htmlFor={props.label} className="capitalize">
					{props.label}
				</label>
			)}
			<input
				type={props.type}
				placeholder={props.placeholder}
				className={props.className}
			/>
		</>
	);
};

export default InputForm;
