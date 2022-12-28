import { useState } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
const InputForm = (props: {
	label?: string;
	type?: string;
	placeholder?: string;
	className?: string;
}) => {
	const [visible, setVisible] = useState(false);
	const toggle = () => {
		setVisible(!visible);
	};
	return (
		<div className="relative w-full">
			<div className="px-2 flex items-center justify-between border border-secondary">
				<input
					type={!visible ? props.type : "text"}
					id={props.label}
					name={props.label}
					placeholder={props.placeholder}
					className={`${props.className} outline-none peer placeholder-transparent`}
				/>
				{props.type === "password" && (
					<span onClick={toggle}>
						{visible ? (
							<MdOutlineVisibilityOff className="fill-white" />
						) : (
							<MdOutlineVisibility className="fill-white" />
						)}
					</span>
				)}
				{props.label && (
					<label
						htmlFor={props.label}
						id={props.label}
						className="absolute capitalize text-sm -top-3 bg-primary px-[1px] mt-[2.5px] peer-placeholder-shown:text-capitalize peer-placeholder-shown:text-base peer-placeholder-shown:top-[6px] peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-[lightgrey] opacity-60 transition-all"
					>
						{props.label}
					</label>
				)}
			</div>
		</div>
	);
};

export default InputForm;
