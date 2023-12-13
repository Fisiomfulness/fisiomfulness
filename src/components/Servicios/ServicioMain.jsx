"use client";
import { useState } from "react";
import ServicioMainContainer from "./ServicioMainContainer";
import SearchProfesional from "./SearchProfesional/SearchProfesional";

const ServicioMain = ({ data }) => {
  const [profesionalesFiltrados, setProfesionalesFiltrados] = useState([
    ...data,
  ]);
  
  return (
    <div>
      <SearchProfesional
        profesionales={data}
        setProfesionalesFiltrados={setProfesionalesFiltrados}
      />
      <ServicioMainContainer profesionales={profesionalesFiltrados} />
    </div>
  );
};

export default ServicioMain;
