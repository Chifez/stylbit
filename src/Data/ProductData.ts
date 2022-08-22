import { product } from "./Types";
import Image1 from "../assets/alexander-jawfox-GNd5gstTSg8-unsplash.jpg";
import Image2 from "../assets/dami-adebayo-k6aQzmIbR1s-unsplash.jpg";
import Image3 from "../assets/deji-akinyele-ARm28szwP0o-unsplash.jpg";
import Image4 from "../assets/dom-hill-nimElTcTNyY-unsplash.jpg";
import Image5 from "../assets/oladimeji-odunsi-tUUmR82pq68-unsplash.jpg";

export const products: product[] = [
	{
		id: 1,
		image: Image1,
		// "../assets/alexander-jawfox-GNd5gstTSg8-unsplash.jpg",
		name: "the first style",
		newprice: "100",
		oldprice: "200",
		category: "category men",
	},
	{
		id: 2,
		image: Image2,
		name: "the first style",
		newprice: "50",
		oldprice: "150",
		category: "category women",
	},
	{
		id: 3,
		image: Image5,
		name: "the first style",
		newprice: "70",
		oldprice: "120",
		category: "category men",
	},
	{
		id: 4,
		image: Image4,
		name: "the first style",
		newprice: "150",
		oldprice: "200",
		category: "category men",
	},
	{
		id: 5,
		image: Image3,
		name: "the first style",
		newprice: "120",
		oldprice: "200",
		category: "category women",
	},
];
