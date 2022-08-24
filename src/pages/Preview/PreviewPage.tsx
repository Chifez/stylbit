import React from "react";
import RoundButton from "../../components/RoundButton";
import { product } from "../../Data/Types";

const previewPage = (props: { products: product }) => {
	const { image, name, oldprice, newprice, desc } = props.products;
	return (
		<div className="grid grid-flow-col p-5">
			<img
				src={image}
				alt="imageitem"
				className="w-[25rem] h-[30rem] object-cover border border-[blue]"
			/>
			<div className="col-span-3 border border-[red]">
				<h2 className="font-semibold text-[1.2rem] capitalize">{name}</h2>
				<span className="flex items-center text-[0.8rem]">
					<p className="text-secondary">${oldprice}</p>
					<div className="w-5 h-[1px] bg-primary mx-1"></div>
					<p>${newprice}</p>
				</span>
				<p>{desc}</p>
				<div className="flex items-center">
					<RoundButton children="+" extraclasses="w-5 h-5" />
					<span className="px-2">2</span>
					<RoundButton children="-" extraclasses="w-5 h-5" />
				</div>
			</div>
		</div>
	);
};

export default previewPage;
