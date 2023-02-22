import PreviewPage from "./PreviewPage";
// import { products } from "../../Data/itemData";
// import { product } from "../../Data/Types";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { DocumentData } from "firebase/firestore";
import useProdFetchId from "../../hooks/useProdFetchId";
import Loader from "../../components/Loader";
import { ThreeDots } from "react-loader-spinner";

const Preview = () => {
	const { id } = useParams();
	const { fetchedProducts: products, isLoading } = useProdFetchId("id", id);

	return (
		<div className="px-4 bg-primary text-secondary">
			<Layout>
				<div>
					{isLoading && (
						<Loader
							children={
								<ThreeDots height="50" width="50" radius="9" color="white" />
							}
							baseStyle={"h-[27rem] w-full bg-primary"}
							textStyle={"text-xl font-bold text-white"}
						/>
					)}
					{products
						?.filter((preview: DocumentData[] | any) => preview.id === id)
						.map((products: DocumentData | any) => (
							<PreviewPage products={products} key={products.id} />
						))}
				</div>
			</Layout>
		</div>
	);
};

export default Preview;
