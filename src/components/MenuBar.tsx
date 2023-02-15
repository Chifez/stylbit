import { Link, Navigate, useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { userAuth } from "../app/authSlice";
import { signOut, getAuth } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";

const MenuBar = (props: {
	setIsOpen: (e: boolean) => void;
	isOpen: boolean;
}) => {
	const { setIsOpen, isOpen } = props;
	const user = useAppSelector((state) => state.authReducer.user);
	const dispatch = useAppDispatch();
	const toggle = (args: boolean) => {
		setIsOpen(args);
	};
	const navigate = useNavigate();
	const auth = getAuth();
	const Logout = async () => {
		const response = await signOut(auth);
		return response;
	};

	const onSuccess = () => {
		toggle(false);
		navigate("/");
		dispatch(userAuth({ user: false, userId: "" }));
	};

	const LogoutMutation = useMutation({
		mutationFn: () => Logout(),
		onSuccess,
	});

	return (
		<>
			<IoMdClose
				className="absolute right-5 top-2 w-8 h-8 md:w-10 md:h-10 cursor-pointer"
				onClick={() => toggle(!isOpen)}
			/>
			<motion.div className="flex flex-col justify-center gap-20 items-center h-full w-full font-black text-2xl md:text-4xl text-secondary">
				<Links
					path="/products"
					title="Products"
					Clicked={() => toggle(false)}
				/>
				<Links path="/" title="Careers" Clicked={() => toggle(false)} />
				<Links path="/" title="About Us" Clicked={() => toggle(false)} />
				{user ? (
					<Links
						path="/"
						title="Log out"
						Clicked={() => LogoutMutation.mutate()}
					/>
				) : (
					<motion.span className="flex flex-row items-center justify-between gap-10">
						<Links
							path="/signIn"
							title="sign In"
							Clicked={() => toggle(false)}
						/>
						<Links
							path="/signUp"
							title="sign Up"
							Clicked={() => toggle(false)}
						/>
					</motion.span>
				)}
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
