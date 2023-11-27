"use client";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/react";
import NextLink from "next/link";

const ServicioAsideBar = () => {
  const path = usePathname();
  console.log(path);

  const buttons = [
    { name: "Perfil profesional", href: "/servicios/detalle/perfil",color:"secondary" ,className: "text-white rounded-l-md md:rounded-t-md md:rounded-l-none hover:text-white" },
    { name: "precios", href: "/servicios/detalle/precios", color: "secondary", className:"hover:text-white" },
    { name: "experiencia", href: "/servicios/detalle/experiencia", color: "secondary",  className:"hover:text-white"},
    { name: "turno", href: "/servicios/detalle/turno", className: "rounded-r-md   md:rounded-r-none md:rounded-b-md hover:text-white", color: "secondary" },
  ];

  return (
    <aside className="flex justify-center ">
      <div className="flex flex-row md:flex-col">
        {buttons.map((button, index) => (
          <Button
            key={index}
            name={button.name}
            as={NextLink}
            href={button.href}
            color={path === button.href ? "primary" : button.color}
            radius="none"
            className={button.className}
          >
            {button.name}
          </Button>
        ))}
      </div>
    </aside>
  );
};

export default ServicioAsideBar;
