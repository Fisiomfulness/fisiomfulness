"use client";

import { cn } from "@/features/ui";
import { Button, Select, SelectItem } from "@nextui-org/react";
import { useState } from "react";

export default function Selector() {
  const [state, setState] = useState("");

  return (
    <div className="w-full flex flex-row justify-between flex-wrap gap-4">
      <Select
        variant="flat"
        radius="sm"
        labelPlacement={"outside"}
        placeholder={"Seleccione una opcion"}
        className="max-w-[200px]"
        color="primary"
        aria-label={"Seleccione una opcion"}
        onChange={(e) => setState(e.target.value)}
        classNames={{
          trigger: cn("bg-[#D8EEF8]"),
          value: cn("text-black"),
        }}
        popoverProps={{
          radius: "sm",
          shadow: "sm",
          size: "sm",
          offset: 2,
          classNames: {
            content: cn("p-0 bg-[#D8EEF8] shadow-none"),
          },
        }}
        listboxProps={{
          classNames: {
            list: cn("[&_li]:!rounded-md"),
          },
          color: "primary",
        }}
      >
        {["Reprogramar", "Cancelar"].map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
      {state && (
        <div className="flex flex-row gap-2">
          <Button radius="sm" color="secondary" className="w-28">
            Aceptar
          </Button>
          <Button radius="sm" color="primary" className="w-28">
            Cancelar
          </Button>
        </div>
      )}
    </div>
  );
}
