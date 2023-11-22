import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { cn } from "../utils"

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
  "px-6 text-black",
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
                <div className="max-w-[240px] bg-white">
                  <Drop
                    defaultItems={[
                      {label: "date1", value: "10.04.2023"},
                      {label: "date2", value: "11.02.2021"},
                      {label: "date3", value: "10.10.2020"},
                    ]}
                    placeholder={"Seleccione una cita"}
                  />
                </div>
              </td>
              <td
                className={cn(
                  row__item_class,
                  "font-bold text-white",
                  item.status === "En Proceso" && "bg-cyan-500",
                  item.status === "Finalizada" && "bg-sky-800",
                  item.status === "Reprogramada" && "bg-lime-500 text-black",
                )}
              >
                {item.status}
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
          innerWrapper: cn("!border-none !shadow-none"),
          inputWrapper: cn(
            "!border-none !shadow-none after:!hidden"
          ),
          input: cn(
            "placeholder:!not-italic placeholder:text-inherit !border-none"
          ),
        }
      }}
      popoverProps={{
        radius: "none",
        shadow: "sm",
        size: "sm",
        offset: 2,
        classNames: {
          content: cn("p-0"),
        }
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

