'use client'
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";

const ServicioAsideBar = () => {
    const path = usePathname()
    console.log(path)
  return (
    <aside className="flex justify-center ">
      <div className="flex flex-row md:flex-col">
        <Button
          radius="none"
          className="bg-action-green text-white rounded-l-md md:rounded-t-md md:rounded-l-none"
        >
          Perfil Profesional
        </Button>
        <Button color="secondary" radius="none">
          Precios
        </Button>
        <Button color="secondary" radius="none">
          Experiencia
        </Button>
        <Button className="rounded-r-md md:rounded-r-none md:rounded-b-md" color="secondary" radius="none">
          Turno
        </Button>
      </div>
    </aside>
  );
};

export default ServicioAsideBar;
