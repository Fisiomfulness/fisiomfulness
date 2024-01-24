"use client";
import React from "react";
import CustomInput from "@/features/ui/components/CustomInput/CustomInput";
import CustomButton from "@/features/ui/components/CustomButton/CustomButton";

function RegistroUsuario() {
  const styleInput = "pb-9";
  return (
    <form>
      <div>
        <CustomInput
          placeholder="Nombre completo"
          type="text"
          className={styleInput}
        />
        <CustomInput placeholder="Email" type="text" className={styleInput} />
        <CustomInput
          placeholder="Contraseña"
          type="text"
          className={styleInput}
        />
        <CustomInput
          placeholder="Repita contraseña"
          type="text"
          className={styleInput}
        />
        <CustomButton>Crear perfil</CustomButton>
      </div>
    </form>
  );
}

export default RegistroUsuario;
