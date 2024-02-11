"use client";
import { useEffect, useState } from "react";
import { MdOutlineSearch } from "react-icons/md";

const SearchUsers = ({ users, setUsersFiltered }) => {
  const [filter, setFilter] = useState({
    name: "",
    interes: "all",
  });

  const handleOnChange = (e) => {
    setFilter({ ...filter, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    if (filter.interes === "all") {
      setUsersFiltered(
        users.filter((e) =>
          e.name.toLowerCase().includes(filter.name.toLowerCase()),
        ),
      );
    } else {
      setUsersFiltered(
        users.filter(
          (e) =>
            e.name.toLowerCase().includes(filter.name.toLowerCase()) &&
            e.interests.includes(filter.interes),
        ),
      );
    }
  }, [filter, setUsersFiltered, users]);

  return (
    <div className="flex flex-col sm:flex-row w-full items-center justify-center gap-5">
      <div className="relative flex items-center text-sm">
        <input
          id="name"
          value={filter.name}
          onChange={(e) => handleOnChange(e)}
          placeholder="Buscar persona..."
          className="border-none border-black p-2 bg-gray-200 rounded-sm outline-none w-[200px]"
        />
        <button className="absolute right-1">
          <MdOutlineSearch color="#62CFE4" size="20px" />
        </button>
      </div>
      <div className="flex text-sm">
        <select
          value={filter.interes}
          id="interes"
          className="w-[200px] p-2 rounded-sm cursor-pointer outline-none"
          style={{ boxShadow: "0px 2px 2px 0px #00000040" }}
          onChange={(e) => handleOnChange(e)}
          placeholder={filter.interes}
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
