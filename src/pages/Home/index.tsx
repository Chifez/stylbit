import React from "react";
import MainHero from "./MainHero";
import MainProducts from "./MainProducts";
import MainFooter from "./MainFooter";
import Layout from "../../components/Layout";

const Home = () => {
	return (
		<div className="px-4 md:px-8 bg-primary text-white">
			<Layout>
				<MainHero />
				<MainProducts />
				<MainFooter />
			</Layout>
		</div>
	);
};

export default Home;
