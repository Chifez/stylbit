import "./App.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route, useNavigate } from "react-router-dom";
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
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import { resolve } from "path";

initializeApp(firebaseConfig);

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const loadWebdata = async () => {
    for (let i = 0; i < 100; i++) {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setProgress(i);
    }
    setIsLoading(false);
    navigate("/");
  };

  useEffect(() => {
    loadWebdata();
  }, []);

  return (
    <>
      {isLoading && <Preloader progress={progress} />}
      {!isLoading && (
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
      )}
    </>
  );
}

export default App;
