import { delay, motion } from "framer-motion";
import { container, child } from "../utils/animations/preloaderAnim";

const Preloader = (props: { progress: number }) => {
  const { progress } = props;

  return (
    <motion.div className="flex flex-col items-center justify-center w-screen h-screen bg-primary text-white">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <motion.h1 variants={child} className="text-center text-2xl uppercase">
          Faloni
        </motion.h1>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <motion.span variants={child} className="flex gap-2 items-center px-2">
          <p>Loading</p>
          <div className="w-[7rem] h-[0.07px] bg-white">
            <div
              style={{ width: `${progress}%` }}
              className={`h-full bg-secondary`}
            ></div>
          </div>
          <p>{progress} %</p>
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
