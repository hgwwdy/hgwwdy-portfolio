import React from 'react'
import './Contact.css'
import Footer from '../footer/footer'
const conComp = () => {
  return (
    <>
   
      <div className="container3">
          <h2 className='text-center'>Contact <span>Me</span></h2>
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <a href='mailto: hibstgetachew5@gmail.com'>hibstgetachew5@gmail.com</a>
        </div>
        <div className="contact-item">
          <h3>Phone</h3>
          <a href='tel:+251944187742'>+251-944-187-742</a>
        </div>
      </div>
      <form className="contact-form">
      
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

    </div>
    <section>
      <Footer/>
    </section>
    </>
  )
}

export default conComp
