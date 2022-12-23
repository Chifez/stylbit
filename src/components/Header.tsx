import React from "react";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";
import { useAppSelector } from "../app/hooks";

const Header = () => {
	const cartQuantity = useAppSelector((state) => state.reducer.cart.length);
	return (
		<div className="flex justify-between items-center text-Hlight text-white py-5 px-1 md:px-10 uppercase">
			<Link to="/">Faloni</Link>
			<div className="flex text-sm items-center text-center">
				<Link to="/cart" className="flex text-center items-center mx-1 md:mx-2">
					<p>cart</p>

					<RoundButton
						children={cartQuantity}
						extraclasses="w-5 h-5 py-[2px]"
					/>
				</Link>
				<a href="/" className="mx-1 md:mx-2">
					Menu
				</a>
			</div>
		</div>
	);
};

export default Header;
