import React from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../Data/itemData";
import { product } from "../../Data/Types";

const ProductsList = () => {
	return (
		<>
			<h2 className="text-[3rem] font-semibold uppercase py-2">Top picks</h2>
			<div className="grid grid-cols-4">
				{products.map((products: product) => (
					<ProductCard productItem={products} key={products.id} />
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
