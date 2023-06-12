import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
// import { container, child } from "../utils/animations/preloaderAnim";

const Preloader = (props: { progress: number }) => {
  const [isReady, setIsReady] = useState(false);

  const { progress } = props;

  useEffect(() => {
    if (progress == 50) {
      setIsReady(true);
    }
  });
  return (
    <motion.div
      initial={{ y: "100" }}
      animate={{ y: "0" }}
      exit={{ y: "100%" }}
      className="flex flex-col items-center justify-center w-screen h-screen bg-primary text-white"
    >
        <motion.h1
          //  variants={child}

          className="text-center text-2xl uppercase"
        >
          Faloni
        </motion.h1>
    
      <motion.div
        // variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden"
      >
        <motion.span
          //  variants={child}
          className="flex gap-2 items-center"
        >
          {/* <p>Loading</p> */}
          <div className="w-[10rem] h-2 bg-white rounded-md">
            <div
              style={{ width: `${progress}%` }}
              className={`h-full rounded-md bg-secondary`}
            ></div>
          </div>
          {/* <p>{progress} %</p> */}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
