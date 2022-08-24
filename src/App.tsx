import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/404";
import Banner from "./components/Banner";
import Shipping from "./pages/Checkout/Shipping";
import Checkout from "./pages/Checkout/Payment";
import Preview from "./pages/Preview";

function App() {
	return (
		<Router>
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
		</Router>
	);
}

export default App;
