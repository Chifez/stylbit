import axios from "axios";

const productApi = axios.create({
	baseURL: "https://dummyjson.com/",
});

export const getProducts = async () => {
	const womens = await productApi.get("/products/category/womens-dresses");
	const mens = await productApi.get("/products/category/mens-shirts");
	axios.all([womens, mens]).then(
		axios.spread((womensItem, mensItem) => {
			const productsList = [
				...womensItem.data.products,
				...mensItem.data.products,
			];
			console.log(productsList);
		})
	);
};
