import React, { useState } from "react";
import { links } from "../Data/data";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map((navItem) => {
            return (
              <li className="nav__item" key={navItem.index}>
                <NavLink
                  to={navItem.path}
                  className="nav__link"
                  activeClassName="active-nav"
                  exact={navItem.exact}
                  onClick={() => setShowMenu(!showMenu)}
                >
                  {navItem.icon}
                  <h3 className="nav__name">{navItem.name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`${showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}`} onClick={() => setShowMenu(!showMenu)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
