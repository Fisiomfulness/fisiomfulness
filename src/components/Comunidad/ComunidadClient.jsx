"use client";

import { useState } from "react";
import SearchUsers from "./SearchUser";
import UsersContainer from "./UsersContainer";
import MapComunidad from "./MapComunidad";

const ComunidadClient = ({ users }) => {
  const [usersFiltered, setUsersFiltered] = useState(users);

  return (
    <div className="w-full min-h-screen mb-10 flex flex-row gap-5 pt-6 md:pr-5 md:pl-5">
      <div className="w-full flex flex-col items-center gap-10 md:w-1/2 md:max-h-screen">
        <SearchUsers
          usersFiltered={usersFiltered}
          setUsersFiltered={setUsersFiltered}
          users={users}
        />
        <UsersContainer users={usersFiltered} />
      </div>
      <MapComunidad />
    </div>
  );
};

export default ComunidadClient;
