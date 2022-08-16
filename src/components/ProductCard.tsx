import React from "react";
import RoundButton from "./RoundButton";
import productImage from "../assets/dom-hill-nimElTcTNyY-unsplash.jpg";

const ProductCard = () => {
	return (
		<div className="max-h-max max-w-max py-5 px-3">
			<div>
				<img src={productImage} alt="product" />
			</div>
			<div>
				<p className="uppercase">item name</p>
				<div className="flex justify-between">
					<span className="flex justify-around items-center text-[0.8rem]">
						<p className="text-secondary">$20.00</p>
						<div className="w-5 h-[1px] bg-white mx-1"></div>
						<p>$34.00</p>
					</span>
					<RoundButton children="+" extraclasses="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
