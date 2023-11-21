"use client"

import {Autocomplete, AutocompleteItem} from "@nextui-org/react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";

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

const columns = [
  { key: "paciente", label: "Paciente" },
  { key: "citas", label: "Citas" },
  { key: "estado", label: "Estado" },
];

function Drop({ defaultItems, placeholder }) {
  return (
    <Autocomplete
      defaultItems={defaultItems}
      labelPlacement={"outside"}
      placeholder={placeholder}
      className="max-w-xs"
      variant="underlined"
    >
      {(item) => (
        <AutocompleteItem key={item.value}>
          {item.value}
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
}

function TableExample() {
  return (
    <Table
      removeWrapper
      aria-label="Example table with dynamic content"
      className="bg-blue-800 text-black"
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn
            key={column.key}
            className="bg-transparent text-white"
          >
            {column.label}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="No hay pacientes">
        {rows.map((row) => (
          <TableRow key={row.key}>
            <TableCell>{row.name}</TableCell>
            <TableCell>
              <div className="flex justify-center items-center">
                <Drop
                  defaultItems={[
                    {label: "Cat", value: "10.04.2023"},
                    {label: "Dog", value: "11.02.2021"},
                    {label: "Elephant", value: "10.10.2020"},
                  ]}
                  placeholder={"Seleccione una cita"}
                />
                {row.date}
              </div>
            </TableCell>
            <TableCell>{row.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default function PacientesPage() {
  return (
    <div className="bg-black min-h-screen">
      <div>historia pacientes</div>
      <TableExample />
    </div>
  )
}
