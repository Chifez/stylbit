import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthNavBar from "../../../components/AuthNavBar";
import InputForm from "../../../components/InputInfo";
import SelectInput from "../../../components/SelectInput";

const ShippingDetailsForm = () => {
	const phonecode = {
		optionId: "phoneCode",
		options: ["234", "458", "896", "765", "997", "356", "827"],
	};

	const state = {
		optionId: "state",
		options: ["Anambra", "Adamawa", "Bauchi", "Bayelsa", "Borno"],
	};
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col gap-5 p-10 shadow-xl w-[40%]">
				<h2 className="text-center font-semibold">Shipping Details</h2>
				<div className="flex gap-2 w-full">
					<InputForm
						label="full name"
						type="text"
						placeholder="full name"
						className="p-1 w-full rounded-sm  bg-transparent"
					/>
					<div className="flex flex-row items-center w-[60%] ">
						<SelectInput
							Options={phonecode}
							initialstate="234"
							extraclass="p-1 w-[4rem] border-secondary"
						/>
						<InputForm
							label="phone number"
							type="text"
							placeholder="phone number"
							className="p-1 rounded-sm bg-transparent border-transparent"
						/>
					</div>
				</div>
				<div className="flex gap-2 ">
					<InputForm
						label="city"
						type="text"
						placeholder="city"
						className="p-1 rounded-sm bg-transparent"
					/>

					<SelectInput
						Options={state}
						initialstate="Lagos"
						extraclass="p-1 w-[10rem] border-secondary"
					/>
				</div>
				<div className="flex gap-2 w-full">
					<InputForm
						label="Address"
						type="text"
						placeholder="Address"
						className="p-1 w-[20rem] rounded-sm bg-transparent"
					/>
					<InputForm
						label="zip code"
						type="text"
						placeholder="zip code"
						className="p-1 w-full rounded-sm  bg-transparent"
					/>
				</div>
				<Link to="/checkout/payment" className="w-fit">
					<button className=" bg-[green] rounded-sm border-[green] font-semibold px-10 py-1">
						continue
					</button>
				</Link>
			</form>
		</div>
	);
};

export default ShippingDetailsForm;
