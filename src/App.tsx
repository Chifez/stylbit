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
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Products from "./pages/Products";

initializeApp(firebaseConfig);

function App() {
	return (
		<div className="font-Hlight">
			<Routes>
				<Route index element={<Home />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/products" element={<Products />} />
				<Route path="/product/preview/:id" element={<Preview />} />

				<Route
					path="/checkout"
					element={<ProtectedRoutes children={<Shipping />} />}
				/>
				<Route
					path="/checkout/payment"
					element={<ProtectedRoutes children={<Checkout />} />}
				/>

				<Route element={<Banner />}>
					<Route path="/signin" element={<SignIn />} />
					<Route path="/signup" element={<SignUp />} />
				</Route>
				<Route path="*" element={<Page404 />} />
			</Routes>
		</div>
	);
}

export default App;
