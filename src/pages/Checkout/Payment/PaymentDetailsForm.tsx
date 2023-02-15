import { useState } from "react";
import AuthNavBar from "../../../components/AuthNavBar";
import InputForm from "../../../components/InputInfo";
import { Link } from "react-router-dom";
import SelectInput from "../../../components/SelectOptions";

const PaymentDetailsForm = () => {
	const [inputData, setInputData] = useState({
		Card_Name: "",
		Card_Number: "",
		CVV: "",
	});
	const { Card_Name, Card_Number, CVV } = inputData;

	const handleChange = (e: Event) => {
		setInputData((prev) => ({
			...prev,
			[(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement)
				.value,
		}));
	};
	const checkout = () => {
		console.log(inputData);
		console.log("clicked");
	};
	const monthOption = {
		optionId: "month",
		options: [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		],
	};

	const yearOption = {
		optionId: "year",
		options: [
			2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
			2034, 2035, 2036, 2037, 2038, 2039, 2040,
		],
	};

	return (
		<div className="relative grid place-items-center row-span-1 md:col-span-2 md:border-r border-[#d8bebe] my-2 w-screen md:w-full">
			<AuthNavBar />
			<form className="flex flex-col p-5 gap-5 shadow-xl mt-20 md:mt-0 w-screen md:w-fit">
				<h2 className="text-center font-semibold">Card Details</h2>
				<span className="flex flex-col">
					<InputForm
						label="Card Name"
						type="text"
						value={Card_Name}
						placeholder="card name as shown on the card"
						className="p-1 min-w-fit bg-transparent rounded-sm px-2 outline-none"
						inputChange={(e) => handleChange(e)}
					/>
				</span>
				<span className="flex flex-col">
					<InputForm
						label="Card Number"
						type="text"
						value={Card_Number}
						placeholder="card number"
						className="p-1 bg-transparent rounded-sm px-2 outline-none"
						inputChange={(e) => handleChange(e)}
					/>
				</span>
				<span className="flex gap-2 items-end justify-start md:justify-center">
					<span>
						<label htmlFor="expiration date">Expiration Date</label>
						<span className="flex gap-5 bg-transparent rounded-sm outline-none">
							<SelectInput
								Options={monthOption}
								initialstate="month"
								extraclass="w-[7rem] p-1 border-secondary rounded-sm"
							/>
							<SelectInput
								Options={yearOption}
								initialstate="year"
								extraclass="w-[5rem] p-1 border-secondary rounded-sm"
							/>
						</span>
					</span>
					<span className="flex flex-col">
						<InputForm
							label="CVV"
							type="text"
							value={CVV}
							placeholder="CVV"
							className="p-1 bg-transparent  w-full rounded-sm px-2 outline-none"
							inputChange={(e) => handleChange(e)}
						/>
					</span>
				</span>
				<span className="flex items-center gap-2">
					<input type="checkbox" className="accent-secondary" />
					<p>Remember this details</p>
				</span>
				<div className="flex gap-3">
					<Link to="/checkout/">
						<button className="text-center font-semibold border border-transparent rounded-md px-10 p-1 bg-secondary hover:bg-transparent hover:border-inherit">
							Go back
						</button>
					</Link>
					<button
						onClick={checkout}
						className="text-center font-semibold border border-transparent rounded-md px-10 p-1 bg-[green] hover:bg-transparent hover:border-inherit"
					>
						Checkout
					</button>
				</div>
			</form>
		</div>
	);
};

export default PaymentDetailsForm;
