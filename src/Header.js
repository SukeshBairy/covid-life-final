import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="header__title">COVID LIFE</h1>

        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/"
          exact
        >
          <div className="navitem">
            <h6>Dashboard</h6>
          </div>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/heatmap"
        >
          <div className="navitem">
            <h6>Heatmap</h6>
          </div>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/about"
        >
          <div className="navitem">
            <h6>About</h6>
          </div>
        </NavLink>
        <NavLink
          activeClassName="navbar__link--active"
          className="navbar__link"
          to="/contact"
        >
          <div className="navitem">
            <h6>Contact Us</h6>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}

export default Header;
