import { collection, getDocs, query, where } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { useQuery } from "@tanstack/react-query";

const useProdFetchId = (idType: string, id: string | boolean | undefined) => {
  const db = getFirestore();
  const getProduct = async (id: string | boolean | undefined) => {
    const q = query(collection(db, "products"), where(idType, "==", id));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs.map((doc) => doc.data()));
    return querySnapshot.docs.map((doc) => doc.data());
  };
  const productQuery = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProduct(id),
  });

  const {
    data: fetchedProducts,
    refetch,
    isLoading,
    isError,
    error,
  } = productQuery;
  return { fetchedProducts, isLoading, refetch, isError, error };
};

export default useProdFetchId;
