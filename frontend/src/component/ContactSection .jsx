import React from 'react';
import '../style/ContactSection.css';

const ContactSection = () => {
  return ( 
    <div className="contact-section">
      <h2 className="home_heading">Get in Touch Today</h2>
      <p className="home_subheading">
        Partner with us for expert web development, digital marketing, and data analytics services designed to elevate your business. Let’s create solutions that drive success—tailored just for you.
      </p>
      <div className="contact-content">
        <div className="contact-info">
          <h3> Contact Us Now and Start Your Journey!</h3>
          <p><strong>Phone</strong> +91 9786343389</p>
          <p><strong>Email</strong> info.innoversedigitals@gmail.com</p>
          <p><strong>Address</strong>12/24, Palayakara Street, Porur, Chennai-600116</p>
        </div>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Enter your Name</label>
            <input type="text" id="name" placeholder="Your first name here" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter your Email*</label>
            <input type="email" id="email" placeholder="Your email address here" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your message or inquiry*</label>
            <textarea id="message" placeholder="Type your message here" rows="4" required></textarea>
          </div>
          <button type="submit" className="submit_button">Submit your information now</button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
