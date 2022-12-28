import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
	return (
		<>
			<Link to="/" className="absolute top-2 left-5 text-Hlight text-[1.2rem]">
				Faloni
			</Link>
			<div className="flex absolute top-3 right-5">
				<Link to="/" className="flex items-baseline gap-1 mx-2 ">
					<FaHome />
					<p className="leading-[0px]">Home</p>
				</Link>
				<Link to="/cart" className="flex items-baseline gap-1 mx-2">
					<FaShoppingCart />
					<p className="leading-[0px]">Back to cart</p>
				</Link>
			</div>
		</>
	);
};

export default AuthNavBar;
