import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import InputForm from "../../components/InputInfo";
import SelectInput from "../../components/SelectFilter";
import {
	searchProducts,
	getMensProducts,
	getWomenProducts,
} from "../../features/api/product.api";

const ProductFilter = () => {
	const [searchInput, setSearchInput] = useState<string>("");

	const categoryOptions = {
		optionId: "category",
		options: [
			{ title: "Men's wear", getCategory: getMensProducts },
			{ title: "Female's wear", getCategory: getWomenProducts },
		],
	};
	const sortOptions = {
		optionId: "sortby",
		options: [{ title: "PRICE" }, { title: "A-Z" }, { title: "Z-A" }],
	};
	const languageOptions = {
		optionId: "Language",
		options: [{ title: "EN" }, { title: "ESP" }],
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
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<BsSearch
					className=" fill-white"
					onClick={() => searchProducts(searchInput)}
				/>
			</div>
			<div className="flex gap-3">
				<SelectInput
					Options={sortOptions}
					initialstate="--sort products--"
					extraclass="w-[10rem] px-1"
				/>
				<SelectInput
					Options={languageOptions}
					initialstate={languageOptions.options[0].title}
					extraclass="w-20 px-1"
				/>
			</div>
		</div>
	);
};

export default ProductFilter;
