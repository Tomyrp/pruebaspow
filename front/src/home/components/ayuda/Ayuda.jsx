import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";
const Ayuda = ({ ayuda }) => {
  console.log(ayuda.image)
  return (
    <div className="col-lg-4 col-sm-6 col-xs-12">
      <NavLink to={`/cursos/${ayuda.tipo}/${ayuda.id}`} className="nav-link">
        <div className="card-body">
          <h5 className="card-title mb-0">{ayuda.nombre}</h5>
        </div>
        <div className="imagen-contenido-curso">  
          <img
            src={ayuda.imagen}
            className="card-img-top imagen-curso"
            alt="..."
          />
        </div>
      </NavLink>
    </div>
  );
};

export default Ayuda;

