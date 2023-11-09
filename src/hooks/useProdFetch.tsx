// import { collection, getDocs } from 'firebase/firestore';
// import { getFirestore } from 'firebase/firestore';
// import { useQuery } from '@tanstack/react-query';
// import { setProductList } from '../app/productSlice';
// import { useAppDispatch } from '../app/hooks';

// const useProdFetch = () => {
//   const db = getFirestore();
//   const dispatch = useAppDispatch();

//   //if a category is passed in then the function takes in an argument and gets the db
//   const getProduct = async () => {
//     const querySnapshot = await getDocs(collection(db, 'products'));
//     console.log(querySnapshot.docs.map((doc) => doc.data()));
//     return querySnapshot.docs.map((doc) => doc.data());
//   };
//   const productQuery = useQuery({
//     // pass the dependency used as a second key
//     queryKey: ['products'],
//     queryFn: getProduct,
//   });

//   const { data: fetchedProducts, isLoading, isError, error } = productQuery;
//   dispatch(setProductList(fetchedProducts));
//   return { fetchedProducts, isLoading, isError, error };
// };

// export default useProdFetch;

import { collection, getDocs } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { useQuery } from '@tanstack/react-query';
import { setLoading, setProductList } from '../app/productSlice';
import { useAppDispatch } from '../app/hooks';

const useProdFetch = () => {
  const db = getFirestore();
  const dispatch = useAppDispatch();

  const getProduct = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const fetchedProducts = querySnapshot.docs.map((doc) => doc.data());

      // Dispatch the action inside the try block
      dispatch(setProductList(fetchedProducts));

      return fetchedProducts;
    } catch (error) {
      // Handle error if needed
    }
  };

  const productQuery = useQuery({
    queryKey: ['products'],
    queryFn: getProduct,
  });

  const { data: fetchedProducts, isLoading, isError, error } = productQuery;
  dispatch(setLoading(isLoading));
  return { fetchedProducts, isLoading, isError, error };
};

export default useProdFetch;
