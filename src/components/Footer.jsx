import React from 'react';
import twitterBlack from '../assets/icons/black/twitter_black.svg';
import githubBlack from '../assets/icons/black/github_black.svg';
import linkedinBlack from '../assets/icons/black/linkedin_black.svg';

const Footer = () => {
  return (
    <footer className="p-5 w-full h-auto flex items-center justify-around bg-secondary-white mt-10 gap-2 z-40 absolute">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <p className="text-base font-Lato font-semibold text-secondary-black">Social media</p>
        <div className="flex flex-row items-center justify-around gap-3">
          <a
            href="https://github.com/estebansant"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img src={githubBlack} className="w-8 h-8 bg-cover"/>
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-s-25b76113a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            >
            <img src={linkedinBlack} className="w-8 h-8 bg-cover"/>
          </a>
          <a
            href="https://twitter.com/esteban_sant30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            <img src={twitterBlack} className="w-8 h-8 bg-cover"/>
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