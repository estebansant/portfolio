import React from 'react';
import { DeveloperExperience } from '../dataStructures/DeveloperExperience';
import { OtherExperience } from '../dataStructures/OtherExperience';

const Experience = () => {
  return (
    <section id="experience" className="w-full h-auto mt-5 overflow-hidden px-6 md:mt-10 md:px-[50px] special:px-[125px]">
      <h2 className="w-full text-3xl font-Merriweather font-bold text-black md:text-5xl">Experience</h2>
      <h3 className="w-full text-2xl font-Merriweather font-bold text-black mt-4 md:text-3xl">Developer experience</h3>
      <p className="w-full text-base font-Lato font-semibold text-secondary-black mt-0.5 mb-4 md:w-[85%]">Timeline through my journey with coding.</p>

      <ol className="w-full md:m-auto flex flex-col relative border-l border-gray md:ml-[15%] md:pr-[30%]">
        {DeveloperExperience.map((item, index) => {
          return(
            <li key={index} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 rounded-full bg-gray mt-1.5 -left-1.5 border border-white" />
              <span className="flex flex-wrap gap-x-4 gap-y-1 flex-row items-center justify-start text-sm md:text-base">
                <p className="inline-block px-2 py-1 font-semibold font-Lato text-white bg-black rounded-sm">  
                  {item.year}
                </p>
                <h3 className="text-l font-Lato font-semibold text-black">{item.title}</h3>
                <div className="my-1 text-sm font-Lato font-base text-gray">{item.duration}</div>
              </span>
              <p className="my-2 text-base font-Lato text-secondary-black">{item.details}</p>
            </li>
          )
        })}
      </ol>

      <h3 className="w-full text-2xl font-Merriweather font-bold text-black mt-8 md:text-3xl">Other experience</h3>
      <p className="w-full text-base font-Lato font-semibold text-secondary-black mt-0.5 mb-4 md:w-[85%]">This is my experience with jobs that are not related with programming, but that gave me a good set of skills for remote jobs.</p>

      <ol className="w-full md:m-auto flex flex-col relative border-l border-gray md:ml-[15%] md:pr-[30%]">
        {OtherExperience.map((job, i) => {
          return(
            <li key={i} className="mb-10 ml-4">
              <div className="absolute w-3 h-3 rounded-full bg-gray mt-1.5 -left-1.5 border border-white" />
              <span className="flex flex-wrap gap-x-4 gap-y-1 flex-row items-center justify-start text-sm md:text-base">
                <p className="inline-block px-2 py-1 font-semibold font-Lato text-white bg-black rounded-sm">  
                  {job.year}
                </p>
                <h3 className="text-l font-Lato font-semibold text-black">{job.title}</h3>
                <div className="my-1 text-sm font-Lato font-base text-gray">{job.duration}</div>
              </span>
              <p className="my-2 text-base font-Lato text-secondary-black">{job.details}</p>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

export {Experience}