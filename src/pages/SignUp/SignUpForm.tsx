import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-center h-screen ">
				<form className="flex flex-col border p-10 border-black">
					<h2>Create New Account</h2>
					<label htmlFor="name">name</label>
					<input
						type="text"
						className="w-[15rem] p-1 border border-primary rounded-md"
					/>
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
					</div>
					<label htmlFor="password">confirm password</label>
					<div className="flex items-center border border-primary w-[15rem] rounded-md">
						<input
							type="password"
							placeholder="password"
							className="outline-none p-1 border-none mx-1"
						/>
					</div>
					<div className="text-[0.9rem] text-center">
						already have an account ?{" "}
						<Link to="/signin" className="underline">
							sign in
						</Link>
					</div>

					<button className=" bg-[green] rounded-sm border-[green] font-semibold p-2 my-5">
						Create Account
					</button>
					<button className="flex justify-center items-center p-2 bg-secondary border-secondary font-semibold rounded-sm">
						{" "}
						<FcGoogle />
						Sign up with Google
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUpForm;
