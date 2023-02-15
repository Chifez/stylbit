import React from "react";
import Layout from "../../components/Layout";
import ProductFilter from "./ProductFilter";
import ProductsList from "./ProductsList";

const Products = () => {
	return (
		<div className="px-4 md:px-8 bg-primary text-white">
			<Layout>
				<ProductFilter />
				<ProductsList />
			</Layout>
		</div>
	);
};

export default Products;
