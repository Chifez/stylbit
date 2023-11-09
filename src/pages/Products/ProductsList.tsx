import { ThreeDots } from 'react-loader-spinner';
import Loader from '../../components/Loader';
import ProductCard from '../../components/ProductCard';
import { useAppSelector } from '../../app/hooks';

const ProductsList = () => {
  const products = useAppSelector((state) => state?.productReducer.products);
  const loading = useAppSelector((state) => state?.productReducer.loading);
  return (
    <>
      <h2 className="text-[3rem] font-semibold uppercase py-2">Top picks</h2>
      {products?.length === 0 ? (
        <Loader
          children={
            <ThreeDots height="50" width="50" radius="9" color="white" />
          }
          baseStyle={'h-full w-screen bg-primary'}
          textStyle={'text-xl font-bold text-white'}
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {products?.map((products: any) => (
            <ProductCard productItem={products} key={products.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default ProductsList;
