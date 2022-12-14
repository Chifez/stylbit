import React, { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/404";
import Banner from "./components/Banner";
import Shipping from "./pages/Checkout/Shipping";
import Checkout from "./pages/Checkout/Payment";
import Preview from "./pages/Preview";
import Loader from "./components/Loader";
import { ThreeDots } from "react-loader-spinner";
const Products = React.lazy(() => import("./pages/Products"));

function App() {
	return (
		<div className="font-Hlight">
			<Suspense
				fallback={
					<Loader
						children={
							<ThreeDots height="50" width="50" radius="9" color="white" />
						}
						baseStyle={"h-screen w-screen bg-primary"}
						textStyle={"text-xl font-bold text-white"}
					/>
				}
			>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
					<Route path="/product/preview/:id" element={<Preview />} />
					<Route path="/checkout" element={<Shipping />} />
					<Route path="/checkout/payment" element={<Checkout />} />
					<Route element={<Banner />}>
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
