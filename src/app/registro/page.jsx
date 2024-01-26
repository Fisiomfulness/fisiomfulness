"use client";
import React, { useState } from "react";
import FisiumLogo from "../../assets/Logo.svg";
import FisiumLogoBackground from "../../assets/LogoSimple.svg";
import Link from "next/link";
import Image from "next/image";
import { RadioGroup, Radio, Card, CardBody } from "@nextui-org/react";
import RegistroUsuario from "@/components/Registro/RegistroUsuario";
import RegistroProfesional from "@/components/Registro/RegistroProfesional";

const page = () => {
  const [selected, setSelected] = useState("usuario");

  return (
    <div className="flex justify-center items-center bg-[#68BCE3] w-full static">
      <Card className="flex items-center h-auto w-4/5 md:w-[928px] min-h-[512px] h-auto">
        <CardBody className="flex md:flex-row justify-between items-center w-full md:w-4/5">
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
          {selected === "usuario" ? (
            <RegistroUsuario />
          ) : (
            <RegistroProfesional />
          )}
        </CardBody>
      </Card>
    </div>
  );
};

export default page;
