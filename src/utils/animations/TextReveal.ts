import { Variants } from "framer-motion";
export const child: Variants = {
	hidden: {
		opacity: 0,
		y: "200%",

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
