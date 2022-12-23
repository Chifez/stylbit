import React, { ReactNode } from "react";

const RoundButton = (props: {
	extraclasses?: any;
	children: string | number | ReactNode;
	onClick?: () => void;
}) => {
	return (
		<div
			onClick={props.onClick}
			className={` bg-white text-black text-sm text-center rounded-full cursor-pointer ${props.extraclasses}`}
		>
			<div>{props.children}</div>
		</div>
	);
};
export default RoundButton;
