"use client"

import { Tabla } from "@/features/ui";
import { cn } from "@nextui-org/react";

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

export default function PacientesPage() {
  return (
    <div
      className={cn(
        "flex justify-center flex-col items-center min-h-screen overflow-hidden"
      )}
    >
      <p className="pb-6 text-xl font-semibold">
        Historia Clinica Pacientes
      </p>
      <Tabla />
    </div>
  )
}
