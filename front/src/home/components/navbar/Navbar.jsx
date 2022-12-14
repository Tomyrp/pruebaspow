import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import "./css.css";
export const Navbar = () => {
  return (
    <div className="bgnavbar">
      <div className="px-3 pt-3">
        <NavLink to="/" className="navbar-brand ">
          <img className="logo" src={logo} alt="" />
        </NavLink>
      </div>
      <nav className="navbar navbar-expand-md navbar-light justify-content-around ">
        <ul className="navbar-nav mx-auto gap-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/nosotros" className="nav-link">
              Institución
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cursos/general" className="nav-link">
              Cursos Generales
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" target={"_blank"} className="nav-link">
              Inscripciones
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/cursos/personalizados" className="nav-link">
              Cursos Personalizados
            </NavLink>
          </li>
          <li className="nav-item">
            <a
              href="https://prowessmooc.milaulas.com/login/index.php"
              target="_blank"
              className="nav-link"
              rel="noreferrer"
            >
              Campus Virtual
            </a>
          </li>
          <li className="nav-item">
            <NavLink to="/ayuda" className="nav-link">
              Ayuda
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
