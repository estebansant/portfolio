import React from 'react';
import { SkillsData } from '../dataStructures/SkillsData';
import { motion } from "framer-motion";

const Skills = () => {

  const screen = {
    offscreen: {
      x: '-30vw',
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        delay: 0.4,
        duration: 1.6,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section 
      variants={screen}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{  once: true, amount: 0.4 }}
      id="skills"
      className="w-full h-auto mt-6 px-6 md:px-[50px] md:mt-10 special:px-[125px] lg:px-[17.5%] xl:px-[20%]"
    >
      <h2 className="font-Merriweather text-black font-bold text-3xl md:text-5xl lg:px-[75px] dark:text-white">Skills</h2>
      <div className="w-auto h-[200px] flex items-center overflow-x-auto overscroll-x-contain scroll-smooth mr-4 md:overflow-none md:overscroll-none md:place-items-center md:grid md:grid-cols-3 md:gap-4 lg:grid-cols-4 md:mr-0 md:h-auto">

        {SkillsData.map((skill, index) => {
          return(
            <div key={index} className="w-[145px] h-[175px] bg-secondary-white flex flex-none flex-col justify-center items-center p-7 rounded-lg shadow-md mr-3 ml-3 transition transition-all duration-300 ease-in-out hover:bg-secondary-black text-secondary-black hover:text-secondary-white md:w-[80%] md:h-[80%] dark:bg-secondary-black dark:hover:bg-secondary-white text-black hover:text-white dark:text-white dark:hover:text-black">
              <div className="w-5/5 h-4/5">
                <img className="w-full h-full" src={skill.image} alt={skill.alt}/>
              </div>
              <div className="w-full h-auto text-center mt-4">
                <p className="font-Merriweather font-bold text-xl">{skill.title}</p>
              </div>
            </div>
          )
        })}

      </div>
    </motion.section>
  )
}

export {Skills}