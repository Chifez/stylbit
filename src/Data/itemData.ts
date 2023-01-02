// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getProducts } from "../features/api/product.api";

// const Products = ()=>{
// 	const [productCall,setProductCall] = useState<(()=>void)>(getProducts);

// 	const {data,isLoading,error,isError} = useQuery({queryKey:['products'], queryFn:productCall});

// }
import { product } from "./Types";
import Image1 from "../assets/alexander-jawfox-GNd5gstTSg8-unsplash.webp";
import Image2 from "../assets/oladimeji-odunsi-tUUmR82pq68-unsplash.webp";
// import Image2 from "../assets/dami-adebayo-k6aQzmIbR1s-unsplash.webp";
import Image3 from "../assets/deji-akinyele-ARm28szwP0o-unsplash.webp";
import Image4 from "../assets/dom-hill-nimElTcTNyY-unsplash.webp";
import Image5 from "../assets/oladimeji-odunsi-tUUmR82pq68-unsplash.webp";

export const products: product[] = [
	{
		id: "1",
		image: Image1,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 100,
		oldprice: 200,
		category: "category men",
		toppick: true,
	},
	{
		id: "2",
		image: Image3,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 50,
		oldprice: 150,
		category: "category women",
		toppick: false,
	},
	{
		id: "3",
		image: Image2,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 70,
		oldprice: 120,
		category: "category men",
		toppick: true,
	},
	{
		id: "4",
		image: Image1,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 150,
		oldprice: 200,
		category: "category men",
		toppick: false,
	},
	{
		id: "5",
		image: Image5,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "6",
		image: Image3,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "7",
		image: Image4,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "8",
		image: Image1,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: true,
	},
	{
		id: "9",
		image: Image2,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "10",
		image: Image3,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: true,
	},
	{
		id: "11",
		image: Image1,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: true,
	},
	{
		id: "12",
		image: Image5,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: true,
	},
	{
		id: "13",
		image: Image2,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "14",
		image: Image1,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "15",
		image: Image5,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "16",
		image: Image2,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "17",
		image: Image3,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: true,
	},
	{
		id: "18",
		image: Image5,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
	{
		id: "19",
		image: Image1,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: false,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: true,
	},
	{
		id: "20",
		image: Image2,
		name: "the first style",
		desc: "a little description about the product",
		fulldesc:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, culpa. Vero saepe iste aperiam quis tempore ipsam ullam pariatur distinctio?",
		instock: true,
		newprice: 120,
		oldprice: 200,
		category: "category women",
		toppick: false,
	},
];
