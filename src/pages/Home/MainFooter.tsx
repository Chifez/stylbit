import React from "react";
import Footer from "../../components/Footer";
import RoundButton from "../../components/RoundButton";

const MainFooter = () => {
	return (
		<div className="text-center">
			<div>
				{/* <h2 className="uppercase text-[3rem]">brand partners</h2> */}
			</div>
			<div>
				<h2 className="uppercase text-[2rem]">Newsletters</h2>
				<p className="text-[1rem]">
					sign up to our news letter to get updates on new arrivals events and
					special
				</p>
				<div className="my-5 flex justify-center items-center">
					<input
						type="text"
						placeholder="email address"
						className="px-10 py-1 border border-transparent text-black outline-none rounded-sm"
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
