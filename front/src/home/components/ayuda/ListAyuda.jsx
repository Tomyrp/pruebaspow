import React from "react";
import Ayuda from "./Ayuda";
import { ayudas } from "./datosAyuda";

const ListAyuda = ({tipos}) => {
  
  return (
    <div className="row g-5 mx-auto">
      {
        ayudas.map(ayuda => { 
          if (tipos===ayuda.tipo) {
            return <Ayuda key={ayuda.id} ayuda={ayuda} />;
          }
          else{
            return <> </>
          }
       
      })
      }
    </div>
  );
};

export default ListAyuda;
