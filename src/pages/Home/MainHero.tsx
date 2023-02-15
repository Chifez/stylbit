import { Link } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import hero1 from "../../assets/deji-akinyele-ARm28szwP0o-unsplash.webp";
import hero2 from "../../assets/alexander-jawfox-GNd5gstTSg8-unsplash.webp";
import { BsArrowDown } from "react-icons/bs";
import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";
// import { getProducts } from "../../features/api/product.api";

interface Props extends HTMLMotionProps<"div"> {
	delay?: number;
	duration?: number;
}

const MainHero: FC<Props> = ({ delay = 2, duration = 0.15 }: Props) => {
	const header1 = Array.from("NEW");
	const header2 = Array.from("FASHION");
	const header3 = Array.from("COLLECTIONS");

	//animations

	const container: Variants = {
		hidden: {},
		visible: (i: number = 1) => ({
			transition: {
				staggerChildren: duration,
				delayChildren: i * delay,
			},
		}),
	};

	const child: Variants = {
		hidden: {
			opacity: 0,
			y: "100%",

			transition: {
				type: "spring",
				damping: 50,
				stiffness: 200,
			},
		},
		visible: {
			opacity: 1,
			y: "0%",

			transition: {
				type: "spring",
				damping: 50,
				stiffness: 200,
			},
		},
	};

	// place the animation component in a seperate component
	return (
		<div>
			<div className="relative top-0 md:top-5 flex flex-col md:flex-row justify-between items-start my-5 md:my-0 text-[3.1rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] tracking-widest font-black">
				<motion.h2
					className="overflow-hidden h-fit py-0 leading-none"
					variants={container}
					initial="hidden"
					animate="visible"
				>
					{header1.map((letter: string, index: number) => (
						<motion.span
							key={index}
							variants={child}
							className="inline-block h-fit"
						>
							{letter}
						</motion.span>
					))}
				</motion.h2>
				<div className="flex flex-col items-start md:items-end gap-2 md:gap-5">
					<span className="flex justify-center items-center">
						<Link to="/products">
							<RoundButton
								children="view more"
								extraclasses="font-Hmid px-2 md:px-4 py-2 mr-2 whitespace-nowrap text-[0.6rem] md:text-[0.8rem] font-bold uppercase tracking-normal"
							/>
						</Link>
						<motion.h2
							variants={container}
							initial="hidden"
							animate="visible"
							className="overflow-hidden leading-none"
						>
							{header2.map((letter, index) => (
								<motion.span
									key={index}
									variants={child}
									className="inline-block"
								>
									{letter}
								</motion.span>
							))}
						</motion.h2>
					</span>
					<motion.h2
						variants={container}
						initial="hidden"
						animate="visible"
						className="overflow-hidden leading-none"
					>
						{header3.map((letter, index) => (
							<motion.span
								key={index}
								variants={child}
								className="inline-block"
							>
								{letter}
							</motion.span>
						))}
					</motion.h2>
				</div>
			</div>
			<div className="relative md:-top-14 grid md:grid-cols-7 gap-2 items-end">
				<div className="flex items-end gap-2 md:col-span-4 w-full">
					<div className="h-[50vh] md:h-[70vh] w-fit">
						<img
							src={hero1}
							alt="hero1"
							className="h-full w-full md:w-[30vw] object-cover"
						/>
					</div>
					<div className="h-[35vh] md:h-[55vh] w-fit">
						<img
							src={hero2}
							alt="hero2"
							className="h-full w-full md:w-[25vw] object-cover"
						/>
					</div>
				</div>
				<div className="flex flex-col justify-between items-center md:items-start md:col-span-3 h-[30vh] md:h-[55vh] text-sm text-justify w-full">
					<h2>
						The brand was originally aimed at men's fashion.In 1985 all women's
						fashion were launched in all its dimensions;from casual to the most
						urban{" "}
					</h2>
					<div className="flex items-center justify-center bg-transparent fill-white border-[0.5px] border-secondary w-[5rem] h-[5rem] rounded-full overflow-hidden">
						<motion.span
							className="flex flex-col gap-12"
							// animate={{
							// 	y: [-20, 40],
							// 	opacity: [0.5, 0.5],
							// }}
							// transition={{ duration: 0.6, repeat: Infinity }}
						>
							<BsArrowDown />
							<BsArrowDown />
							<BsArrowDown />
						</motion.span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
