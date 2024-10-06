import React from "react";
import { motion } from "framer-motion";

import { images } from "../constants";

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header
      id="home"
      className="relative flex-1 w-full h-full flex justify-center items-center flex-col md:flex-row pt-[6rem] pb-[1rem] md:pb-[2rem] px-[2rem] md:px-[0rem] header"
    >
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="flex-[0.65] flex flex-col justify-start items-start h-full my-0 mx-[2rem] w-full mr-0"
      >
        <div className="w-full flex flex-col justify-start md:justify-end items-start md:items-end ">
          <div
            className="py-[1rem] px-[2rem] sm:py-[0.5rem] sm:px-[1rem] bg-white rounded-[15px] flex justify-center items-center flex-row w-full sm:w-[90%] max-w-[400px] mx-auto"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <span className="text-[3rem] xs:text-[3rem] sm:text-[2rem]">
              👋
            </span>
            <div className="ml-20 sm:ml-5">
              <p className="text-[1.75rem] sm:text-[1.25rem] lg:text-[1.5rem] text-left text-gray leading-6">
                Hello, welcome to
              </p>
              <div className="text-[2rem] sm:text-[0.5rem] lg:text-[2.5rem] font-[800] text-center text-black capitalize w-full">
                Sudama
              </div>
            </div>
          </div>

          <div
            className="py-[1rem] px-[2rem] bg-white rounded-[15px] flex flex-row w-auto flex-col mt-[3rem]"
            style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
          >
            <p className="w-full uppercase text-right">Freelance</p>
            <p className="w-full uppercase text-right">Developer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex-1 h-full flex justify-end items-end relative"
      >
        <img
          src={images.profile}
          alt="profile"
          className="w-full object-contain z-1"
        />
        <motion.img
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 1, ease: "easeInOut" }}
          src={images.circle}
          alt="profile_circle"
          className="absolute left-0 right-0 bottom-0 z-0 w-full h-[90%]"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="flex-[0.75] flex md:flex-row flex-wrap md:ml-0 justify-evenly items-start h-full ml-[1rem]"
      >
        {[images.flutter, images.sass, images.redux].map((circle, index) => {
          // Define conditional styles for each child element based on index
          const circleStyle =
            index === 0
              ? "w-[100px] h-[100px] m-[1rem]"
              : index === 1
              ? "w-[150px] h-[150px] m-[1.75rem]"
              : "w-[70px] h-[70px] m-[0.75rem]";

          return (
            <div
              key={`circle-${index}`}
              className={`${circleStyle} rounded-full bg-white`}
              style={{ boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <img
                src={circle}
                alt="profileBG"
                className="w-[60%] h-[60%] object-contain"
              />
            </div>
          );
        })}
      </motion.div>
    </header>
  );
};

export default Header;
