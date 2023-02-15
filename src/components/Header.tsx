import { useState } from "react";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";
import MenuBar from "./MenuBar";
import { useAppSelector } from "../app/hooks";

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const cartQuantity = useAppSelector((state) => state.cartReducer.cart.length);
	const toggle = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div className="flex justify-between items-baseline text-Hlight text-white py-3 px-1 md:px-10 uppercase">
			<Link to="/">
				{" "}
				<p>Faloni</p>
			</Link>
			<div className="flex text-sm gap-4 items-center text-center">
				<Link to="/cart">
					<div className="flex text-center gap-2 items-center  mx-1 md:mx-2">
						<p>cart</p>
						<RoundButton
							children={cartQuantity}
							extraclasses="w-5 h-5 pt-1 md:pt-0"
						/>
					</div>
				</Link>
				<span className="mx-1 md:mx-2 cursor-pointer" onClick={toggle}>
					<p>Menu</p>
				</span>
			</div>
			<div
				className={`fixed top-0 left-0 ${
					isOpen ? "translate-y-0" : "translate-y-full"
				} transition-all overflow-hidden flex items-center justify-center w-screen h-screen bg-primary opacity-95 z-50`}
			>
				<MenuBar setIsOpen={setIsOpen} isOpen={isOpen} />
			</div>
		</div>
	);
};
export default Header;
