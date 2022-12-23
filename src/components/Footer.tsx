import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="p-3 text-center capitalize">
			<footer className="py-5">
				<div className="flex flex-col md:flex-row gap-2 justify-around items-start my-5">
					<div className="flex flex-col justify-start items-start my-2">
						<h2 className="text-[1.5rem] uppercase mb-2">faloni</h2>
						<p>fashion styling in simplicity</p>
						<p>Call Us : +23412345678</p>
						<p>send a mail : faloni@fashion.style</p>
					</div>
					<div className="flex flex-col justify-start items-start capitalize my-2">
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
					<div className="flex flex-col justify-start items-start capitalize my-2">
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
					<div className="flex flex-col justify-start items-start capitalize my-2">
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
			<h2>made by em_dev</h2>
		</div>
	);
};

export default Footer;
