import React from "react";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";
import { useAppSelector } from "../app/hooks";

const Header = () => {
	const cartQuantity = useAppSelector((state) => state.reducer.cart.length);
	return (
		<div className="flex justify-between items-center text-Hlight text-white p-5 px-10 uppercase">
			<Link to="/">Faloni</Link>
			<div className="flex text-sm items-center">
				<Link to="/cart" className="flex mx-2">
					cart <RoundButton children={cartQuantity} extraclasses="w-5 h-5" />{" "}
				</Link>
				<a href="/" className="mx-2">
					Menu
				</a>
			</div>
		</div>
	);
};

export default Header;
