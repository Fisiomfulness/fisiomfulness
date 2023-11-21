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

const animals = [
  {
    label: "Cat",
    value: "cat",
  },
  {
    label: "Dog",
    value: "dog",
  },
  {
    label: "Elephant",
    value: "elephant",
  },
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

const columns = [
  { key: "paciente", label: "Paciente" },
  { key: "citas", label: "Citas" },
  { key: "estado", label: "Estado" },
];

function TableExample() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="No hay pacientes">
        {rows.map((row) => (
          <TableRow key={row.key}>
            <TableCell>{row.name}</TableCell>
            <TableCell>{row.date}</TableCell>
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
      <Autocomplete
        defaultItems={animals}
        labelPlacement={"outside"}
        placeholder="Favorite Animal"
        className="max-w-xs"
        variant="underlined"
      >
        {(item) => (
          <AutocompleteItem key={item.value}>
            {item.label}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <TableExample />
    </div>
  )
}
