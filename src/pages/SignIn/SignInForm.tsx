import React, { useState } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthNavBar from "../../components/AuthNavBar";
import InputForm from "../../components/InputInfo";

const SignInForm = () => {
	const [visible, setVisible] = useState(false);
	const toggle = () => {
		setVisible(!visible);
	};
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col p-10 rounded-xl shadow-2xl w-[45%]">
				<h2 className="text-center font-semibold font capitalize">Sign in</h2>
				<InputForm
					label="Email"
					type="text"
					placeholder="email"
					className="p-1 border border-secondary bg-transparent rounded-sm px-2 outline-none"
				/>

				<label htmlFor="Password" className="capitalize">
					password
				</label>
				<div className="relative flex items-center border border-secondary rounded-sm">
					<InputForm
						type="text"
						placeholder="Password"
						className="outline-none p-1 border-none mx-2 bg-transparent"
					/>
					{visible ? (
						<MdOutlineVisibilityOff
							onClick={toggle}
							className="absolute right-2 fill-white"
						/>
					) : (
						<MdOutlineVisibility
							onClick={toggle}
							className="absolute right-2 fill-white"
						/>
					)}
				</div>
				<Link to="/">
					<a href="/" className="text-[0.8rem]">
						forgot password?
					</a>
				</Link>

				<Link
					to="/checkout"
					className=" bg-[green] text-center rounded-sm border-[green] font-semibold p-2 mt-5"
				>
					Sign In
				</Link>

				<div className="text-center flex justify-center items-center my-2">
					<div className="w-full bg-secondary h-[1px] mx-1" />
					<p> OR</p>
					<div className="w-full bg-secondary h-[1px] mx-1" />
				</div>
				<button className="flex justify-center items-center p-2 bg-secondary border-secondary font-semibold rounded-sm">
					{" "}
					<FcGoogle />
					Sign in with Google
				</button>
				<div className="text-[0.9rem] text-center">
					dont have an account ?{" "}
					<Link to="/signup" className="underline">
						sign up
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
