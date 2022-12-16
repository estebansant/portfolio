import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {

  const contactScreen = {
    offscreen: {
      opacity: 0,
      x: "-35vw",
    },
    onscreen: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        delay: 0.4,
        duration: 1.6,
        ease: "easeIn"
      }
    }
  };

  return (
    <motion.section
      variants={contactScreen}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{  once: true, amount: 0.1 }}
      id="contact"
      className="w-full h-auto px-6 mt-10 pb-10 md:mt-10 md:px-[50px] special:px-[125px] lg:px-[17.5%] xl:px-[20%]"
    >
      <h2 className="w-full text-3xl font-Merriweather font-bold text-black mb-5 md:text-5xl md:text-center dark:text-white">Contact</h2>

      <form
        name="contactEsteban"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
        className="w-full h-auto border-solid border-2 border-black rounded-md p-6 flex flex-col items-center md:w-[70%] md:m-auto special:w-[60%] lg:w-[48%] xl:w-[37%] dark:border-white"
      >
        {/* Hidden fields */}
        <input type="hidden" name="none" value="contactEsteban" />
        <div hidden>
          <input name="bot-field" />
        </div>

        {/* Form fields */}
        <div className="w-full h-auto flex flex-col items-center">
          <label htmlFor="first_name" className="w-full mb-4 flex flex-col space-y-2">
            <span className="text-md font-Lato font-semibold text-black dark:text-white">First name</span>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Name"
              className="w-full h-8 px-3 border-b-2 border-gray bg-white dark:bg-black"
              required
            />
          </label>
          <label htmlFor="last_name" className="w-full mb-4 flex flex-col space-y-2">
            <span className="text-md font-Lato font-semibold text-black dark:text-white">Last name</span>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              className="w-full h-8 px-3 border-b-2 border-gray bg-white dark:bg-black"
              required
            />
          </label>
        </div>
        <label htmlFor="email" className="w-full mb-4 flex flex-col space-y-2">
          <span className="text-md font-Lato font-semibold text-black dark:text-white">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full h-8 px-3 border-b-2 border-gray bg-white dark:bg-black"
            required
          />
        </label>
        <label htmlFor="message" className="w-full mb-4 flex flex-col space-y-2">
          <span className="text-md font-Lato font-semibold text-black dark:text-white">Message</span>
          <textarea
            name="message"
            id="message"
            placeholder="Write something"
            className="w-full h-40 px-3 border-b-2 border-gray bg-white dark:bg-black"
            required
          />
        </label>
        <button
          type="submit"
          className="w-45 h-12 mt-6 border-solid p-3 border-black border-2 bg-white rounded-md text-l font-Merriweather font-bold text-black text-center shadow-md2 transition transition-all duration-300 ease-in-out hover:border-secondary-white hover:bg-secondary-black hover:text-secondary-white dark:bg-black dark:hover:bg-secondary-white dark:text-white dark:border-white dark:hover:border-secondary-white dark:shadow-md3 dark:hover:text-black"
        >
          Let's work together!
        </button>
      </form>
    </motion.section>
  )
}

export {Contact}