import React from 'react';
import esteban from '../assets/icons/Esteban_Santiago.svg';
import estebanWhite from '../assets/icons/Esteban_Santiago_white.svg'
import moon from '../assets/icons/black/moon.svg';
import sun from '../assets/icons/white/sun.svg';
import {motion} from 'framer-motion';
import cv from '../assets/downloadable/CV-Esteban_Santiago.pdf';

const Header = ({theme, handleTheme}) => {

  return (
    <motion.header
      initial={{y: "-1vh", opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{type:"spring", duration: 1.2, ease:"easeIn"}}
      id="header"
      className="w-screen h-12 bg-secondary-white fixed top-0 z-20 shadow-md2 lg:flex lg:justify-between lg:items-center lg:px-[100px] dark:bg-secondary-black"
    >
        <div className="w-screen h-full flex items-center justify-center lg:w-auto">
            <a href="#home" className="w-40 h-8/9 mt-1">
                {theme && 
                  <img className="w-full h-full" src={esteban} alt="Esteban Santiago"/>
                }
                {!theme &&
                  <img className="w-full h-full" src={estebanWhite} alt="Esteban Santiago"/>
                }
            </a>
        </div>
        <nav className="hidden lg:flex lg:justify-around lg:items-center lg:gap-8">
          <a href="#skills" className="text-center w-auto h-auto">
            <p className="font-Lato text-l font-semibold text-black dark:text-white hover:underline">Skills</p>
          </a>
          <a href="#portfolio" className="text-center w-auto h-auto">
            <p className="font-Lato text-l font-semibold text-black dark:text-white hover:underline">Portfolio</p>
          </a>
          <a href="#experience" className="text-center w-auto h-auto">
            <p className="font-Lato text-l font-semibold text-black dark:text-white hover:underline">Experience</p>
          </a>
          <a href="#contact" className="text-center w-auto h-auto">
            <p className="font-Lato text-l font-semibold text-black dark:text-white hover:underline">Contact</p>
          </a>
          <a
            href={cv}
            download="CV-Esteban_Santiago"
            target='_blank'
            className="text-center w-auto h-auto"
          >
            <p className="font-Lato text-l font-semibold text-black dark:text-white hover:underline">Download CV</p>
          </a>
          <button onClick={() => handleTheme()} className="w-6 h-6 transition transition-all duration-250 ease-in-out hover:scale-[115%]">
            {!theme && 
              <img src={sun} alt="switch to darkmode" className="w-full h-full"/>
            }
            {theme && 
              <img src={moon} alt="switch to lightmode" className="w-full h-full"/>
            }
          </button>
        </nav>
    </motion.header>
  )
}

export {Header}