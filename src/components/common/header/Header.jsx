import React from "react";
import { repo, notifications, star, fork } from "../../../assets";
import {menuItems} from "../../../constants"

const Header = () => {
  return (
    <header className="header-container">
      <div className="repo-insights">
        <div className="repo">
          <img src={repo} alt="repo" />
          <div className="repoTitle X-flex">
            <a
              href="https://github.com/facebook"
              alt="facebook"
              rel="noopener noreferrer"
            >
              facebook
            </a>{" "}
            /{" "}
            <a
              href="https://github.com/facebook/react"
              alt="facebook"
              rel="noopener noreferrer"
            >
              <strong>react</strong>
            </a>
          </div>
          <span className="repo-label X-flex">Public</span>
        </div>
        <ul className="X-flex repo-insights-no d-none d-md-flex">
          <li>
            <img src={notifications} alt="notifications" />
            Notifications
          </li>
          <li>
            <img src={star} alt="star" />
            Star <span>175k</span>
          </li>

          <li>
            <img src={fork} alt="fork" />
            Fork <span>35.3k</span>
          </li>
        </ul>
      </div>

      <div className="menu-groups">
        <ul>
          {menuItems.map((item) => (
            <li className="menu-items" key={item.id}>
              <a className="X-flex" href={item.href}>
              <img src={item.img} alt={item.text} />
                {item.text}

                {item.numFlag && <span className="label-num-data">{item.no}</span>} 
                </a>
            </li>
          ))}
          
        </ul>

      </div>
    </header>
  );
};

export default Header;

