import "./Footer.css";

import React from "react";

function Footer({ title, fetchUrl, isLargeRow }) {
  return (
    <footer className="footer">
      <h5 className="question">Questions? Call 000-841-555-8888 </h5>
      <div className="container">
        <div className="left-container">
          <ul className="footer-ul">
            <li>
              <a href="#"> FAQ </a>{" "}
            </li>
            <li>
              <a href="#"> Account </a>{" "}
            </li>
            <li>
              <a href="#"> Privacy </a>{" "}
            </li>
            <li>
              <a href="#"> Contribute </a>{" "}
            </li>
            <li>
              <a href="#"> Contact-Us </a>{" "}
            </li>
          </ul>
        </div>
        <div className="right-container">
          <ul>
            <li>
              <a href="#"> @Satyendra singh </a>{" "}
            </li>
            <li>
              <a href="#">Helps center </a>{" "}
            </li>
            <li>
              <a href="#"> Terms of use </a>{" "}
            </li>
            <li>
              <a href="#">Copyright issue </a>{" "}
            </li>
            <li>
              <a href="#"> Netflix-clone Original </a>{" "}
            </li>
          </ul>
        
        </div>
        
      </div>
        <div className="footer-logo">
          <a href="https://m.facebook.com/profile.php"> <img className="facebook-logo App-logo" src="https://upload.wikimedia.org/wikipedia/commons/f/ff/Facebook_logo_36x36.svg" alt="facebook" /></a>
          <a href="https://github.com/satyendrasingh8"> <img className="github-logo App-logo" src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Github-circle_%28CoreUI_Icons_v1.0.0%29.svg" alt="facebook" /> </a>    
       <a href="https://twitter.com/satyend51668580?s=03"> <img className="twitter-logo App-logo" src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png" alt="facebook" /></a>
           <a href="https://www.linkedin.com/in/satyendra-singh-98985a196/">  <img className="linkedin-logo App-logo" src="https://upload.wikimedia.org/wikipedia/commons/e/e9/Linkedin_icon.svg" alt="facebook" />   </a>
          <a href="https://www.instagram.com/sat_yed/
">   <img className="instagram-logo App-logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
 alt="facebook" />   </a>
         </div>
    </footer>
  );
}

export default Footer;
