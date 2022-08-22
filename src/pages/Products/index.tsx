import React from "react";
import Layout from "../../components/Layout";
import ProductFilter from "./ProductFilter";
import ProductsList from "./ProductsList";

const Products = () => {
	return (
		<Layout>
			<div className="px-5">
				<ProductFilter />
				<ProductsList />
			</div>
		</Layout>
	);
};

export default Products;
