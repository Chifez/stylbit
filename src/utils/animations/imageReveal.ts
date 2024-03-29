import { Variants } from "framer-motion";

export const imageContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 2,
      delayChildren: 2,
    },
  },
};

export const imageReveal: Variants = {
  animate: {
    opacity: [1, 1],
    y: ["0%", "100%"],
  },
};
