import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

const useProdFetch = () => {
	const db = getFirestore();
	//if a category is passed in then the function takes in an argument and gets the db
	const getProduct = async () => {
		const querySnapshot = await getDocs(collection(db, "products"));
		console.log(querySnapshot.docs.map((doc) => doc.data()));
		return querySnapshot.docs.map((doc) => doc.data());
	};
	const productQuery = useQuery({
		// pass the dependency used as a second key
		queryKey: ["products"],
		queryFn: getProduct,
	});

	const { data: fetchedProducts, isLoading, isError, error } = productQuery;
	return { fetchedProducts, isLoading, isError, error };
};

export default useProdFetch;
