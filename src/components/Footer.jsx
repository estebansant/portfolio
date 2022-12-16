import React from 'react';
import twitterBlack from '../assets/icons/black/twitter_black.svg';
import githubBlack from '../assets/icons/black/github_black.svg';
import linkedinBlack from '../assets/icons/black/linkedin_black.svg';
import github from '../assets/icons/white/github.svg';
import twitter from '../assets/icons/white/twitter.svg';
import linkedin from '../assets/icons/white/linkedin.svg';

const Footer = ({theme}) => {
  return (
    <footer className="p-5 w-full h-auto flex items-center justify-around bg-secondary-white gap-2 z-40 absolute dark:bg-secondary-black">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <p className="text-base font-Lato font-semibold text-secondary-black dark:text-secondary-white">Social media</p>
        <div className="flex flex-row items-center justify-around gap-3">
          <a
            href="https://github.com/estebansant"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            {!theme &&
              <img src={github} alt="github logo" className="w-6 h-6 transtion transition-all duration-300 ease-in-out hover:scale-[115%]"/>
            }
            {theme &&
              <img src={githubBlack} alt="github logo" className="w-6 h-6 transtion transition-all duration-300 ease-in-out hover:scale-[115%]"/>
            }
          </a>
          <a
            href="https://www.linkedin.com/in/esteban-s-25b76113a/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
            >
            {!theme &&
              <img src={linkedin} alt="linkedin logo" className="w-6 h-6 transtion transition-all duration-300 ease-in-out hover:scale-[115%]"/>
            }
            {theme &&
              <img src={linkedinBlack} alt="linkedin logo" className="w-6 h-6 transtion transition-all duration-300 ease-in-out hover:scale-[115%]"/>
            }
          </a>
          <a
            href="https://twitter.com/esteban_sant30"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8"
          >
            {!theme &&
              <img src={twitter} alt="twitter logo" className="w-6 h-6 transtion transition-all duration-300 ease-in-out hover:scale-[115%]"/>
            }
            {theme &&
              <img src={twitterBlack} alt="twitter logo" className="w-6 h-6 transtion transition-all duration-300 ease-in-out hover:scale-[115%]"/>
            }
          </a>
        </div>
      </div>
      <div>
        <a href="">
          <p className="text-base font-Lato font-semibold text-secondary-black dark:text-secondary-white hover:underline">Download CV</p>
        </a>
      </div>
    </footer>
  )
}

export {Footer}