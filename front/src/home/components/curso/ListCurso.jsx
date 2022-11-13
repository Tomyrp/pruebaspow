import React from "react";
import Curso from "./Curso";
import { cursos } from "./datosCursos";

const ListCurso = ({tipos}) => {
  
  return (
    <div className="row g-5 mx-auto">
      {
        cursos.map(curso => { 
          if (tipos===curso.tipo) {
            return <Curso key={curso.id} curso={curso} />;
          }
          else{
            return <> </>
          }
       
      })
      }
    </div>
  );
};

export default ListCurso;
