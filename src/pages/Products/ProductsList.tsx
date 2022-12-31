import { useState, useEffect } from "react";
import ProductCard from "../../components/ProductCard";
import { products } from "../../Data/itemData";
import { product } from "../../Data/Types";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { useQuery } from "@tanstack/react-query";
import {
	getProducts,
	getMensProducts,
	fetchProduct,
} from "../../features/api/product.api";
import { useAppSelector } from "../../app/hooks";

const ProductsList = () => {
	const [currentItems, setCurrentItems] = useState<product[]>([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 9;

	const getprodAPi = useAppSelector((state) => state?.reducertwo.getApi);
	const { data, isLoading, error, isError } = useQuery({
		queryKey: ["products"],
		queryFn: getProducts,
	});

	useEffect(() => {
		console.log(data);
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(products.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(products.length / itemsPerPage));
	}, [itemOffset, itemsPerPage]);

	const handlePageClick = (e: any) => {
		const newOffset = (e.selected * itemsPerPage) % products.length;
		setItemOffset(newOffset);
	};
	return (
		<>
			<h2 className="text-[3rem] font-semibold uppercase py-2">Top picks</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-2">
				{currentItems.map((products: product) => (
					<ProductCard productItem={products} key={products.id} />
				))}
			</div>
			<ReactPaginate
				breakLabel={"..."}
				nextLabel={<MdArrowForwardIos />}
				onPageChange={handlePageClick}
				marginPagesDisplayed={0}
				pageRangeDisplayed={2}
				pageCount={pageCount}
				previousLabel={<MdArrowBackIosNew />}
				className="flex items-center gap-2 p-2 focus:outline-none"
				pageClassName="w-8 h-8 bg-transparent focus:outline-none border hover:bg-[white] hover:text-[#1c1f22] rounded-full flex justify-center items-center"
				activeClassName="bg-[white] text-[#1c1f22] font-semibold focus:outline-none ring-0"
				nextClassName="relative border border-[#E4E4E4] focus:outline-none rounded-md p-1 hover:bg-transparent hover:text-white"
				previousClassName="relative border border-[#E4E4E4] focus:outline-none rounded-md p-1 hover:bg-transparent hover:text-white"
			/>
		</>
	);
};

export default ProductsList;
