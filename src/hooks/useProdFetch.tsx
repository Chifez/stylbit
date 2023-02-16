import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useProdFetch = () => {
	const queryclient = useQueryClient();

	const db = getFirestore();
	const getProduct = async () => {
		const querySnapshot = await getDocs(collection(db, "products"));
		console.log(querySnapshot.docs.map((doc) => doc.data()));
		return querySnapshot.docs.map((doc) => doc.data());
	};
	const productQuery = useQuery({
		queryKey: ["products"],
		queryFn: getProduct,
	});

	const { data: fetchedProducts, isLoading, isError, error } = productQuery;
	return { fetchedProducts, isLoading, isError, error };
};

export default useProdFetch;
