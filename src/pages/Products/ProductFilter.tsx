import React from "react";
import { BsSearch } from "react-icons/bs";
import InputForm from "../../components/InputInfo";
import SelectInput from "../../components/SelectInput";

const ProductFilter = () => {
	const categoryOptions = {
		optionId: "category",
		options: ["Men's wear", "Female's wear"],
	};
	const sortOptions = {
		optionId: "sortby",
		options: ["PRICE", "A-Z", "Z-A"],
	};
	const languageOptions = {
		optionId: "Language",
		options: ["EN", "ESP"],
	};
	return (
		<div className="flex justify-between">
			<SelectInput
				Options={categoryOptions}
				initialstate="--select category--"
				extraclass="w-[11rem] px-1"
			/>
			<div className="relative flex items-center justify-between gap-1 px-2 border">
				<input
					type="text"
					placeholder="Search keyword"
					className="flex-1 outline-none bg-transparent"
				/>
				<BsSearch className=" fill-white" />
			</div>
			<div className="flex gap-3">
				<SelectInput
					Options={sortOptions}
					initialstate="--sort products--"
					extraclass="w-[10rem] px-1"
				/>
				<SelectInput
					Options={languageOptions}
					initialstate={languageOptions.options[0]}
					extraclass="w-20 px-1"
				/>
			</div>
		</div>
	);
};

export default ProductFilter;
