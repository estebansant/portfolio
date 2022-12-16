import React from 'react';
import reactBlack from '../assets/icons/black/react_black.svg';
import portfolioBlack from '../assets/icons/black/portfolio_black.svg';
import emailBlack from '../assets/icons/black/email_black.svg';
import moon from '../assets/icons/black/moon.svg';
import sun from '../assets/icons/white/sun.svg';

const MobileBar = ({theme, handleTheme}) => {

  return (
    <section className="w-full h-auto z-20 p-4 fixed bottom-0 bg-secondary-white rounded-t-lg border-solid border-2 border-black lg:hidden">
      <div className="w-full h-full flex items-center justify-evenly gap-3">
        <a href="#skills" className="w-8 h-8">
          <img src={reactBlack} alt="go to skills" className="w-full h-full"/>
        </a>

        <a href="#experience" className="w-8 h-8">
          <img src={portfolioBlack} alt="go to portfolio" className="w-full h-full"/>
        </a>

        <a href="#contact" className="w-8 h-8">
          <img src={emailBlack} alt="go to contact" className="w-full h-full"/>
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
    </section>
  )
}

export {MobileBar}