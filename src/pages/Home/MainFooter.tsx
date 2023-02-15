import React from "react";
import Footer from "../../components/Footer";
import RoundButton from "../../components/RoundButton";
import mango from "../../assets/brands/mango.jpg";
import gucci from "../../assets/brands/gucci.png";
import lacoste from "../../assets/brands/lacoste.png";
import fendi from "../../assets/brands/fendi.png";
import chanel from "../../assets/brands/chanel.png";

import { motion } from "framer-motion";

const MainFooter = () => {
	const marque = {
		animate: {
			x: [0, -500],
			transition: {
				x: {
					repeat: Infinity,
					repeatType: "loop",
					duration: 10,
					ease: "linear",
				},
			},
		},
	};
	return (
		<div className="mt-5 text-center">
			<div className="flex gap-2 justify-center items-center w-full">
				<span className="flex-1 h-[0.5px] md:h-[1px] bg-secondary"></span>
				<h2 className="uppercase text-[2rem] md:text-[4rem] font-bold tracking-wider">
					Brands
				</h2>
			</div>
			<div className="relative overflow-hidden w-full">
				<h2 className="uppercase text-[1rem]">our brand partners</h2>
				<motion.span
					variants={marque}
					className="flex items-center justify-center gap-2 w-[90vw] overflow-hidden"
				>
					<motion.span
						variants={marque}
						animate="animate"
						className="flex gap-10 mx-2"
					>
						<img src={mango} alt="brand" className="w-[100px] h-[100px]" />
						<img src={gucci} alt="brand" className="w-[100px] h-[100px]" />
						<img src={fendi} alt="brand" className="w-[100px] h-[100px]" />
						<img src={lacoste} alt="brand" className="w-[100px] h-[100px]" />
						<img src={chanel} alt="brand" className="w-[100px] h-[100px]" />

						<img src={mango} alt="brand" className="w-[100px] h-[100px]" />
						<img src={gucci} alt="brand" className="w-[100px] h-[100px]" />
						<img src={fendi} alt="brand" className="w-[100px] h-[100px]" />
						<img src={lacoste} alt="brand" className="w-[100px] h-[100px]" />
						<img src={chanel} alt="brand" className="w-[100px] h-[100px]" />

						<img src={mango} alt="brand" className="w-[100px] h-[100px]" />
						<img src={gucci} alt="brand" className="w-[100px] h-[100px]" />
						<img src={fendi} alt="brand" className="w-[100px] h-[100px]" />
						<img src={lacoste} alt="brand" className="w-[100px] h-[100px]" />
						<img src={chanel} alt="brand" className="w-[100px] h-[100px]" />
					</motion.span>
				</motion.span>
			</div>
			<div>
				<h2 className="uppercase text-[2rem] md:text-[4rem] font-bold tracking-wider">
					Newsletter
				</h2>
				<p className="text-[1rem] md:text-[1.2rem]">
					Sign up to our news letter to get updates on new arrivals events and
					special
				</p>
				<div className="my-5 flex gap-2 justify-center items-center">
					<input
						type="text"
						placeholder="Email Address"
						className="w-[60vw] md:w-[25vw] py-1 px-2 border border-transparent font-Hlight placeholder:font-Hmid placeholder-black text-black outline-none rounded-sm"
					/>
					<RoundButton
						children="subscribe"
						extraclasses="px-5 py-2 font-Hmid uppercase cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainFooter;
