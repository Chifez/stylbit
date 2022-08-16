import React from "react";
import RoundButton from "../../components/RoundButton";

const MainFooter = () => {
	return (
		<div className="text-center">
			<div>
				<h2 className="uppercase text-[3rem]">brand partners</h2>
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
						className="px-10 py-1 border border-transparent text-black outline-none rounded-md"
					/>
					<RoundButton
						children="subscribe"
						extraclasses="px-5 py-2 font-semibold uppercase cursor-pointer"
					/>
				</div>
			</div>
			<footer className="py-5">
				<div className="flex justify-around items-start my-5">
					<h2 className="text-[1.5rem] uppercase">faloni</h2>
					<div className="flex flex-col capitalize">
						<a href="/" className="my-2">
							products
						</a>
						<a href="/" className="my-2">
							categories
						</a>
						<a href="/" className="my-2">
							Discounts
						</a>
					</div>
					<div className="flex flex-col capitalize">
						<a href="/" className="my-2">
							careers
						</a>
						<a href="/" className="my-2">
							Blogs
						</a>
						<a href="/" className="my-2">
							Become a partner
						</a>
					</div>
					<div className="flex flex-col capitalize">
						<a href="/" className="my-2">
							FAQ
						</a>
						<a href="/" className="my-2">
							about us
						</a>
					</div>
				</div>
				<p className="text-[1rem]"> &copy; 2022 Faloni.All Rights Reserved</p>
			</footer>
		</div>
	);
};

export default MainFooter;
