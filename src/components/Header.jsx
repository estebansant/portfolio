import React from 'react';
import esteban from '../assets/icons/Esteban_Santiago.svg';
import moonBlack from '../assets/icons/black/moon_black.svg';

const Header = () => {
  return (
    <header id="header" className="w-screen h-12 bg-secondary-white fixed top-0 z-20 shadow-md2 lg:flex lg:justify-between lg:items-center lg:px-[100px]">
        <div className="w-screen h-full flex items-center justify-center lg:w-auto">
            <a href="#home" className="w-40 h-8/9 mt-1">
                <img className="w-full h-full" src={esteban} alt="Esteban Santiago"/>
            </a>
        </div>
        <nav className="hidden lg:flex lg:justify-around lg:items-center lg:gap-8">
          <a href="#skills" className="text-center w-auto h-auto hover:underline">
            <p className="font-Lato text-l font-semibold text-black">Skills</p>
          </a>
          <a href="#portfolio" className="text-center w-auto h-auto hover:underline">
            <p className="font-Lato text-l font-semibold text-black">Portfolio</p>
          </a>
          <a href="#experience" className="text-center w-auto h-auto hover:underline">
            <p className="font-Lato text-l font-semibold text-black">Experience</p>
          </a>
          <a href="#contact" className="text-center w-auto h-auto hover:underline">
            <p className="font-Lato text-l font-semibold text-black">Contact</p>
          </a>
          <a href="#" className="text-center w-auto h-auto hover:underline">
            <p className="font-Lato text-l font-semibold text-black">Download CV</p>
          </a>
          <button className="w-6 h-6 transition transition-all duration-250 ease-in-out hover:scale-[115%]">
            <img src={moonBlack} alt="switch to darkmode" className="w-full h-full"/>
          </button>
        </nav>
    </header>
  )
}

export {Header}