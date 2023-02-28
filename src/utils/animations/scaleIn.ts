import { Variants } from "framer-motion";
export const scaleIn: Variants = {
	hidden: {
		scale: 0,
		opacity: 0,
	},
	animate: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 0.2,
		},
	},
	exit: {
		scale: 0,
		opacity: 0,
		transition: {
			duration: 0.2,
		},
	},
};
