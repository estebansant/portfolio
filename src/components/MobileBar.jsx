import React from 'react';
import reactBlack from '../assets/icons/black/react_black.svg';
import portfolioBlack from '../assets/icons/black/portfolio_black.svg';
import emailBlack from '../assets/icons/black/email_black.svg';
import moon from '../assets/icons/black/moon.svg';
import sun from '../assets/icons/white/sun.svg';
import email from '../assets/icons/white/email.svg';
import portfolio from '../assets/icons/white/portfolio.svg';
import react from '../assets/icons/white/react.svg';
import {motion} from 'framer-motion';

const MobileBar = ({theme, handleTheme}) => {

  return (
    <motion.section
      initial={{y: "30vh", opacity: 0}}
      animate={{y: 0, opacity: 1}}
      transition={{type:"spring", duration: 2, ease:"easeIn"}}
      className="w-full h-auto z-20 p-4 fixed bottom-0 bg-secondary-white rounded-t-lg border-solid border-2 border-b-0 border-black lg:hidden dark:bg-secondary-black dark:border-white"
    >
      <div className="w-full h-full flex items-center justify-evenly gap-3">
        <a href="#skills" className="w-8 h-8">
          {!theme &&
            <img src={react} alt="go to skills" className="w-full h-full"/>
          }
          {theme &&
            <img src={reactBlack} alt="go to skills" className="w-full h-full"/>
          }
        </a>

        <a href="#experience" className="w-8 h-8">
          {!theme &&
            <img src={portfolio} alt="go to portfolio" className="w-full h-full"/>
          }
          {theme && 
            <img src={portfolioBlack} alt="go to portfolio" className="w-full h-full"/>
          }
        </a>

        <a href="#contact" className="w-8 h-8">
          {!theme &&
            <img src={email} alt="go to contact" className="w-full h-full"/>
          }
          {theme && 
            <img src={emailBlack} alt="go to contact" className="w-full h-full"/>
          }
        </a>

        <button className="w-8 h-8" onClick={() => handleTheme()}>
            {!theme && 
              <img src={sun} alt="switch to darkmode" className="w-full h-full"/>
            }
            {theme && 
              <img src={moon} alt="switch to lightmode" className="w-full h-full"/>
            }
        </button>
      </div>
    </motion.section>
  )
}

export {MobileBar}