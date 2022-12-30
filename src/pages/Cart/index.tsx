import Layout from "../../components/Layout";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
// import { product } from "../../Data/Types";
import { useAppSelector } from "../../app/hooks";
import { getTotal } from "../../utils/GetTotal";

const Cart = () => {
	const products = useAppSelector((state) => state?.reducer.cart);
	const TotalPrice = getTotal(products).totalPrice;

	return (
		<div className="px-4 md:px-8 bg-primary">
			<Layout>
				{products.length === 0 && (
					<div className="flex items-center justify-center w-screen h-screen">
						<p>EMPTY CART</p>
					</div>
				)}
				{products.length >= 1 && (
					<div className="border-b border-secondary pb-2">
						<div className="hidden md:grid grid-cols-3 place-items-center mb-5 uppercase font-semibold">
							<h2>product</h2>
							<h2>quantity</h2>
							<h2>price</h2>
						</div>
						<div className="h-[80vh] md:h-[70vh] overflow-y-scroll">
							{products?.map((item) => (
								<CartItem item={item} key={item.id} />
							))}
						</div>
						<div className="grid grid-cols-3 place-items-center">
							<div />
							<div />
							<span className="flex justify-start items-center mt-5 border-b border-secondary px-4">
								<p className="px-2">Total:</p>
								<span className="text-center">${TotalPrice}</span>
							</span>
						</div>
						<span className="flex justify-center py-5">
							<Link to="/signin">
								<button className="text-center font-semibold border border-transparent rounded-md px-10 p-1 bg-[green] hover:bg-transparent hover:border-inherit">
									Checkout
								</button>
							</Link>
						</span>
					</div>
				)}
			</Layout>
		</div>
	);
};

export default Cart;
