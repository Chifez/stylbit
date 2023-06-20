import React from "react";
import { Link } from "react-router-dom";
import RoundButton from "../../components/RoundButton";
import hero1 from "../../assets/deji-akinyele-ARm28szwP0o-unsplash.webp";
import hero2 from "../../assets/alexander-jawfox-GNd5gstTSg8-unsplash.webp";
import { BsArrowDown } from "react-icons/bs";
import { FC } from "react";
import { motion } from "framer-motion";
import { child, container } from "../../utils/animations/TextReveal";
import {
  imageContainer,
  imageReveal,
} from "../../utils/animations/imageReveal";
import CircularText from "../../components/CircularText";

const MainHero = () => {
  const header1 = Array.from("NEW");
  const header2 = Array.from("FASHION");
  const header3 = Array.from("COLLECTIONS");
  // const scroll = scrollLetter.split("");

  return (
    <div className="relative h-full md:h-screen">
      <div className="relative top-0 md:top-5 flex flex-col md:flex-row justify-between items-start my-5 md:my-0 text-[2.45rem] md:text-[3.5rem] lg:text-[5rem] xl:text-[6rem] tracking-wider  md:tracking-widest font-black">
        <LetterAnimate data={header1} />
        <div className="flex flex-col items-start md:items-end gap-2 md:gap-5">
          <span className="flex justify-center items-center">
            <Link to="/products">
              <RoundButton
                children="view more"
                extraclasses="font-Hmid px-2 md:px-4 py-2 mr-2 whitespace-nowrap text-[0.6rem] md:text-[0.8rem] font-bold uppercase tracking-normal"
              />
            </Link>
            <LetterAnimate data={header2} />
          </span>
          <LetterAnimate data={header3} />
        </div>
      </div>
      <div className="relative md:-top-14 grid md:grid-cols-7 gap-2 items-end">
        <motion.div
          variants={imageContainer}
          initial="hidden"
          animate="visible"
          className="flex items-end gap-2 md:col-span-4 w-full"
        >
          <div className="relative h-[50vh] md:h-[70vh] w-fit overflow-hidden">
            <ImageAnimate imagedelay={0.8} />
            <img
              src={hero1}
              alt="hero1"
              className="h-full w-full md:w-[30vw] object-cover"
            />
          </div>
          <div className="relative h-[35vh] md:h-[55vh] w-fit overflow-hidden">
            <ImageAnimate imagedelay={1.1} />
            <img
              src={hero2}
              alt="hero2"
              className="h-full w-full md:w-[25vw] object-cover"
            />
          </div>
        </motion.div>
        <div className="flex flex-col justify-between items-center md:items-start md:col-span-3 h-[30vh] md:h-[55vh] text-sm text-justify w-full">
          <h2>
            The brand was originally aimed at men's fashion.In 1985 all women's
            fashion were launched in all its dimensions;from casual to the most
            urban{" "}
          </h2>
          <div className="flex items-center relative justify-center bg-transparent fill-white  w-[5rem] h-[5rem] rounded-full ">
            <div className="h-8 overflow-hidden">
              <motion.span
                className="flex flex-col gap-16"
                animate={{
                  y: [-30, 30],
                  opacity: [0.5, 0.5],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <BsArrowDown />
                <BsArrowDown />
              </motion.span>
            </div>
            <CircularText word=" - scroll down - scroll down - scroll down" />
          </div>
        </div>
      </div>
    </div>
  );
};

interface Props {
  data: string[];
}
const LetterAnimate: React.FC<Props> = ({ data }: Props) => {
  return (
    <motion.h2
      variants={container}
      initial="hidden"
      animate="visible"
      className="overflow-hidden leading-none my-1 md:my-0"
    >
      {data.map((letter: string, index: number) => (
        <motion.span key={index} variants={child} className="inline-block ">
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};

interface ImageProps {
  imagedelay?: number;
  extraclasses?: string;
}

const ImageAnimate: React.FC<ImageProps> = ({
  imagedelay,
  extraclasses,
}: ImageProps) => {
  return (
    <motion.div
      variants={imageReveal}
      animate="animate"
      transition={{
        duration: 0.7,
        type: "spring",
        delay: imagedelay ? imagedelay : 0,
        damping: 50,
        stiffness: 200,
      }}
      className={`absolute top-0 left-0 bg-primary h-full w-full z-10 ${extraclasses}`}
    ></motion.div>
  );
};
export default MainHero;
