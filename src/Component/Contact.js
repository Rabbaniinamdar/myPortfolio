import React from 'react';
import '../CSS/Contact.css'
const About = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>Hire</span> me
      </h1>
      <div className="row">
        <form name="submit-to-google-sheet" id="form">
          <input type="text" placeholder="name" className="box" name="Name" />
          <input type="email" placeholder="email" className="box" name="Email" id="email" />
          <input type="text" placeholder="company" className="box" name="Project" />
          <textarea name="Message" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
          <button id="submit" className="btn" style={{ color: 'aliceblue' }}>
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default About;
