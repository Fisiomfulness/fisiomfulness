"use client";
import React, { useState } from "react";
import FisiumLogo from "../../assets/Logo.svg";
import Link from "next/link";
import Image from "next/image";
import { RadioGroup, Radio } from "@nextui-org/react";
import RegistroUsuario from "@/components/Registro/RegistroUsuario";
import RegistroProfesional from "@/components/Registro/RegistroProfesional";

const page = () => {
  const [selected, setSelected] = useState("usuario");

  return (
    <div className="flex flex-auto justify-evenly items-center">
      <div className="flex flex-col">
        <Link href="/" className="pb-16">
          <Image
            width={240}
            src={FisiumLogo}
            alt="Logo Fisiom fulness"
            priority
          />
        </Link>
        <div className="flex justify-center">
          <RadioGroup
            label="Registrate"
            value={selected}
            onValueChange={setSelected}
          >
            <Radio value="usuario">Usuario</Radio>
            <Radio value="profesional">Profesional</Radio>
          </RadioGroup>
        </div>
      </div>
      {selected === "usuario" ? <RegistroUsuario /> : <RegistroProfesional />}
    </div>
  );
};

export default page;
