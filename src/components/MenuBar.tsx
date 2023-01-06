import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";

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
			<motion.div className="flex flex-col justify-center gap-20 items-center h-full w-full font-black text-2xl md:text-4xl text-secondary">
				<Links
					path="/products"
					title="Products"
					Clicked={() => setIsOpen(false)}
				/>
				<Links path="/" title="Careers" Clicked={() => setIsOpen(false)} />
				<Links path="/" title="About Us" Clicked={() => setIsOpen(false)} />
				<motion.span className="flex flex-row items-center justify-between gap-10">
					<Links
						path="/signIn"
						title="sign In"
						Clicked={() => setIsOpen(false)}
					/>
					<Links
						path="/signUp"
						title="sign Up"
						Clicked={() => setIsOpen(false)}
					/>
				</motion.span>
			</motion.div>
		</>
	);
};

const Links = (props: {
	title: string;
	path: string;
	styling?: string;
	Clicked: () => void;
}) => {
	return (
		<>
			<Link to={props.path} className={props.styling} onClick={props.Clicked}>
				<h2>{props.title}</h2>
			</Link>
		</>
	);
};
export default MenuBar;
