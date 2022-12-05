import React from 'react';
import { WebsitesData } from '../dataStructures/WebsitesData';
import { ProjectsData } from '../dataStructures/ProjectsData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="w-full h-auto mt-5">
      <h2>Portfolio</h2>
      <div>
        <h3>Full Websites</h3>
        {WebsitesData.map((page, index) => {
          return(
            <div key={index}>
              <div>
                <img src={page.image} alt={page.alt}/>
              </div>
              <div>
                <h4>{page.title}</h4>
                <div>
                  {page.skills?.map((tools, key) =>{
                    return(
                      <div key={key}>{tools}</div>
                    )
                  })}
                </div>
                <p>{page.description}</p>
                <a href={page.link}>Live page</a>
                <a href={page.code}>Watch code</a>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <h3>Smaller Projects</h3>
        {ProjectsData.map((project, i) => {
          return(
            <div key={i}>
              <div>
                <img src={project.image} alt={project.alt}/>
              </div>
              <div>
                <h4>{project.title}</h4>
                <div>
                  {project.skills?.map((tools, k) =>{
                      return(
                        <div key={k}>{tools}</div>
                      )
                    })}
                </div>
                <p>{project.description}</p>
                <a href={project.link}>Live page</a>
                <a href={project.code}>Watch code</a>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export {Portfolio}