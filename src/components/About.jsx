import React from 'react';
import { motion } from "framer-motion";

const About = () => {

  const view = {
    offscreen: {
      y: '20vh',
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.1,
        duration: 1.4,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section
      variants={view}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{  once: true, amount: 0.1 }}
      id="about"
      className="w-full h-auto md:mt-[30px]"
    >
      <h2 
        className="w-full mt-5 z-10 text-center relative text-3xl font-Merriweather font-bold before:h-0.5 before:w-1/2 before:bg-black before:absolute before:top-1/2 before:right-0 before:-z-10 after:h-0.5 after:w-1/2 after:bg-black after:absolute after:top-1/2 after:left-0 after:-z-10 dark:before:bg-white dark:after:bg-white"
      >
        <span
          className="w-80 bg-white z-10 py-0 px-5 text-black md:text-5xl dark:bg-black dark:text-white"
        >About me
        </span>
      </h2>
      <p
        className="w-full px-6 mt-4 mb-4 text-justify text-secondary-black text-base font-Lato font-normal md:px-[25%] lg:px-[32%] xl:px-[36%] dark:text-secondary-white"
      >
        I am a young physics student who learned all that he knows about coding thanks to <a href="https://platzi.com/" target="_blank" rel="noopener noreferrer" className="underline">Platzi</a>, <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" className="underline">Stack Overflow</a> and many hours of reading through documentation files. So, basically I am a self taught programmer. <br/><br/> I am currently looking for a job as a frontend developer. Contact me to start working together.
      </p>
    </motion.section>
  )
}

export {About}