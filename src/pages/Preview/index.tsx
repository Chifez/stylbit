import { useEffect } from "react";
import PreviewPage from "./PreviewPage";
import { products } from "../../Data/itemData";
import { product } from "../../Data/Types";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";

const Preview = () => {
	const { id } = useParams();

	return (
		<div className="px-4 bg-primary text-secondary">
			<Layout>
				<div>
					{products
						.filter((preview) => preview.id === id)
						.map((products) => (
							<PreviewPage products={products} key={products.id} />
						))}
				</div>
			</Layout>
		</div>
	);
};

export default Preview;
