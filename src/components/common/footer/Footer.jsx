import React from "react";
import { Left_Footer_Links, Right_Footer_Links } from "../../../constants";
import { githubLogo } from "../../../assets";

const Footer = () => {
  return (
      <footer className="footer-container">
        <div className="left-footer-links">
            {Left_Footer_Links.map((item) => (
              <a key={item.id} href={item.href} rel="noopener noreferrer">{item.text}</a>
            ))}
      </div>
      <div>
        <a href="https://github.com" rel="noopener noreferrer">
          <img src={githubLogo} alt="Github Logo" />
        </a>
      </div>
        <div className='right-footer-links'>
          {Right_Footer_Links.map((item) => (
            <a key={item.id} href={item.href} rel="noopener noreferrer">{item.text}</a>
          ))}
        </div>
      </footer>
  );
};

export default Footer;
