import React from 'react';
import { WebsitesData } from '../dataStructures/WebsitesData';
import { ProjectsData } from '../dataStructures/ProjectsData';
import playBlack from '../assets/icons/black/play_black.svg';
import githubBlack from '../assets/icons/black/github_black.svg';

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full h-auto px-6 md:px-[50px] special:px-[125px] lg:px-[17.5%]">
      <h2 className="w-full text-3xl font-Merriweather mt-5 font-bold text-black md:text-5xl md:mt-10">Portfolio</h2>

      <h3 className="w-full text-2xl font-Merriweather font-bold text-black mb-1 mt-5 md:text-3xl">Full Websites</h3>
      <p className="text-base font-Lato font-normal text-secondary-black mb-5 text-justify md:w-[85%]">These are my most ambitious projects, which are fully functional websites. Generally they have a bigger scope with multiple pages that are well connected between them.</p>
      <div className="w-full h-auto mt-5 flex flex-shrink-0 flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WebsitesData.map((page, index) => {
            return(
              <div key={index} className="w-full max-w-xs h-auto border-solid border-2 border-black rounded-sm">
                <img src={page.image} alt={page.alt}
                  className="w-full h-auto object-cover rounded-t-sm border-b-2 border-b-solid border-b-black"
                />
                <div className="w-full h-auto p-4">
                  <h4 className="w-full text-xl font-Merriweather font-bold text-black">{page.title}</h4>
                  <div className="w-full h-auto flex items-center gap-2 mt-1.5">
                    {page.skills?.map((tools, key) =>{
                      return(
                        <div key={key} className="w-full border-solid border-2 border-black rounded-sm text-center">
                          <p className="text-xs font-Lato font-semibold text-secondary-black p-1">{tools}</p>
                        </div>
                      )
                    })}
                  </div>
                  <p className="text-base font-Lato font-normal text-secondary-black mt-4 text-justify">{page.description}</p>
                  <div className="w-full h-auto flex justify-around items-center gap-2 mt-5">
                    <a href={page.link} target="_blank" rel="noopener noreferrer"
                      className="w-1/2 h-auto flex flex-row justify-evenly items-center border-solid border-2 border-black rounded-xs p-1.5 transition transition-all duration-300 ease-in-out hover:border-green hover:border-3 hover:shadow-md2"
                    >
                      <p className="text-base font-Lato font-semibold text-secondary-black">Live page</p>
                      <img src={playBlack} alt="play button" className="w-6 h-6"/>
                    </a>
                    <a href={page.code} target="_blank" rel="noopener noreferrer"
                      className="w-1/2 h-auto flex flex-row justify-evenly items-center border-solid border-2 border-black rounded-xs p-1.5 transition transition-all duration-300 ease-in-out hover:border-green hover:border-3 hover:shadow-md2"
                    >
                      <p className="text-base font-Lato font-semibold text-secondary-black">Code</p>
                      <img src={githubBlack} alt="github logo" className="w-6 h-6"/>
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <h3 className="w-full text-2xl font-Merriweather font-bold text-black mb-1 mt-10 md:text-3xl">Smaller Projects</h3>
      <p className="text-base font-Lato font-normal text-secondary-black mb-5 text-justify md:w-[85%]">These are smaller projects that I mostly did to practice code, or learn new things like React. Their scope is limited and are not so ambitious.</p>
      <div className="w-full h-auto mt-5 flex flex-shrink-0 flex-col md:flex-row items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ProjectsData.map((project, i) => {
            return(
              <div key={i} className="w-full max-w-xs h-auto border-solid border-2 border-black rounded-sm">
                <img src={project.image} alt={project.alt}
                  className="w-full h-auto object-cover rounded-t-sm border-b-2 border-b-solid border-b-black"
                />
                <div className="w-full h-auto p-4">
                  <h4 className="w-full text-xl font-Merriweather font-bold text-black">{project.title}</h4>
                  <div className="w-full h-auto flex items-center gap-2 mt-1.5">
                    {project.skills?.map((tools, k) =>{
                        return(
                          <div key={k} className="w-full border-solid border-2 border-black rounded-sm text-center">
                            <p className="text-xs font-Lato font-semibold text-secondary-black p-1">{tools}</p>
                          </div>
                        )
                      })}
                  </div>
                  <p className="text-base font-Lato font-normal text-secondary-black mt-4 text-justify">{project.description}</p>
                  <div className="w-full h-auto flex justify-around items-center gap-2 mt-5">
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                      className="w-1/2 h-auto flex flex-row justify-evenly items-center border-solid border-2 border-black rounded-xs p-1.5 transition transition-all duration-300 ease-in-out hover:border-green hover:border-3 hover:shadow-md2"
                    >
                      <p className="text-base font-Lato font-semibold text-secondary-black">Live page</p>
                      <img src={playBlack} alt="play button" className="w-6 h-auto"/>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer"
                      className="w-1/2 h-auto flex flex-row justify-evenly items-center border-solid border-2 border-black rounded-xs p-1.5 transition transition-all duration-300 ease-in-out hover:border-green hover:border-3 hover:shadow-md2"
                    >
                      <p className="text-base font-Lato font-semibold text-secondary-black">Code</p>
                      <img src={githubBlack} alt="github logo" className="w-6 h-auto"/>
                    </a>
                </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export {Portfolio}