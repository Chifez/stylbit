import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthNavBar from "../../components/AuthNavBar";
import InputForm from "../../components/InputInfo";

const SignUpForm = () => {
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col p-10 shadow-xl w-[45%]">
				<h2 className="text-center font-semibold">Create New Account</h2>
				<InputForm
					label="name"
					type="text"
					placeholder="name"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<InputForm
					label="Email"
					type="text"
					placeholder="Email"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<InputForm
					label="Password"
					type="text"
					placeholder="Password"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<InputForm
					label="Confirm password"
					type="text"
					placeholder="Confirm password"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>

				<button className=" bg-[green] rounded-sm border-[green] font-semibold p-2 mt-5">
					Create Account
				</button>
				<div className="text-center flex justify-center items-center my-2">
					<div className="w-full bg-secondary h-[1px] mx-1" />
					<p> OR</p>
					<div className="w-full bg-secondary h-[1px] mx-1" />
				</div>
				<button className="flex justify-center items-center p-2 bg-secondary border-secondary font-semibold rounded-sm">
					{" "}
					<FcGoogle />
					Sign up with Google
				</button>
				<div className="text-[0.9rem] text-center">
					already have an account ?{" "}
					<Link to="/signin" className="underline">
						sign in
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
