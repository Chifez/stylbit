import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import AuthNavBar from "../../components/AuthNavBar";
import InputForm from "../../components/InputInfo";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { ThreeDots } from "react-loader-spinner";
import { userAuth } from "../../app/authSlice";
import { useAppDispatch } from "../../app/hooks";

const SignUpForm = () => {
	interface Data {
		name: string;
		email: string;
		password: string;
		confirm_password: string;
	}

	const [inputData, setInputData] = useState<Data>({
		name: "",
		email: "",
		password: "",
		confirm_password: "",
	});

	const { name, email, password, confirm_password } = inputData;

	const handleChange = (e: Event) => {
		setInputData({
			...inputData,
			[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
				.value,
		});
	};

	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const onSuccess = () => {
		dispatch(userAuth({ user: true, userId: data?.user.uid }));
		navigate("/checkout");
	};

	const auth = getAuth();

	const newUser = async (email: string, password: string) => {
		const response = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		return response;
	};

	const mutation = useMutation({
		mutationFn: () => newUser(email, password),
		onSuccess,
	});
	const { data, isLoading, isError, error } = mutation;

	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col p-5 md:p-10 md:shadow-xl w-full md:w-[32vw] gap-2">
				<h2 className="text-center font-semibold">Create New Account</h2>
				<div className="flex flex-col gap-5">
					<InputForm
						label="Name"
						type="text"
						name="name"
						value={name}
						placeholder="Name"
						className="flex-1 px-1 py-2 rounded-sm bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
					<InputForm
						label="Email"
						type="text"
						name="email"
						value={email}
						placeholder="Email"
						className="flex-1 px-1 py-2 rounded-sm bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
					<div className="flex flex-row items-start gap-2 w-full">
						<InputForm
							label="Password"
							type="password"
							name="password"
							value={password}
							placeholder="Password"
							className="flex-1 p-1 rounded-sm bg-transparent w-full"
							inputChange={(e) => handleChange(e)}
						/>
						<InputForm
							label="Confirm password"
							type="password"
							name="confirm_password"
							value={confirm_password}
							placeholder="Confirm password"
							className="flex-1 p-1 rounded-sm  bg-transparent w-full"
							inputChange={(e) => handleChange(e)}
						/>
					</div>
					{isError ? (
						<p className="text-[0.8rem] text-[red]">
							{(error as Error).message}
						</p>
					) : null}
				</div>

				<div
					className="flex justify-center gap-2 items-center bg-[green] text-center rounded-sm border-[green] font-semibold p-2 mt-5"
					onClick={() => mutation.mutate()}
				>
					{isLoading && (
						<ThreeDots height="25" width="25" radius="9" color="white" />
					)}
					Create Account
				</div>
				<div className="text-[0.9rem] text-center">
					already have an account ?
					<Link to="/signin" className="underline">
						sign in
					</Link>
				</div>
			</form>
		</div>
	);
};

export default SignUpForm;
