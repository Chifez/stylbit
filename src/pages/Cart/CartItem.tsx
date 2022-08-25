import React from "react";
import RoundButton from "../../components/RoundButton";
import { FaTrash } from "react-icons/fa";
import { product } from "../../Data/Types";
import { Link } from "react-router-dom";

const CartItem = (props: { item: product }) => {
	return (
		<div className="grid grid-cols-3 my-5 place-items-center">
			<div className="flex col-span-1 items-center gap-3">
				<Link to={`/product/preview/${props.item.id}`}>
					<img
						src={props.item.image}
						alt="image1"
						className="w-16 h-16 object-cover"
					/>
				</Link>
				<span>
					<p>{props.item.name}</p>
					<p>{props.item.desc}</p>
				</span>
				<FaTrash />
			</div>
			<div className="flex items-center col-span-1">
				<RoundButton children="+" extraclasses="w-5 h-5" />
				<span className="px-2">2</span>
				<RoundButton children="-" extraclasses="w-5 h-5" />
			</div>
			<div className="flex items-center border col-span-1">
				<span className="px-2">${props.item.newprice}</span>
			</div>
		</div>
	);
};

export default CartItem;
