import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="w-full h-auto px-6 mt-8">
      <h2 className="w-full text-3xl font-Merriweather font-bold text-black">Contact</h2>
      
      <form
        name="contactEsteban"
        method="post"
        data-netlify="true"
        onSubmit="submit"
        data-netlify-honeypot="bot-field"
      >
        {/* Hidden fields */}
        <input type="hidden" name="none" value="contactEsteban" />
        <div hidden>
          <input name="bot-field" />
        </div>

        {/* Form fields */}
        <div>
          <label htmlFor="first_name">
            <span>First name</span>
            <input type="text" name="first_name" id="first_name"/>
          </label>
          <label htmlFor="last_name">
            <span>Last name</span>
            <input type="text" name="last_name" id="last_name"/>
          </label>
        </div>
        <label htmlFor="email">
          <span>Email</span>
          <input type="email" name="email" id="email"/>
        </label>
        <label htmlFor="message">
          <span>Message</span>
          <textarea name="message" id="message"/>
        </label>
        <button type="submit">Let's work together!</button>
      </form>
    </section>
  )
}

export {Contact}