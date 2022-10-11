import React from "react";
import { Outlet } from "react-router-dom";

const Banner = () => {
	return (
		<div className="grid grid-cols-5 bg-primary">
			<div
				className={`relative col-span-2  bg-secondary bg-blend-overlay text-primary bg-[url('./assets/oladimeji-odunsi-tUUmR82pq68-unsplash.webp')] bg-cover`}
			>
				{/* <p className="text-center">
					The best place to find the perfect item that suits your style
				</p> */}
				<footer className="absolute bottom-2 left-[25%] text-white">
					<p>&copy; 2022 Faloni. All rights reserved</p>
				</footer>
			</div>
			<div className="col-span-3 text-white">
				{/* <h2 className="font-semibold text-[1.2rem] p-2">Faloni</h2> */}
				<Outlet />
			</div>
		</div>
	);
};

export default Banner;
