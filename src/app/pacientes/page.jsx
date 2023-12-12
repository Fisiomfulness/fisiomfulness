import { Tabla } from "@/features/pacientes";
import { cn } from "@nextui-org/react";

export default function PacientesPage() {
  return (
    <div
      className={cn(
        "flex justify-center flex-col items-center",
        "px-6 pb-12 overflow-hidden w-full",
      )}
    >
      <p className="pb-6 text-xl font-semibold">Historia Clinica - Pacientes</p>
      <Tabla />
    </div>
  );
}
