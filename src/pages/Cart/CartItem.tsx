import React from "react";
import RoundButton from "../../components/RoundButton";
import { FaTrash } from "react-icons/fa";
// import { image1 } from "../../assets";

const CartItem = () => {
	return (
		<div className="grid grid-cols-3 my-5 place-items-center">
			<div className="flex items-center col-span-1 border border-[#d8bebe]">
				<div className="flex items-center">
					<img src={""} alt="image1" />
					<p>item description and title</p>
				</div>
				<FaTrash className="mx-1" />
			</div>
			<div className="flex items-center col-span-1">
				<RoundButton children="+" extraclasses="w-5 h-5" />
				<span className="px-2">2</span>
				<RoundButton children="-" extraclasses="w-5 h-5" />
			</div>
			<div className="flex items-center ml-5 border col-span-1">
				<span className="px-2">$220</span>
			</div>
		</div>
	);
};

export default CartItem;
