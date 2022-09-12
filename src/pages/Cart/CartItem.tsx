import React from "react";
import RoundButton from "../../components/RoundButton";
import { FaTrash } from "react-icons/fa";
import { product } from "../../Data/Types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from "../../app/cartSlice";

interface cartItem {
	id: string;
	image: any;
	name: string;
	desc?: string;
	newprice: number;
	quantity: number;
}

const CartItem = (props: { item: cartItem }) => {
	const { id, image, name, desc, newprice, quantity } = props.item;
	const dispatch = useAppDispatch();
	return (
		<div className="grid grid-cols-3 my-5 place-items-center">
			<div className="flex col-span-1 items-center gap-3">
				<Link to={`/product/preview/${id}`}>
					<img src={image} alt="image1" className="w-16 h-16 object-cover" />
				</Link>
				<span>
					<p>{name}</p>
					<p>{desc}</p>
				</span>
				<FaTrash
					className="fill-[crimson]"
					onClick={() => dispatch(removeItem({ id }))}
				/>
			</div>
			<div className="flex items-center col-span-1">
				<RoundButton
					children="+"
					extraclasses="w-5 h-5"
					onClick={() => dispatch(incrementQuantity({ id, quantity }))}
				/>
				<span className="px-2">{quantity}</span>
				<RoundButton
					children="-"
					extraclasses="w-5 h-5"
					onClick={() => dispatch(decrementQuantity({ id, quantity }))}
				/>
			</div>
			<div className="flex items-center border col-span-1">
				<span className="px-2">${quantity * newprice}</span>
			</div>
		</div>
	);
};

export default CartItem;
