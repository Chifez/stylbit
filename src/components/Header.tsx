import React from "react";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";
import { useAppSelector } from "../app/hooks";

const Header = () => {
	const cartQuantity = useAppSelector((state) => state.reducer.cart.length);
	return (
		<div className="flex justify-between items-baseline text-Hlight text-white py-3 px-1 md:px-10 uppercase">
			<Link to="/">
				{" "}
				<p>Faloni</p>
			</Link>
			<div className="flex text-sm gap-4 items-center text-center">
				<Link to="/cart">
					<div className="flex text-center gap-2 items-center  mx-1 md:mx-2">
						<p>cart</p>
						<RoundButton
							children={cartQuantity}
							extraclasses="w-5 h-5 py-[1px] mb-[4px]"
						/>
					</div>
				</Link>
				<a href="/" className="mx-1 md:mx-2">
					<p>Menu</p>
				</a>
			</div>
		</div>
	);
};

export default Header;
