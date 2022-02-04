import React from "react";
import {NavLink} from 'react-router-dom'

export const Navbar = ()=>(
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
    <div className="navbar-brand">
      Надежность ПП
    </div>

    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/"
          exact
        >
          Входные параметры
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          className="nav-link"
          to="/result"
        >
          Результат
        </NavLink>
      </li>
    </ul>
  </nav>
)