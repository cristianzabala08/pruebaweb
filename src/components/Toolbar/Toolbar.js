import React from "react";
import "./Toolbar.css";
import logo from "../img/user.png";
import logo1 from "../img/facebook.png";
import logo2 from "../img/instagram.png";

const toolbar = (props) => {
  return (
    <header style={{ backgroundColor: "green" }} className="toolbar">
      <nav className="toolbar_navigation">
        <div className="toolbar_logo">
          <a href={null}>
            <img className="como" src={logo} />
          </a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-itemes">
          <ul>
            <li>
              <a href="/">
                <img className="como" src={logo1} />
              </a>
            </li>
            <li>
              <a href="/">
                <img className="como" src={logo2} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default toolbar;
