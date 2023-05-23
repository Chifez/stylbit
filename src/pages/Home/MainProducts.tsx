import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/ProductCard";
import useProdFetchId from "../../hooks/useProdFetchId";
import Loader from "../../components/Loader";
import { ThreeDots } from "react-loader-spinner";

const MainProducts = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
          swipeToSlide: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          initialSlide: 0,
          slidesToScroll: 1,
          touchThreshold: 10,
          swipeToSlide: true,
          arrows: false,
        },
      },
    ],
  };

  const {
    fetchedProducts: products,
    isLoading,
    refetch,
    isError,
  } = useProdFetchId("toppick", true);
  return (
    <div>
      <div className="flex justify-center items-center gap-2 w-full">
        <h2 className="uppercase text-[2rem] md:text-[4rem] font-bold tracking-wider">
          Top sales
        </h2>
        <span className="flex-1 h-[0.5px] md:h-[1px] bg-secondary"></span>
      </div>

      <Slider {...settings} className="pl-1 md:pl-0">
        {isLoading && (
          <Loader
            children={
              <ThreeDots height="50" width="50" radius="9" color="white" />
            }
            baseStyle={"h-[27rem] w-full bg-primary"}
            textStyle={"text-xl font-bold text-white"}
          />
        )}
        {isError && (
          <>
            <h2>Somethig went wrong</h2>
            <p onClick={() => refetch()}>try again</p>
          </>
        )}
        {products?.map(
          (productItem) => (
            // productItem.toppick && (
            <ProductCard key={productItem.id} productItem={productItem} />
          )
          // )
        )}
      </Slider>
    </div>
  );
};

export default MainProducts;
