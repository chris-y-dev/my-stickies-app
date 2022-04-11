import React from "react";

//Function for my footer. 
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Chris Yuen {year}</p>
      <p><a href="https://www.chrisyuen.info">Portfolio</a> <a href="https://www.linkedin.com/in/chrisyuen976">LinkedIn</a></p>
      <p className="footer-small">Technologies used: React, JavaScript, Node.js, MongoDB</p>
    </footer>
  );
}

export default Footer;
