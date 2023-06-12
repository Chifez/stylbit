import { Variants } from "framer-motion";

export const container: Variants = {
  hidden: {
    // opacity: 1,
    // height: "100%",
    // y: "100%",
  },
  visible: {
    // opacity: 0,
    // height: "0",
    transition: {
      staggerChildren: 0.15,
    },
  },
  exit: {
    // opacity: 1,
    // height: "100%",
    // y: "-100%",
  },
};

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
  exit: {
    opacity: 0,
    y: "-200%",
  },
};
