import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import AuthNavBar from "../../components/AuthNavBar";
import InputForm from "../../components/InputInfo";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
import { useAppDispatch } from "../../app/hooks";
import { userAuth } from "../../app/authSlice";
import { useMutation } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";

const SignInForm = () => {
	interface Data {
		email: string;
		password: string;
	}
	const [inputData, setInputData] = useState<Data>({ email: "", password: "" });

	const { email, password } = inputData;

	const auth = getAuth();

	const handleChange = (e: Event) => {
		setInputData((prev) => ({
			...prev,
			[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
				.value,
		}));
	};

	const googleSignIn = async () => {
		const provider = new GoogleAuthProvider();
		const response = await signInWithPopup(auth, provider);
		console.log(data?.user);
		return response;
	};

	const signInUser = async (email: string, password: string) => {
		const response = await signInWithEmailAndPassword(auth, email, password);
		return response;
	};

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onSuccess = () => {
		dispatch(userAuth({ user: true, userId: data?.user.uid }));
		navigate("/checkout");
	};

	const mutation = useMutation({
		mutationFn: () => signInUser(email, password),
		onSuccess,
	});
	const googleMutation = useMutation({
		mutationFn: googleSignIn,
		onSuccess,
	});
	const { data, isLoading, isError, error } = mutation;

	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<div className="flex flex-col p-5 md:p-10 rounded-xl md:shadow-2xl gap-2 w-full md:w-[32vw]">
				<h2 className="text-center font-semibold capitalize">Sign in</h2>
				<div className="flex flex-col gap-5">
					<InputForm
						label="Email"
						type="text"
						name="email"
						value={email}
						placeholder="Email"
						className="flex-1 px-1 py-2 bg-transparent outline-none"
						inputChange={(e) => handleChange(e)}
					/>
					<InputForm
						type="password"
						label="Password"
						name="password"
						value={password}
						placeholder="Password"
						className="flex-1 outline-none px-1 py-2 bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
					{isError ? (
						<p className="text-[0.8rem] text-[red]">
							{(error as Error).message}
						</p>
					) : null}
				</div>

				<Link to="/">
					<a href="/" className="text-[1rem]">
						forgot password?
					</a>
				</Link>

				<div
					className="flex justify-center gap-2 items-center bg-[green] text-center rounded-sm border-[green] font-semibold p-2 mt-5"
					onClick={() => mutation.mutate()}
				>
					{isLoading && (
						<ThreeDots height="25" width="25" radius="9" color="white" />
					)}
					Sign In
				</div>

				<div className="text-center flex justify-center items-center my-2">
					<div className="w-full bg-secondary h-[1px] mx-1" />
					<p> OR</p>
					<div className="w-full bg-secondary h-[1px] mx-1" />
				</div>
				<button
					className="flex justify-center items-center gap-2 p-2 bg-secondary border-secondary font-semibold rounded-sm"
					onClick={() => googleMutation.mutate()}
				>
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
			</div>
		</div>
	);
};

export default SignInForm;
