import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { rotate } from "../utils/animations/rotateText";

const CircularText = (props: { word: string }) => {
	const [deg, setDeg] = useState({ rad: 0, char: 0 });
	const { word } = props;
	const containerRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		// const container = containerRef.current;
		const radius = 96 / 2;
		const charAngle = 360 / word.length;
		setDeg({ ...deg, rad: radius, char: charAngle });
	}, [word]);

	return (
		<motion.div
			className="absolute w-[6rem] h-[6rem] rounded-full flex items-center tracking-widest justify-center uppercase "
			ref={containerRef}
			variants={rotate}
			animate="animate"
		>
			{word.split("").map((char: string, i: number) => (
				<motion.span
					key={i}
					className={`absolute top-0 left-[50%] inline-block  text-[0.6rem]`}
					style={{
						transform: `rotate(${deg.char * i}deg)`,
						transformOrigin: `0 ${deg.rad}px 0`,
						// letterSpacing: "10px",
					}}
				>
					{char}
				</motion.span>
			))}
		</motion.div>
	);
};

export default CircularText;
