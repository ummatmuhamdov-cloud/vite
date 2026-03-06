import React from "react";
import viteLogo from "../assets/img/logo.png";
import viteHome from "../assets/img/home.png";
import viteCategory from "../assets/img/category.png";
import viteAbout from "../assets/img/about_us.png";
import vitePhone from "../assets/img/phone.png";

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
