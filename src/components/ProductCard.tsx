import React from "react";
import RoundButton from "./RoundButton";
import productImage from "../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import { product } from "../Data/Types";

const ProductCard = (props: { productItem: product }) => {
	const { image, name, newprice, oldprice } = props.productItem;
	return (
		<div className="max-h-max max-w-max py-5 px-3">
			<div>
				<img
					src={image}
					alt="product"
					className="w-[25rem] h-[30rem] object-cover"
				/>
			</div>
			<div>
				<p className="uppercase">{name}</p>
				<div className="flex justify-between">
					<span className="flex justify-around items-center text-[0.8rem]">
						<p className="text-secondary">${oldprice}</p>
						<div className="w-5 h-[1px] bg-white mx-1"></div>
						<p>${newprice}</p>
					</span>
					<RoundButton children="+" extraclasses="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
