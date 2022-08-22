import React from "react";
import { FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const AuthNavBar = () => {
	return (
		<>
			<Link to="/" className="absolute top-2 left-5 text-Hlight text-[1.2rem]">
				Faloni
			</Link>
			<div className=" flex absolute top-2 right-5">
				<Link to="/" className="flex items-center mx-2">
					{" "}
					<FaHome /> home
				</Link>
				<Link to="/cart" className="flex items-center mx-2">
					<FaShoppingCart />
					back to cart
				</Link>
			</div>
		</>
	);
};

export default AuthNavBar;
