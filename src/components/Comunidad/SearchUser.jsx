"use client";
import { MdOutlineSearch } from "react-icons/md";

const SearchUsers = ({ users, usersFiltered, setUsersFiltered }) => {
  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-5">
      <div className="relative flex items-center text-sm">
        <input
          id="nombre"
          // value={filter.nombre}
          // onChange={(e) => handleOnChange(e)}
          placeholder="Buscar artículo..."
          className="border-none border-black p-2 bg-gray-200 rounded-sm outline-none w-[200px]"
        />
        <button className="absolute right-1">
          <MdOutlineSearch color="#62CFE4" size="20px" />
        </button>
      </div>
      <div className="flex text-sm">
        <select
          // value={filter.categoria}
          id="categoria"
          className="w-[200px] p-2 rounded-sm cursor-pointer outline-none"
          style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
          // onChange={(e) => handleOnChange(e)}
          // placeholder={filter.categoria}
        >
          <option value="all" className="">
            Todas
          </option>
          <option value="trekking">Trekking</option>
          <option value="yoga">Yoga</option>
          <option value="fútbol">Fútbol</option>
          <option value="running">Running</option>
        </select>
      </div>
    </div>
  );
};

export default SearchUsers;
