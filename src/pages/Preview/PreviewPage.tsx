import { useState } from "react";
import RoundButton from "../../components/RoundButton";
import { product } from "../../Data/Types";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../../app/cartSlice";

const PreviewPage = (props: { products: product }) => {
	const [input, setInput] = useState<number>(1);
	const { id, image, name, oldprice, newprice, desc, fulldesc, instock } =
		props.products;
	const dispatch = useAppDispatch();
	return (
		<div className="grid grid-cols-3 px-20 gap-5">
			<span className="grid col-span-1 gap-3">
				<img
					src={image}
					alt="imageitem"
					className=" w-[25rem] h-[28rem] object-cover"
				/>

				<div className="grid grid-cols-3 gap-3">
					<img src={image} alt="imageitem" />
					<img src={image} alt="imageitem" />
					<img src={image} alt="imageitem" />
				</div>
			</span>
			<div className="col-span-2 py-20">
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
				<p className="py-2 w-[70%]">{fulldesc}</p>
				<div className="flex items-center py-2">
					<label htmlFor="qty">Qty:</label>
					<span className="relative">
						<input
							type="number"
							name="qty"
							min="1"
							defaultValue="1"
							className="w-14 h-8 outline-none border text-center bg-transparent text-white"
							onChange={(e) => setInput(parseInt(e.target.value))}
						/>
						<div className="absolute top-[15%] right-1">
							<AiOutlineUp className=" w-3 h-3" />
							<AiOutlineDown className="w-3 h-3" />
						</div>
					</span>
					<RoundButton
						children="ADD TO CART"
						extraclasses="px-5 py-2 rounded-none font-semibold cursor-pointer bg-[green] text-[white]"
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
