import { useState } from "react";
import RoundButton from "../../components/RoundButton";
import { HiMinus, HiPlus } from "react-icons/hi";
import { product } from "../../Data/Types";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/cartSlice";
import { DocumentData } from "firebase/firestore";

const PreviewPage = (props: { products: DocumentData }) => {
	const [input, setInput] = useState<number>(1);
	const increaseQuantity = () => {
		setInput((prev) => prev + 1);
	};

	const decreaseQuantity = () => {
		if (input > 1) {
			setInput((prev) => prev - 1);
		} else return;
	};
	const { id, image, name, oldprice, newprice, desc, fulldesc, instock } =
		props.products;
	const dispatch = useAppDispatch();
	return (
		<div className="grid grid-cols-1 md:grid-cols-3 px-2 md:px-10 md:gap-5">
			<span className="grid md:col-span-1 gap-3">
				<img
					src={image}
					alt="imageitem"
					className="w-full h-[40vh] md:w-[25rem] md:h-[28rem] object-cover"
				/>

				<div className="grid grid-cols-3 gap-3">
					<img src={image} alt="imageitem" />
					<img src={image} alt="imageitem" />
					<img src={image} alt="imageitem" />
				</div>
			</span>
			<div className="md:col-span-2 py-5 md:py-20">
				<h2 className="font-semibold text-[1.2rem] capitalize">{name}</h2>
				<span className="flex items-center gap-3 text-[0.8rem] py-2">
					<p className="text-secondary">${oldprice}</p>
					<div className="w-5 h-[1px] bg-white"></div>
					<p>${newprice}</p>
				</span>
				<div>
					{instock ? (
						<p className="text-[orange]">In stock</p>
					) : (
						<p className="text-[crimson] line-through">instock</p>
					)}
				</div>
				<p className="py-2 w-full text-justify md:w-[70%]">{fulldesc}</p>
				<div className="flex items-center gap-1 py-2">
					<label htmlFor="qty">Qty:</label>

					<div className="flex items-center gap-1">
						<RoundButton
							children={<HiPlus />}
							extraclasses="w-5 h-5 rounded-none"
							onClick={increaseQuantity}
						/>
						<span className="px-3 border text-center">{input}</span>
						<RoundButton
							children={<HiMinus />}
							extraclasses="w-5 h-5 rounded-none"
							onClick={decreaseQuantity}
						/>
					</div>

					<RoundButton
						children="ADD TO CART"
						extraclasses="hover:text-white hover:bg-transparent font-Hmid border uppercase py-1 px-3 rounded-sm"
						onClick={() =>
							dispatch(
								addToCart({
									id,
									name,
									desc,
									image,
									newprice,
									prod_quantity: input,
								})
							)
						}
					/>
				</div>
			</div>
		</div>
	);
};

export default PreviewPage;
