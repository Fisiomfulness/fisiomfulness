"use client";
import { useState } from "react";
import { CustomLogo } from "@/features/ui";
import Link from "next/link";
import { RadioGroup, Radio, Card, CardBody } from "@nextui-org/react";
import RegistroUsuario from "@/components/Registro/RegistroUsuario";
import RegistroProfesional from "@/components/Registro/RegistroProfesional";

const RegistroPage = () => {
  const [selected, setSelected] = useState("usuario");

  return (
    <div className="flex justify-center items-center bg-[#68BCE3] w-full static">
      <Card className="flex items-center h-auto w-full min-[440px]:w-4/5 md:w-[1028px] min-h-[512px] h-auto">
        <CardBody className="flex justify-between items-center w-full md:flex-row md:w-4/5">
          <div className="flex flex-col justify-center items-center">
            <Link href="/" className="pb-16">
              <CustomLogo width={220} color="dark" />
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
            {selected === "profesional" && (
              <div className="py-8 w-2/3">
                <label className="text-[9px]">
                  <input type="checkbox" /> Acepto los{" "}
                  <a className="text-primary"> términos y condiciones </a> del
                  servicio de fisiom fulness. Declaro haber leído y entiendo la
                  política de privacidad
                </label>
                <br />
                <input type="checkbox" />
                <label className="text-[9px]">
                  {" "}
                  Doy mi consentimiento y acepto recibir información sobre los{" "}
                  <a className="text-primary">
                    servicios y novedades de fisiom fulness . Qué significa
                    esto?
                  </a>
                </label>
              </div>
            )}
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

export default RegistroPage;
