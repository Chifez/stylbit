import { ThreeDots } from "react-loader-spinner";
import Loader from "../../components/Loader";
import ProductCard from "../../components/ProductCard";
import useProdFetch from "../../hooks/useProdFetch";

const ProductsList = () => {
	const { fetchedProducts, isLoading } = useProdFetch();
	return (
		<>
			<h2 className="text-[3rem] font-semibold uppercase py-2">Top picks</h2>
			{isLoading && (
				<Loader
					children={
						<ThreeDots height="50" width="50" radius="9" color="white" />
					}
					baseStyle={"h-full w-screen bg-primary"}
					textStyle={"text-xl font-bold text-white"}
				/>
			)}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
				{fetchedProducts?.map((products: any) => (
					<ProductCard productItem={products} key={products.id} />
				))}
			</div>
		</>
	);
};

export default ProductsList;
