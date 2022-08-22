import React from "react";
import { BsSearch } from "react-icons/bs";
import InputForm from "../../components/InputInfo";
import SelectInput from "../../components/SelectInput";

const ProductFilter = () => {
	const categoryOptions = {
		optionId: "category",
		options: ["--select category--", "Men's wear", "Female wear"],
	};
	const sortOptions = {
		optionId: "sortby",
		options: ["--sort products--", "price", "A-Z", "Z-A"],
	};
	const languageOptions = {
		optionId: "Language",
		options: ["EN", "EN", "ESP"],
	};
	return (
		<div className="flex justify-between">
			<SelectInput Options={categoryOptions} />
			<div className="relative flex items-center border border-secondary rounded-sm">
				<InputForm
					type="text"
					placeholder="Search keyword"
					className="outline-none p-1 border-none mx-2 bg-transparent"
				/>
				<BsSearch className="absolute right-2 fill-white" />
			</div>
			<div className="flex gap-3">
				<SelectInput Options={sortOptions} />
				<SelectInput Options={languageOptions} />
			</div>
		</div>
	);
};

export default ProductFilter;
