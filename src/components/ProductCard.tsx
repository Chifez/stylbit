import RoundButton from "./RoundButton";
import { product } from "../Data/Types";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../app/cartSlice";
import { motion, transform } from "framer-motion";

const ProductCard = (props: { productItem: product }) => {
	const { id, image, name, newprice, oldprice, desc } = props.productItem;

	const dispatch = useAppDispatch();

	// const bounce = () => {
	// 	return (

	// 		const tranformer = transform(0,[
	// 			"scale3d(1,1,1)",
	// 			"scale3d(0.6,1.1,1)",
	// 			"scale3d(1.3,0.9,1)",
	// 			"scale3d(0.8,1.2,1)",
	// 			"scale3d(1,1,1)",
	// 		]),
	// 	)

	// };

	return (
		<div className="max-h-max max-w-max py-5 px-3">
			<Link to={`/product/preview/${id}`} className="w-[25rem] h-[27rem]">
				<img
					src={image}
					alt="product"
					loading="lazy"
					className=" w-[25rem] h-[27rem] object-cover"
				/>
			</Link>

			<div className="flex justify-between mt-2 ">
				<div className="flex flex-col items-start">
					<p className="uppercase text-sm">{name}</p>
					<span className="flex justify-around items-center text-[0.8rem]">
						<p className="text-secondary">${oldprice}</p>
						<div className="w-5 h-[1px] bg-white mx-1"></div>
						<p>${newprice}</p>
					</span>
				</div>
				<motion.div whileTap={{ scale: 1.3 }}>
					<RoundButton
						children={<HiPlus />}
						extraclasses="w-8 h-8 flex items-center justify-center mx-0"
						onClick={() =>
							dispatch(addToCart({ id, name, newprice, image, desc }))
						}
					/>
				</motion.div>
			</div>
		</div>
	);
};

export default ProductCard;
