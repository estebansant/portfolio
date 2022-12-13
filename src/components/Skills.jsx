import React from 'react';
import { SkillsData } from '../dataStructures/SkillsData'

const Skills = () => {
  return (
    <section id="skills" className="w-full h-auto mt-6 px-6">
      <h2 className="font-Merriweather text-black font-bold text-3xl">Skills</h2>
      <div className="w-auto h-64 flex items-center overflow-x-auto overscroll-x-contain scroll-smooth mr-4">

        {SkillsData.map((skill, index) => {
          return(
            <div key={index} className="w-3/5 h-4/5 bg-secondary-white flex flex-none flex-col justify-center items-center p-7 rounded-lg shadow-md mr-3 ml-3 transition transition-all duration-300 ease-in-out hover:bg-secondary-black text-secondary-black hover:text-secondary-white">
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
    </section>
  )
}

export {Skills}