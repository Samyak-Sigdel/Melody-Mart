import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <h2>Contact us</h2>
        <h3>GET IN TOUCH WITH US</h3>
        <p>Location : Boudha, Kathmandu</p>
        <p>Phone number: 9863482899</p>
        <p>Email address: samyaksigdel77@gmail.com</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="First name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="example@domain.com" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="123-456-7890" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Add notes for our team"></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
