import React, { ReactNode } from "react";

const RoundButton = (props: {
	extraclasses?: any;
	children: string | number | ReactNode;
	onClick?: () => void;
}) => {
	return (
		<div
			onClick={props.onClick}
			className={`${props.extraclasses} bg-white text-black text-sm text-center mx-2 rounded-full cursor-pointer`}
		>
			{props.children}
		</div>
	);
};
export default RoundButton;
