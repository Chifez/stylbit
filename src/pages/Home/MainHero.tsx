import React from "react";
import { Link } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import hero1 from "../../assets/deji-akinyele-ARm28szwP0o-unsplash.webp";
import hero2 from "../../assets/alexander-jawfox-GNd5gstTSg8-unsplash.webp";
import { BsArrowDown } from "react-icons/bs";
import { FC } from "react";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

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

	//
	return (
		<div>
			<div className="relative top-5 flex justify-between items-start text-[7rem]">
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
				<div className="flex flex-col items-end gap-5">
					<span className="flex justify-center items-center">
						<Link to="/products">
							<RoundButton
								children="view more"
								extraclasses="px-3 py-2 w-fit text-[0.7rem] font-bold uppercase"
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
			<div className="grid grid-cols-3 gap-5">
				<img src={hero1} alt="hero1" />
				<img src={hero2} alt="hero2" className="mt-[5.5rem]" />
				<div className="relative mt-[5.5rem] text-sm">
					<h2>
						The brand was originally aimed at men's fashion.In 1985 all women's
						fashion were launched;from casual to the most urban{" "}
					</h2>
					<div className="absolute bottom-0 bg-transparent fill-white border-[0.5px] border-secondary w-max p-7 rounded-full overflow-hidden">
						<motion.span>
							<BsArrowDown />
						</motion.span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainHero;
