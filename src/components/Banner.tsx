import React from "react";
import { Outlet } from "react-router-dom";

const Banner = () => {
	return (
		<div className="grid grid-cols-3 bg-primary">
			<div className="border border-[blue] text-white">
				<p>The best place to find the perfect item that suits your style</p>
			</div>
			<div className="col-span-2 rounded-tl-3xl rounded-bl-3xl bg-white ml-5">
				<Outlet />
			</div>
		</div>
	);
};

export default Banner;
