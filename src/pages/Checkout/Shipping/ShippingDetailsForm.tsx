import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthNavBar from "../../../components/AuthNavBar";
import InputForm from "../../../components/InputInfo";

const ShippingDetailsForm = () => {
	return (
		<div className="relative flex flex-col justify-center items-center h-screen">
			<AuthNavBar />
			<form className="flex flex-col p-10 shadow-xl w-[30%]">
				<h2 className="text-center font-semibold">Shipping Details</h2>
				<InputForm
					label="country"
					type="text"
					placeholder="country"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<InputForm
					label="state"
					type="text"
					placeholder="state"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<InputForm
					label="city"
					type="text"
					placeholder="city"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>

				<InputForm
					label="postal code"
					type="text"
					placeholder="pastal"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<InputForm
					label="Address"
					type="text"
					placeholder="Address"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>

				<InputForm
					label="phone number"
					type="text"
					placeholder="phone number"
					className="p-1 border border-secondary rounded-sm  bg-transparent"
				/>
				<Link to="/checkout/payment" className="underline">
					<button className=" bg-[green] rounded-sm border-[green] font-semibold p-2 mt-5">
						Next
					</button>
				</Link>
			</form>
		</div>
	);
};

export default ShippingDetailsForm;
