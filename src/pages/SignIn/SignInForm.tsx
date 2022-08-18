import React, { useState } from "react";
import { MdOutlineVisibilityOff, MdOutlineVisibility } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const SignInForm = () => {
	const [visible, setVisible] = useState(false);
	const toggle = () => {
		setVisible(!visible);
	};
	return (
		<div className="flex flex-col justify-center items-center h-screen ">
			<form className="flex flex-col border p-10 border-black">
				<h2>Sign in</h2>
				<label htmlFor="email">email</label>
				<input
					type="text"
					className="w-[15rem] p-1 border border-primary rounded-md"
				/>
				<label htmlFor="password">password</label>
				<div className="flex items-center border border-primary w-[15rem] rounded-md">
					<input
						type="password"
						placeholder="password"
						className="outline-none p-1 border-none mx-1"
					/>
					{visible ? (
						<MdOutlineVisibilityOff onClick={toggle} />
					) : (
						<MdOutlineVisibility onClick={toggle} />
					)}
				</div>
				<Link to="/">
					<a href="/" className="text-[0.8rem]">
						forgot password?
					</a>
				</Link>
				<button className=" bg-[green] rounded-sm border-[green] font-semibold p-2 mt-5">
					Sign In
				</button>
				<div className="text-[0.9rem] text-center">
					dont have an account ?{" "}
					<Link to="/signup" className="underline">
						sign up
					</Link>
				</div>
				<p className="text-center">OR</p>
				<button className="flex justify-center items-center p-2 bg-secondary border-secondary font-semibold rounded-sm">
					{" "}
					<FcGoogle />
					Sign in with Google
				</button>
			</form>
		</div>
	);
};

export default SignInForm;
