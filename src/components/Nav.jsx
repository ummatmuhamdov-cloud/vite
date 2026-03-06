import React from "react";
import { viteAbout, viteCategory, viteHome, viteLogo, vitePhone } from "./images";


const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__content">
            <img src={viteLogo} alt="" />

            <ul className="nav__list">
              <li><a href="" className="nav__item">Home</a></li>
              <li><a href="" className="nav__item">About</a></li>
              <li><a href="" className="nav__item">Contact</a></li>
            </ul>
          </div>
          <div className="nav__mobile">
            <ul className="nav__mobile-list">

              <li>
                <a href="" className="nav__mobile-link">
                <img src={viteHome} alt="" />
                </a>
              </li>

              <li>
                <a href="" className="nav__mobile-link">
                <img src={viteCategory} alt="" />
                </a>
              </li>              

              <li>
                <a href="" className="nav__mobile-link">
                <img src={viteAbout} alt="" />
                </a>
              </li>
              <li>
                <a href="" className="nav__mobile-link">
                <img src={vitePhone} alt="" />

                </a>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
