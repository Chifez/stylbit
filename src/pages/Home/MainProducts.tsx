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
		infinite: true,
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
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div>
			<h2 className="text-[5rem] uppercase my-3 ">Top sales</h2>

			<Slider {...settings}>
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
