import React from "react";

const Nav = () => {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <div className="nav__content">
            <img src="/src/assets/img/logo.png" alt="" />

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
                <img src="/src/assets/img/home.png" alt="" />
                </a>
              </li>

              <li>
                <a href="" className="nav__mobile-link">
                <img src="/src/assets/img/category.png" alt="" />
                </a>
              </li>              

              <li>
                <a href="" className="nav__mobile-link">
                <img src="/src/assets/img/about_us.png" alt="" />
                </a>
              </li>
              <li>
                <a href="" className="nav__mobile-link">
                <img src="/src/assets/img/phone.png" alt="" />
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
