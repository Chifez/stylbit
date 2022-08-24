import React from "react";
import PreviewPage from "./PreviewPage";
import { products } from "../../Data/itemData";
import { product } from "../../Data/Types";
import { useParams } from "react-router-dom";

const Preview = () => {
	const { id } = useParams();
	return (
		<>
			{products
				.filter((preview) => preview.id === id)
				.map((products) => (
					<PreviewPage products={products} key={products.id} />
				))}
		</>
	);
};

export default Preview;
