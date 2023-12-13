import { FaUserDoctor } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

const SearchProfesional = ({ profesionales, setProfesionalesFiltrados }) => {
  let contador = 1;
  const especialidadesUnicas = Array.from(
    new Set(profesionales.map((profesional) => profesional.especialidad))
  ).map((profesion) => ({
    profesion,
    index: contador++,
  }));

  const filtrarPorEspecialidad = (especialidad) => {
    const profesionalesFiltrados = profesionales.filter((profesional) =>
      profesional.especialidad.includes(especialidad)
    );
    setProfesionalesFiltrados(profesionalesFiltrados);
  };

  const onSelectionChange = (especialidad) => {
    if (especialidad === "" || especialidad === null) {
      setProfesionalesFiltrados([...profesionales]);
    } else {
      filtrarPorEspecialidad(especialidad);
    }
  };

  const onInputChange = (value) => {
    if (value === "" || value === null) {
      setProfesionalesFiltrados([...profesionales]);
    } else {
      filtrarPorEspecialidad(value);
    }
  };

  return (
    <div className="flex m-2 gap-4">
      <Autocomplete
        startsWidth={<AiFillHome />}
        label="Seleccione:"
        placeholder="Especialidad"
        className="max-w-xs md:mr-2 mr-0"
        defaultItems={especialidadesUnicas}
        listboxProps={{
          color: "primary",
        }}
        allowsCustomValue={true}
        onInputChange={onInputChange}
        onSelectionChange={onSelectionChange}
      >
        {(item) => (
          <AutocompleteItem key={item.index} textValue={item.profesion}>
            <div className="flex items-center gap-2">
              <FaUserDoctor alt={item.profesion} className="text-action-blue" />
              <span>{item.profesion}</span>
            </div>
          </AutocompleteItem>
        )}
      </Autocomplete>
    </div>
  );
};

export default SearchProfesional;
