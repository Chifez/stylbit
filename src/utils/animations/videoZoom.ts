import { Variants } from "framer-motion";

export const zoomIn: Variants = {
  initial: {
    scale: 0.9,
  },

  animate: {
    scale: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};
