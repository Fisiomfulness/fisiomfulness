"use client";
import React from "react";
import CustomInput from "@/features/ui/components/CustomInput/CustomInput";
import CustomButton from "@/features/ui/components/CustomButton/CustomButton";

function RegistroProfesional() {
  return (
    <form>
      <div>
        <CustomInput placeholder="Nombre completo" className="border-none" />
        <CustomInput
          placeholder="Telefono"
          type="text"
          className="border-none"
        />
        <CustomInput placeholder="Email" type="text" className="border-none" />
        <CustomInput
          placeholder="Contraseña"
          type="text"
          className="border-transparent"
        />
        <CustomInput
          placeholder="Repita contraseña"
          type="text"
          className="border-transparent"
        />
        <CustomInput
          placeholder="Numero colegiado"
          type="text"
          className="border-transparent"
        />
        <CustomInput
          placeholder="Ciudad"
          type="text"
          className="border-transparent"
        />
        <CustomButton>Crear perfil</CustomButton>
      </div>
    </form>
  );
}

export default RegistroProfesional;
