import { Variants } from "framer-motion";
export const rotate: Variants = {
	animate: {
		rotate: 360,
		transition: {
			duration: 8,
			repeat: Infinity,
			ease: "linear",
		},
	},
};
