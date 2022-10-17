import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthNavBar from "../../components/AuthNavBar";
import InputForm from "../../components/InputInfo";

const SignInForm = () => {
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col p-10 rounded-xl shadow-2xl gap-2 w-[32vw]">
				<h2 className="text-center font-semibold capitalize">Sign in</h2>
				<div className="flex flex-col gap-5">
					<InputForm
						label="Email"
						type="text"
						placeholder="Email"
						className="flex-1 p-1 bg-transparent outline-none"
					/>

					<InputForm
						type="password"
						label="password"
						placeholder="Password"
						className="flex-1 outline-none p-1 bg-transparent"
					/>
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
