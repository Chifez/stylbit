import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../../components/ProductCard";
import { products } from "../../Data/itemData";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { product } from "../../Data/Types";

const MainProducts = () => {
	const settings = {
		dots: false,
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		swipeToSlide: true,
		// arrows: false,
		// slidesToScroll: 1,
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
	return (
		<div>
			<h2 className="text-[3rem] md:text-[5rem] uppercase my-3 ">Top sales</h2>

			<Slider {...settings} className="pl-1 md:pl-0">
				{products.map(
					(productItem) =>
						productItem.toppick && (
							<ProductCard key={productItem.id} productItem={productItem} />
						)
				)}
			</Slider>
		</div>
		// </div>
	);
};

export default MainProducts;
