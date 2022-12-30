import { useState } from "react";
import { Link } from "react-router-dom";
import RoundButton from "./RoundButton";
import { IoMdClose } from "react-icons/io";
import { useAppSelector } from "../app/hooks";

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const cartQuantity = useAppSelector((state) => state.reducer.cart.length);
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
							extraclasses="w-5 h-5 py-[1px] mb-[4px]"
						/>
					</div>
				</Link>
				<span
					className="mx-1 md:mx-2 cursor-pointer"
					onClick={() => setIsOpen(!isOpen)}
				>
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

const MenuBar = ({
	setIsOpen,
	isOpen,
}: {
	setIsOpen: (e: boolean) => void;
	isOpen: boolean;
}) => {
	return (
		<>
			<IoMdClose
				className="absolute right-5 top-2 w-8 h-8 md:w-10 md:h-10 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			/>
			<div className="flex flex-col justify-center gap-20 items-center h-full w-full font-black text-2xl md:text-4xl text-secondary">
				<h2>products</h2>
				<h2>careers</h2>
				<h2>About us</h2>
				<span className="flex flex-row items-center justify-between gap-10">
					<h2>sign In</h2>
					<h2>sign Up</h2>
				</span>
			</div>
		</>
	);
};

export default Header;
