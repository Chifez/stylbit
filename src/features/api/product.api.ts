import axios from "axios";

const productApi = axios.create({
	baseURL: "https://dummyjson.com/",
});

export const getProducts = async (endpoints: string) => {
	const allProducts = await productApi.get(`/products/category/${endpoints}`);
	return allProducts;
	// const endpoints = [
	// 	"/products/category/womens-dresses",
	// 	"/products/category/mens-shirts",
	// 	"/products/category/womens-shoes",
	// 	"/products/category/womens-bags",
	// 	"/products/category/mens-watches",
	// 	"/products/category/womens-jewellery",
	// ];
	// axios.all(endpoints.map((endpoint) => productApi.get(endpoint))).then(
	// 	axios.spread(
	// 		(
	// 			{ data: womendress },
	// 			{ data: menshirt },
	// 			{ data: womenshoes },
	// 			{ data: womensbag },
	// 			{ data: menswatches },
	// 			{ data: womenjewellery }
	// 		) => {
	// 			console.log([
	// 				womendress,
	// 				menshirt,
	// 				womenshoes,
	// 				womensbag,
	// 				menswatches,
	// 				womenjewellery,
	// 			]);
	// 			return [
	// 				womendress,
	// 				menshirt,
	// 				womenshoes,
	// 				womensbag,
	// 				menswatches,
	// 				womenjewellery,
	// 			];
	// 		}
	// 	)
	// );
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
	return menshirt.data;
	// const menswatches = await productApi.get("/products/category/mens-watches");
	// axios.all([menshirt, menswatches]).then(
	// 	axios.spread((mensShirtItem, mensWatchesItem) => {
	// 		const productsList = [
	// 			...mensShirtItem.data.products,
	// 			...mensWatchesItem.data.products,
	// 		];
	// 		console.log(productsList);
	// 		console.log("clicked");
	// 		return productsList;
	// 	})
	// );
};

export const searchProducts = async (product: string) => {
	const searchResults = await productApi.get(`/products/search?q=${product}`);
	console.log(searchResults);
};
