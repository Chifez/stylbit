import React from "react";
import ProductCard from "../../components/ProductCard";
import { TopPicks } from "../../Data/TopPicksData";

const ProductsList = () => {
	return (
		<>
			<h2 className="text-[3rem] font-semibold uppercase py-2">Top picks</h2>
			<div className="grid grid-cols-4">
				{TopPicks.map((TopPick) => (
					<ProductCard productItem={TopPick} key={TopPick.id} />
				))}
				{/* <ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard />
				<ProductCard /> */}
			</div>
		</>
	);
};

export default ProductsList;
