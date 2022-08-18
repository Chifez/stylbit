import React from "react";
import RoundButton from "../../components/RoundButton";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

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
			<footer className="py-5">
				<div className="flex justify-around items-start my-5">
					<div className="flex flex-col justify-start items-start">
						<h2 className="text-[1.5rem] uppercase mb-2">faloni</h2>
						<p>fashion styling in simplicity</p>
						<p>Call Us : +23412345678</p>
						<p>send a mail : faloni@fashion.style</p>
					</div>
					<div className="flex flex-col capitalize">
						<a href="/" className="my-2">
							<h2>products</h2>
						</a>
						<a href="/" className="my-2">
							categories
						</a>
						<a href="/" className="my-2">
							top picks
						</a>
						<a href="/" className="my-2">
							Discounts
						</a>
					</div>
					<div className="flex flex-col capitalize">
						<a href="/" className="my-2">
							<h2>careers</h2>
						</a>
						<a href="/" className="my-2">
							Become a partner
						</a>
						<a href="/" className="my-2">
							Blogs
						</a>
					</div>
					<div className="flex flex-col capitalize">
						<a href="/" className="my-2">
							<h2>FAQ</h2>
						</a>
						<a href="/" className="my-2">
							about us
						</a>
						<a href="/" className="my-2">
							help
						</a>
					</div>
				</div>
				<div className="flex justify-center items-center m-3">
					<AiFillInstagram className="w-7 h-7 mx-2" />
					<AiFillTwitterCircle className="w-7 h-7 mx-2" />
					<FaFacebook className="w-7 h-7 mx-2" />
				</div>
				<p className="text-[1rem] text-secondary">
					&copy; 2022 Faloni. All Rights Reserved
				</p>
			</footer>
		</div>
	);
};

export default MainFooter;
