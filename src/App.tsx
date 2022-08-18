import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./pages/Products";
import Checkout from "./pages/Checkout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/404";
import Banner from "./components/Banner";

function App() {
	return (
		<Router>
			<div>
				<Routes>
					<Route index element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products" element={<Products />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route element={<Banner />}>
						<Route path="/signin" element={<SignIn />} />
						<Route path="/signup" element={<SignUp />} />
					</Route>
					<Route path="*" element={<Page404 />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
