import { Variants } from "framer-motion";

export const HomeContainer: Variants = {
  hidden: {},
  visible: {
    opacity: [0, 1],
    background: ["0%", "100%"],
    transition: {
      staggerChildren: 2,
      delayChildren: 2,
      duration: 2,
    },
  },
  exit: {
    opacity: [1, 0],
    y: ["100%", "0%"],
  },
};

export const HomeReveal: Variants = {
  animate: {
    opacity: [1, 1],
    y: ["0%", "100%"],
  },
};
