import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full h-auto">
      <h2 className="w-full mt-5 z-10 text-center relative text-3xl font-Merriweather font-bold before:h-0.5 before:w-1/2 before:bg-black before:absolute before:top-1/2 before:right-0 before:-z-10 after:h-0.5 after:w-1/2 after:bg-black after:absolute after:top-1/2 after:left-0 after:-z-10"><span className="w-80 bg-white z-10 py-0 px-5">About me</span></h2>
      <p className="w-full px-6 mt-4 mb-4 text-justify text-base font-Lato font-normal">This section will talk about how I got to know the skill I manage while programming.</p>
    </section>
  )
}

export {About}