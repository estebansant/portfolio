import React from 'react';
import twitter from '../assets/icons/twitter_logo.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin_logo.svg';

const Footer = () => {
  return (
    <footer className="p-5 w-full h-auto flex items-center justify-around bg-secondary-white mt-10 gap-2">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <p className="text-base font-Lato font-semibold text-secondary-black">Social media</p>
        <div className="flex flex-row items-center justify-around gap-3">
          <a
            href="https://github.com/estebansant"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img src={github} className="w-8 h-8 bg-cover"/>
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-s-25b76113a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            >
            <img src={linkedin} className="w-8 h-8 bg-cover"/>
          </a>
          <a
            href="https://twitter.com/esteban_sant30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img src={twitter} className="w-8 h-8 bg-cover"/>
          </a>
        </div>
      </div>
      <div>
        <a href="" className="hover:underline">
          <p className="text-base font-Lato font-semibold text-secondary-black">Download CV</p>
        </a>
      </div>
    </footer>
  )
}

export {Footer}