import React from 'react'

const Home = () => {
  return (
    <section id="home" className="w-full h-screen flex flex-col justify-around">
      <div className="w-full">
        <h1 className="pt-6 px-6 text-3xl font-Merriweather font-bold text-black">Hi! I'm Esteban Santiago</h1>
        <h2 className="w-4/5 mt-2 px-6 text-xl font-Lato font-bold text-secondary-black leading-none">Frontend developer in React</h2>
      </div>
      
      <div className="w-full h-auto px-4 flex justify-center items-center shrink-0 space-x-3">
        <a href="#contact" className="w-36 h-12 bg-black rounded-md flex items-center justify-center shadow-md transtition transition-all duration-300 easi-in-out hover:bg-secondary-white">
          <p className="px-5 py-1 text-white font-Lato font-semibold text-lg transtition transition-all duration-300 easi-in-out hover:text-black">Contact me</p>
        </a>
        <button className="w-36 h-12 bg-black rounded-md shadow-md transtition transition-all duration-300 easi-in-out hover:bg-secondary-white">
          <p className="px-3 py-1 text-white font-Lato font-semibold text-lg transtition transition-all duration-300 easi-in-out hover:text-black">Download CV</p>
        </button>
      </div>

    </section>
  )
}

export {Home}