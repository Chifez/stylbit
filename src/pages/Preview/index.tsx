import PreviewPage from "./PreviewPage";
// import { products } from "../../Data/itemData";
// import { product } from "../../Data/Types";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { DocumentData } from "firebase/firestore";
import useProdFetchId from "../../hooks/useProdFetchId";

const Preview = () => {
	const { id } = useParams();
	const { fetchedProducts: products } = useProdFetchId(id);

	return (
		<div className="px-4 bg-primary text-secondary">
			<Layout>
				<div>
					{products!
						.filter((preview: DocumentData[] | any) => preview.id === id)
						.map((products: DocumentData | any) => (
							<PreviewPage products={products} key={products.id} />
						))}
				</div>
			</Layout>
		</div>
	);
};

export default Preview;
