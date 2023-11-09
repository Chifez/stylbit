import { collection, getDocs, query, where } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { setLoading, setProductList } from '../app/productSlice';
import { useAppDispatch } from '../app/hooks';

const useProdFetchId = (idType: string, id: string | boolean | undefined) => {
  const db = getFirestore();
  const dispatch = useAppDispatch();

  const getProduct = async (id: string | boolean | undefined) => {
    const q = query(collection(db, 'products'), where(idType, '==', id));
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot.docs.map((doc) => doc.data()));
    const fetchCategory = querySnapshot.docs.map((doc) => doc.data());
    dispatch(setProductList(fetchCategory));
    return fetchCategory;
  };
  const productQuery = useQuery({
    queryKey: ['products', id],
    queryFn: () => getProduct(id),
  });

  const {
    data: fetchedProducts,
    refetch,
    isLoading,
    isError,
    error,
  } = productQuery;
  dispatch(setLoading(isLoading));
  return { fetchedProducts, isLoading, refetch, isError, error };
};

export default useProdFetchId;
