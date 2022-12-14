import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Contenido from "../components/detalle curso/Contenido";
import { getAyudaById } from "../helpers/getAyudaById";

const AyudPage = () => {
  const [ayuda, setCurso] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      setLoading(true);
      const newId = parseInt(id);
      setCurso(getAyudaById(newId));
      setLoading(false);
    }
  }, [id, curso]);
  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return (
        <Contenido ayuda={ayuda} />
    );
  }
};

export default AyudPage;
