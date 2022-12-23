import React from "react";
import Footer from "../../components/Footer";
import RoundButton from "../../components/RoundButton";

const MainFooter = () => {
	return (
		<div className="mt-5 text-center">
			<div>
				{/* <h2 className="uppercase text-[3rem]">brand partners</h2> */}
			</div>
			<div>
				<h2 className="uppercase text-[2rem] md:text-[4rem] font-bold tracking-wider">
					Newsletters
				</h2>
				<p className="text-[1rem] md:text-[1.2rem]">
					Sign up to our news letter to get updates on new arrivals events and
					special
				</p>
				<div className="my-5 flex gap-2 justify-center items-center">
					<input
						type="text"
						placeholder="Email address"
						className="w-[60vw] md:w-[25vw] py-1 px-2 border border-transparent placeholder-black text-black outline-none rounded-sm"
					/>
					<RoundButton
						children="subscribe"
						extraclasses="px-5 py-2 font-semibold uppercase cursor-pointer"
					/>
				</div>
			</div>
		</div>
	);
};

export default MainFooter;
