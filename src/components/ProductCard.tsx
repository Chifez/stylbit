import RoundButton from "./RoundButton";
import { product } from "../Data/Types";
import { Link } from "react-router-dom";
import { FaLink } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";
import { useAppDispatch } from "../app/hooks";
import { addToCart } from "../app/cartSlice";

const ProductCard = (props: { productItem: product }) => {
	const { id, image, name, newprice, oldprice, desc } = props.productItem;

	const dispatch = useAppDispatch();

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

			<div>
				<p className="uppercase text-sm">{name}</p>
				<div className="flex justify-between">
					<span className="flex justify-around items-center text-[0.8rem]">
						<p className="text-secondary">${oldprice}</p>
						<div className="w-5 h-[1px] bg-white mx-1"></div>
						<p>${newprice}</p>
					</span>
					<RoundButton
						children={<HiPlus />}
						extraclasses="w-5 h-5 flex items-center justify-center mx-0"
						onClick={() =>
							dispatch(addToCart({ id, name, newprice, image, desc }))
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
