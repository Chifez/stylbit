import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthNavBar from "../../components/AuthNavBar";
import InputForm from "../../components/InputInfo";

const SignUpForm = () => {
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col p-10 shadow-xl w-[32vw] gap-2">
				<h2 className="text-center font-semibold">Create New Account</h2>
				<div className="flex flex-col gap-5">
					<InputForm
						label="name"
						type="text"
						placeholder="Name"
						className="flex-1 p-1 rounded-sm bg-transparent"
					/>
					<InputForm
						label="Email"
						type="text"
						placeholder="Email"
						className="flex-1 p-1 rounded-sm bg-transparent"
					/>
					<div className="flex flex-row items-start gap-2 w-full">
						<InputForm
							label="Password"
							type="password"
							placeholder="Password"
							className="flex-1 p-1 rounded-sm bg-transparent w-full"
						/>
						<InputForm
							label="Confirm password"
							type="password"
							placeholder="Confirm password"
							className="flex-1 p-1 rounded-sm  bg-transparent w-full"
						/>
					</div>
				</div>

				<Link
					to="/checkout"
					className=" bg-[green] text-center rounded-sm border-[green] font-semibold p-2 mt-5"
				>
					Create Account
				</Link>

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
