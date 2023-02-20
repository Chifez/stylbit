import React from "react";
import MainHero from "./MainHero";
import MainProducts from "./MainProducts";
import MainFooter from "./MainFooter";
import Layout from "../../components/Layout";
import MainVideo from "./MainVideo";
import useProdFetchId from "../../hooks/useProdFetchId";

const Home = () => {
	const { fetchedProducts: products } = useProdFetchId("toppick", true);

	return (
		<div className="px-4 md:px-8 bg-primary text-white">
			<Layout>
				<MainHero />
				<MainVideo />
				<MainProducts product={products} />
				<MainFooter />
			</Layout>
		</div>
	);
};

export default Home;
