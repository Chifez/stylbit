import { useState, useEffect } from "react";
import RoundButton from "./RoundButton";
import { product } from "../Data/Types";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../app/cartSlice";
import { motion } from "framer-motion";
import { DocumentData } from "firebase/firestore";

const ProductCard = (props: { productItem: DocumentData | product }) => {
	const { id, image, name, newprice, oldprice, desc } = props.productItem;
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isVisible) {
			const timeout = setTimeout(() => {
				setIsVisible(false);
			}, 500);
			return () => {
				clearTimeout(timeout);
			};
		}
	}, [isVisible]);

	const dispatch = useAppDispatch();

	const Bounce = () => {
		return { scale: 1.3 };
	};

	return (
		<div className="max-h-max max-w-max py-5 px-3">
			<Link
				to={`/product/preview/${id}`}
				className="w-[25rem] h-[27rem] bg-[secondary]"
			>
				<img
					src={image}
					alt="product"
					loading="lazy"
					className=" w-[25rem] h-[27rem] object-cover bg-[secondary]"
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
				<motion.div
					whileTap={Bounce()}
					onClick={() => setIsVisible(!isVisible)}
					className="relative"
				>
					{isVisible && (
						<motion.p
							key={"button"}
							animate={{
								y: [-18, -22, -25, -30],
								opacity: [1, 0.5, 0.25, 0],
							}}
							px-2
							transition={{ duration: 0.5 }}
							className="absolute cursor-pointer text-center"
						>
							added!
						</motion.p>
					)}
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
