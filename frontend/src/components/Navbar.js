import React from "react";
import { NavLink, useLocation } from 'react-router-dom'
import "../App.css"

export const Navbar = () => {
  let { pathname } = useLocation();
  if (pathname === "/") {
    return null
  } else {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg justify-content-between">
        <div className="d-flex">
          <div className="navbar-brand">
            Надежность ПП
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/calculation"
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
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/"
              >
                На главную
              </NavLink>
            </li>
          </ul>
      </nav>
    )
  }
}