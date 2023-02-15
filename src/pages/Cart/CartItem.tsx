import React from "react";
import RoundButton from "../../components/RoundButton";
import { FaTrash } from "react-icons/fa";
import { HiMinus, HiPlus } from "react-icons/hi";
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
		<div className="grid grid-rows-2 md:grid-cols-3 my-5 place-items-center shadow-lg rounded-sm p-2">
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
			<div className="flex justify-between w-full md:hidden">
				<CartPricing
					quantity={quantity}
					id={id}
					newprice={newprice}
					dispatch={dispatch}
					extraclass="flex"
				/>
			</div>
			<CartPricing
				quantity={quantity}
				id={id}
				newprice={newprice}
				dispatch={dispatch}
				extraclass="hidden md:flex"
			/>
		</div>
	);
};

const CartPricing = ({
	quantity,
	id,
	newprice,
	dispatch,
	extraclass,
}: {
	quantity: number;
	id: string;
	newprice: number;
	dispatch: (e: any) => void;
	extraclass: string;
}) => {
	return (
		<>
			<div className={`${extraclass} items-center col-span-1`}>
				<RoundButton
					children={<HiPlus />}
					extraclasses="w-5 h-5"
					onClick={() => dispatch(incrementQuantity({ id, quantity }))}
				/>
				<span className="px-2">{quantity}</span>
				<RoundButton
					children={<HiMinus />}
					extraclasses="w-5 h-5"
					onClick={() => dispatch(decrementQuantity({ id, quantity }))}
				/>
			</div>
			<div className={`${extraclass} items-center border col-span-1`}>
				<span className="px-2">${quantity * newprice}</span>
			</div>
		</>
	);
};

export default CartItem;
