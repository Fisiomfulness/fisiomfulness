"use client";
import { MdOutlineSearch } from "react-icons/md";
import { useEffect, useState } from "react";

export const SearchProd = ({ prods, setProdFiltrados }) => {
  const [filter, setFilter] = useState({
    categoria: "categoria",
    nombre: "",
  });

  useEffect(() => {
    setProdFiltrados(
      prods.filter(
        (e) =>
          e.categoria.toLowerCase().includes(filter.categoria.toLowerCase()) &&
          e.nombre.toLowerCase().includes(filter.nombre.toLowerCase())
      )
    );
  }, [filter, prods, setProdFiltrados]);

  const handleOnChange = (e) => {
    setFilter({ ...filter, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="relative flex items-center text-sm">
        <input
          id="nombre"
          value={filter.nombre}
          onChange={(e) => handleOnChange(e)}
          placeholder="Buscar artículo..."
          className="border-none border-black p-2 bg-gray-200 rounded-sm outline-none w-[200px]"
        />
        <button className="absolute right-1">
          <MdOutlineSearch color="#62CFE4" size="20px" />
        </button>
      </div>
      <div className="flex text-sm">
        <select
          value={filter.categoria}
          id="categoria"
          className="w-[200px] p-2 rounded-sm cursor-pointer outline-none"
          style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
          onChange={(e) => handleOnChange(e)}
          placeholder={filter.categoria}
        >
          <option value="categoria">Todas</option>
          <option value="categoria 1">Categoria 1</option>
          <option value="categoria 2">Categoria 2</option>
          <option value="categoria 3">Categoria 3</option>
        </select>
      </div>
    </>
  );
};
