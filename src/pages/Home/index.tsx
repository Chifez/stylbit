import React from "react";
import MainHero from "./MainHero";
import MainProducts from "./MainProducts";
import MainFooter from "./MainFooter";
import Layout from "../../components/Layout";

const index = () => {
	return (
		<div className="px-5">
			<Layout>
				<MainHero />
				<MainProducts />
				<MainFooter />
			</Layout>
		</div>
	);
};

export default index;
