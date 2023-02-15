import React from "react";
import { Outlet } from "react-router-dom";

const Banner = () => {
	return (
		<div className="grid md:grid-cols-5 bg-primary overflow-hidden">
			<div
				className={`hidden md:block relative col-span-2 bg-secondary bg-blend-overlay text-primary bg-[url('./assets/oladimeji-odunsi-tUUmR82pq68-unsplash.webp')] bg-cover`}
			>
				<footer className="absolute bottom-2 left-[25%] text-white">
					<p>&copy; 2022 Faloni. All rights reserved</p>
				</footer>
			</div>
			<div className="md:col-span-3 text-white ">
				<Outlet />
			</div>
		</div>
	);
};

export default Banner;
