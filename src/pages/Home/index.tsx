import React from "react";
import MainHero from "./MainHero";
import MainProducts from "./MainProducts";
import MainFooter from "./MainFooter";
import Layout from "../../components/Layout";
import MainVideo from "./MainVideo";

const Home = () => {
  return (
    <Layout>
      <div className="px-4 md:px-8 text-white relative">
        <MainHero />
        <MainVideo />
        <MainProducts />
        <MainFooter />
      </div>
    </Layout>
  );
};

export default Home;
