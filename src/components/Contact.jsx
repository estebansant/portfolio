import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full h-auto px-6 mt-8 md:mt-10 md:px-[50px]">
      <h2 className="w-full text-3xl font-Merriweather font-bold text-black mb-5 md:text-5xl md:text-center">Contact</h2>

      <form
        name="contactEsteban"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
        className="w-full h-auto border-solid border-2 border-black rounded-md p-6 flex flex-col items-center md:w-[70%] md:m-auto"
      >
        {/* Hidden fields */}
        <input type="hidden" name="none" value="contactEsteban" />
        <div hidden>
          <input name="bot-field" />
        </div>

        {/* Form fields */}
        <div className="w-full h-auto flex flex-col items-center">
          <label htmlFor="first_name" className="w-full mb-4 flex flex-col space-y-2">
            <span className="text-md font-Lato font-semibold text-black">First name</span>
            <input
              type="text"
              name="first_name"
              id="first_name"
              placeholder="Name"
              className="w-full h-8 px-3 border-b-2 border-gray bg-white"
            />
          </label>
          <label htmlFor="last_name" className="w-full mb-4 flex flex-col space-y-2">
            <span className="text-md font-Lato font-semibold text-black">Last name</span>
            <input
              type="text"
              name="last_name"
              id="last_name"
              placeholder="Last name"
              className="w-full h-8 px-3 border-b-2 border-gray bg-white"
            />
          </label>
        </div>
        <label htmlFor="email" className="w-full mb-4 flex flex-col space-y-2">
          <span className="text-md font-Lato font-semibold text-black">Email</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full h-8 px-3 border-b-2 border-gray bg-white"
          />
        </label>
        <label htmlFor="message" className="w-full mb-4 flex flex-col space-y-2">
          <span className="text-md font-Lato font-semibold text-black">Message</span>
          <textarea
            name="message"
            id="message"
            placeholder="Write something"
            className="w-full h-40 px-3 border-b-2 border-gray bg-white"
          />
        </label>
        <button
          type="submit"
          className="w-45 h-12 mt-6 border-solid p-3 border-black border-2 rounded-md text-l font-Merriweather font-bold text-black text-center shadow-md2 transition transition-all duration-300 ease-in-out hover:border-secondary-white hover:bg-secondary-black hover:text-secondary-white"
        >
          Let's work together!
        </button>
      </form>
    </section>
  )
}

export {Contact}