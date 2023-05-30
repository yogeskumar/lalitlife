import React from 'react';
import "./contact.css";
import instagram from '../../assets/media/instagram.png';
import twitter from '../../assets/media/twitter.png';
import linkedin from '../../assets/media/linkedin.png';

export default function Contact() {
  return (
    <div id="contact">
        <h2>Contact me at</h2>
        <h1>Lalittomar954816@gmail.com</h1>
        <div className="links">
          <a href="https://www.instagram.com/lalit.life/" rel="noreferrer" target="_blank" className="insta">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/lalit-t-b59585135" rel="noreferrer" target="_blank" className="linkedin">
            <img src={linkedin} alt="" />
          </a>
        </div>

        <div className="tnc">
            <h2>&copy; Copyright</h2>
            <p>made by Lalit</p>
        </div>
    </div>
  )
}
