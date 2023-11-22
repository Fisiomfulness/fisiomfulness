import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { cn } from "../utils"
import { useState } from "react";

const columns = [
  { key: "paciente", label: "Paciente" },
  { key: "citas", label: "Citas" },
  { key: "estado", label: "Estado" },
];

const rows = [
  {
    key: "1",
    name: "Mario Gomez",
    date: "Seleccione una cita",
    status: "En Proceso",
  },
  {
    key: "2",
    name: "Juan Carlos Osorio",
    date: "Seleccione una cita",
    status: "Finalizada",
  },
  {
    key: "3",
    name: "Mario Gomez",
    date: "Seleccione una cita",
    status: "Reprogramada",
  },
  {
    key: "4",
    name: "Juan Carlos Osorio",
    date: "Seleccione una cita",
    status: "Finalizada",
  },
];

const row__item_class = cn(
  "px-4 text-black",
  "whitespace-nowrap border-1 border-white"
)

const header__item_class = cn(
  "border-1 border-white text-center",
)

export default function Tabla() {
  return (
    <div>
      <table className="w-full text-sm">
        <thead className="text-white bg-secondary">
          <tr>
            {columns.map((item) => (
              <th className={header__item_class} key={item.key}>
                {item.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-light-blue">
          {rows.map((item) => (
            <tr key={item.key}>
              <td className={row__item_class}>
                {item.name}
              </td>
              <td className={cn(row__item_class, "p-0")}>
                <Drop
                  defaultItems={[
                    {label: "date1", value: "10.04.2023"},
                    {label: "date2", value: "11.02.2021"},
                    {label: "date3", value: "10.10.2020"},
                  ]}
                  placeholder={"Seleccione una cita"}
                />
              </td>
              <td className={cn(row__item_class, "p-0")}>
                <DropStatus
                  defaultItems={[
                    {value: "En Proceso"},
                    {value: "Finalizada"},
                    {value: "Reprogramada"},
                  ]}
                  placeholder={item.status}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function Drop({ defaultItems, placeholder }) {
  return (
    <Autocomplete
      defaultItems={defaultItems}
      labelPlacement={"outside"}
      placeholder={placeholder}
      variant="underlined"
      aria-label={placeholder}
      size="sm"
      inputProps={{
        classNames: {
          base: cn("px-2 bg-white"), // <<<<
          innerWrapper: cn("!border-none !shadow-none px-2"),
          inputWrapper: cn(
            "!border-none !shadow-none after:!hidden"
          ),
          input: cn(
            "placeholder:!not-italic placeholder:text-inherit",
            "!border-none max-w-[125px] !p-0"
          ),
        }
      }}
      popoverProps={{
        radius: "sm",
        shadow: "sm",
        size: "sm",
        offset: 2,
        classNames: {
          content: cn("p-0"),
        }
      }}
      listboxProps={{
        classNames:{
          list: cn("[&_li]:!rounded-md"),
        },
        color: "secondary"
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.value}>
          {item.value}
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
}

function DropStatus({ defaultItems, placeholder }) {
  const [status, setStatus] = useState(placeholder)

  return (
    <Autocomplete
      defaultItems={defaultItems}
      placeholder={placeholder}
      labelPlacement={"outside"}
      variant="underlined"
      aria-label={placeholder}
      size="sm"
      inputProps={{
        classNames: {
          base: cn(
            "px-2",
            status === "En Proceso" && "bg-cyan-500",
            status === "Finalizada" && "bg-sky-800",
            status === "Reprogramada" && "bg-lime-500",
          ),
          innerWrapper: cn("!border-none !shadow-none px-2"),
          inputWrapper: cn(
            "!border-none !shadow-none after:!hidden"
          ),
          input: cn(
            "placeholder:!not-italic placeholder:text-inherit placeholder:font-bold",
            "!border-none max-w-[100px] !p-0 !font-bold",
            "!text-white",
            status === "Reprogramada" && "!text-black",
          ),
        }
      }}
      popoverProps={{
        radius: "sm",
        shadow: "sm",
        size: "sm",
        offset: 2,
        classNames: {
          content: cn("p-0"),
        }
      }}
      listboxProps={{
        classNames:{
          list: cn("[&_li]:!rounded-md"),
        },
        color: "secondary"
      }}
      onInputChange={(value) => setStatus(value)}
    >
      {(item) => (
        <AutocompleteItem key={item.value}>
          {item.value}
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
}

