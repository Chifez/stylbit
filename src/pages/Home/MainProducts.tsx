import React from "react";
import ProductCard from "../../components/ProductCard";

const MainProducts = () => {
	return (
		<div>
			<h2 className="text-[5rem] uppercase my-3">Top sales</h2>
			<div className="grid grid-flow-col">
				<ProductCard />
				<ProductCard />
				<ProductCard />
			</div>
		</div>
	);
};

export default MainProducts;
