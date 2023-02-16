import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useProdFetchId = (id: string | undefined) => {
	const queryclient = useQueryClient();

	const db = getFirestore();
	const getProduct = async () => {
		const q = query(collection(db, "products"), where("id", "==", id));
		const querySnapshot = await getDocs(q);
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

export default useProdFetchId;
