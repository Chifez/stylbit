import axios from "axios";

const productApi = axios.create({
	baseURL: "https://dummyjson.com/",
});

export const getProducts = async () => {
	const womensdress = await productApi.get("/products/category/womens-dresses");
	const menshirt = await productApi.get("/products/category/mens-shirts");
	const womenshoes = await productApi.get("/products/category/womens-shoes");
	const womensbag = await productApi.get("/products/category/womens-bags");
	const menswatches = await productApi.get("/products/category/mens-watches");
	const womenjewellery = await productApi.get(
		"/products/category/womens-jewellery"
	);
	axios
		.all([
			womensdress,
			menshirt,
			womenshoes,
			womensbag,
			menswatches,
			womenjewellery,
		])
		.then(
			axios.spread(
				(
					womensDressItem,
					mensShirtItem,
					womenShoesItem,
					womensBagItem,
					mensWatchesItem,
					womenJewelleryItem
				) => {
					const productsList = [
						...womensDressItem.data.products,
						...mensShirtItem.data.products,
						...womenShoesItem.data.products,
						...womensBagItem.data.products,
						...mensWatchesItem.data.products,
						...womenJewelleryItem.data.products,
					];
					console.log(productsList);
					return productsList;
				}
			)
		);
};

export const getWomenProducts = async () => {
	const womensdress = await productApi.get("/products/category/womens-dresses");
	const womenshoes = await productApi.get("/products/category/womens-shoes");
	const womensbag = await productApi.get("/products/category/womens-bags");
	const womenjewellery = await productApi.get(
		"/products/category/womens-jewellery"
	);
	axios.all([womensdress, womenshoes, womensbag, womenjewellery]).then(
		axios.spread(
			(womensDressItem, womenShoesItem, womensBagItem, womenJewelleryItem) => {
				const womenCategoryList = [
					...womensDressItem.data.products,
					...womenShoesItem.data.products,
					...womensBagItem.data.products,
					...womenJewelleryItem.data.products,
				];
				console.log(womenCategoryList);
				console.log("clicked");
				return womenCategoryList;
			}
		)
	);
};

export const getMensProducts = async () => {
	const menshirt = await productApi.get("/products/category/mens-shirts");
	const menswatches = await productApi.get("/products/category/mens-watches");
	axios.all([menshirt, menswatches]).then(
		axios.spread((mensShirtItem, mensWatchesItem) => {
			const productsList = [
				...mensShirtItem.data.products,
				...mensWatchesItem.data.products,
			];
			console.log(productsList);
			console.log("clicked");
			return productsList;
		})
	);
};

export const searchProducts = async (product: string) => {
	const searchResults = await productApi.get(`/products/search?q=${product}`);
	console.log(searchResults);
};

export const fetchProduct = (argument: string) => {
	if (argument === "allproducts") {
		return getProducts;
	} else if (argument === "mensproducts") {
		return getMensProducts;
	} else return getWomenProducts;
};
