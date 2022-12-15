import React from 'react'

const About = () => {
  return (
    <section id="about" className="w-full h-auto md:mt-[30px]">
      <h2 className="w-full mt-5 z-10 text-center relative text-3xl font-Merriweather font-bold before:h-0.5 before:w-1/2 before:bg-black before:absolute before:top-1/2 before:right-0 before:-z-10 after:h-0.5 after:w-1/2 after:bg-black after:absolute after:top-1/2 after:left-0 after:-z-10"><span className="w-80 bg-white z-10 py-0 px-5 md:text-5xl">About me</span></h2>
      <p className="w-full px-6 mt-4 mb-4 text-justify text-base font-Lato font-normal md:px-[25%] lg:px-[32%] xl:px-[36%]">I am a young physics student who learned all that he knows about coding thanks to <a href="https://platzi.com/" target="_blank" rel="noopener noreferrer" className="underline">Platzi</a>, <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" className="underline">StackOverflow</a> and many hours of reading through documentation files. So, basically I am a self taught programmer. <br/><br/> I am currently looking for a job as a frontend developer. Contact me to start working together.</p>
    </section>
  )
}

export {About}