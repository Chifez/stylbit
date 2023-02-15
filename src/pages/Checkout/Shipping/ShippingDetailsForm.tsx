import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import AuthNavBar from "../../../components/AuthNavBar";
import InputForm from "../../../components/InputInfo";
import SelectInput from "../../../components/SelectOptions";

const ShippingDetailsForm = () => {
	const [inputData, setInputData] = useState({
		full_name: "",
		phone_number: "",
		city: "",
		address: "",
		zip_code: "",
	});

	const { full_name, phone_number, city, address, zip_code } = inputData;

	const handleChange = (e: Event) => {
		setInputData((prev) => ({
			...prev,
			[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
				.value,
		}));
	};

	const checkout = () => {
		console.log("clicked");
		console.log(inputData);
	};
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
			<form className="flex flex-col gap-5 p-5 md:p-10 shadow-xl w-full md:w-[40%]">
				<h2 className="text-center font-semibold">Shipping Details</h2>
				<div className="flex flex-col md:flex-row gap-4 md:gap-2 w-full">
					<InputForm
						label="full name"
						type="text"
						name="full_name"
						value={full_name}
						placeholder="full name"
						className="p-1 w-full rounded-sm bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
					<div className="flex flex-row items-center w-full md:w-[60%] ">
						<SelectInput
							Options={phonecode}
							initialstate="234"
							extraclass="p-1 w-[4rem]  border-secondary border-r-transparent"
						/>
						<InputForm
							label="phone number"
							type="text"
							name="phone_number"
							value={phone_number}
							placeholder="phone number"
							className="p-1 rounded-sm bg-transparent border-transparent"
							inputChange={(e) => handleChange(e)}
						/>
					</div>
				</div>
				<div className="flex gap-2 w-full ">
					<SelectInput
						Options={state}
						initialstate="Lagos"
						extraclass="p-1 w-[6rem] md:w-[7rem] border-secondary"
					/>
					<InputForm
						label="city"
						type="text"
						name="city"
						value={city}
						placeholder="city"
						className="p-1 rounded-sm bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
				</div>
				<div className="flex gap-2 w-full">
					<InputForm
						label="Address"
						type="text"
						name="address"
						value={address}
						placeholder="Address"
						className="p-1 w-[12rem] md:w-[20rem] rounded-sm bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
					<InputForm
						label="zip code"
						type="text"
						name="zip_code"
						value={zip_code}
						placeholder="zip code"
						className="p-1 w-full rounded-sm  bg-transparent"
						inputChange={(e) => handleChange(e)}
					/>
				</div>
				<Link to="/checkout/payment" className="w-fit" onClick={checkout}>
					<button className=" bg-[green] rounded-sm border-[green] font-semibold px-10 py-1">
						continue
					</button>
				</Link>
			</form>
		</div>
	);
};

export default ShippingDetailsForm;
