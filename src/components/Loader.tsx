import { ReactNode } from "react";

const Loader = (props: {
	children: ReactNode;
	baseStyle?: string;
	textStyle?: string;
}) => {
	return (
		<div className={`flex items-center justify-center ${props.baseStyle}`}>
			<span className="flex flex-row items-center justify-center gap-2">
				<h2 className={props.textStyle}>Loading</h2>
				{props.children}
			</span>
		</div>
	);
};
export default Loader;
