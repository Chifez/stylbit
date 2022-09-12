import React from "react";

const RoundButton = (props: {
	extraclasses?: any;
	children: any;
	onClick?: () => void;
}) => {
	return (
		<div
			onClick={props.onClick}
			className={`${props.extraclasses} bg-white text-black text-sm text-Hlight text-center mx-2 rounded-full`}
		>
			{props.children}
		</div>
	);
};
export default RoundButton;
