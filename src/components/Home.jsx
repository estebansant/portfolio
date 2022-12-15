import React from 'react';
import backgroundMobile from '../assets/images/background_small.jpg';
import background from '../assets/images/background_big.jpg';
import desktop from '../assets/images/desktop.png';

const Home = () => {
  return (
    <section id="home" className="w-full h-screen flex flex-col justify-around relative overflow-hidden md:h-[65vh]special:h-[75vh] xl:h-[65vh]">

      <picture className="w-full h-full z-0 absolute top-0">
          <source media="(min-width:768px)" srcSet={background} className="w-full h-full"/>
          <img src={backgroundMobile} alt="music festival" className="w-full h-full"/>
      </picture>

      <img src={desktop} alt="desktop with computer" className="w-[85%] h-auto absolute bottom-[20%] -right-[10%] z-10 md:w-[52%] md:right-[8%] md:bottom-[18%] special:w-[36%] special:right-[8%] special:bottom-[22%] lg:w-[35%] lg:bottom-[17%] lg:right-[15%] xl:w-[30%] xl:right-[18%]"/>

      <div className="w-full z-10 pt-6 px-6 md:px-8 md:pt-8 lg:px-[175px] lg:w-[75%] lg:pt-16 xl:px-[450px]">
        <h1 className="text-3xl font-Merriweather font-bold text-black md:text-[52px]">Hi! I'm Esteban Santiago</h1>
        <h2 className="w-4/5 mt-2 text-xl font-Lato font-bold text-secondary-black leading-none md:text-4xl md:w-[55%]">Frontend developer in React</h2>
      </div>
      
      <div className="w-full h-auto px-4 flex justify-center items-center shrink-0 space-x-3 z-10">
        <a href="#contact" className="w-36 h-12 bg-black rounded-md flex items-center justify-center shadow-md transtition transition-all duration-300 ease-in-out hover:bg-secondary-white md:w-48 md:h-14">
          <p className="px-5 py-1 text-white font-Lato font-semibold text-lg transtition transition-all duration-300 ease-in-out hover:text-black md:text-xl">Contact me</p>
        </a>
        <button className="w-36 h-12 bg-black rounded-md shadow-md transtition transition-all duration-300 ease-in-out hover:bg-secondary-white md:w-48 md:h-14">
          <p className="px-3 py-1 text-white font-Lato font-semibold text-lg transtition transition-all duration-300 ease-in-out hover:text-black md:text-xl">Download CV</p>
        </button>
      </div>

    </section>
  )
}

export {Home}