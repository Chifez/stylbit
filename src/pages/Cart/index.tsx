import React from "react";
import Layout from "../../components/Layout";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { product } from "../../Data/Types";
import { useAppSelector } from "../../app/hooks";

const Cart = () => {
	const products = useAppSelector((state) => state?.reducer.cart);
	const getTotal = () => {
		let totalQuantity = 0;
		let totalPrice = 0;
		products.forEach((item) => {
			totalQuantity += item.quantity;
			totalPrice += item.newprice * item.quantity;
		});
		return { totalPrice, totalQuantity };
	};
	return (
		<Layout>
			<div className="border-b border-secondary pb-2">
				<div className="grid grid-cols-3 place-items-center mb-5 uppercase font-semibold">
					<h2>product</h2>
					<h2>quantity</h2>
					<h2>price</h2>
				</div>
				<div>
					{products.length === 0 && <p>EMPTY CART</p>}
					{products?.map((item) => (
						<CartItem item={item} key={item.id} />
					))}
				</div>
				<div className="grid grid-cols-3 place-items-center">
					<div />
					<div />
					<span className="flex justify-start items-center mt-5 border-b border-secondary px-4">
						<p className="px-2">Total:</p>
						<span className="text-center">${getTotal().totalPrice}</span>
					</span>
				</div>
				<span className="flex justify-center py-5">
					<Link to="/signin">
						<button className="text-center font-semibold border border-transparent rounded-md px-10 p-1 bg-[green] hover:bg-transparent hover:border-inherit">
							Checkout
						</button>
					</Link>
				</span>
			</div>
		</Layout>
	);
};

export default Cart;
