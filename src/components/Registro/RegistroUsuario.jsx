"use client";
import React, { useState } from "react";
import CustomInput from "@/features/ui/components/CustomInput/CustomInput";
import CustomButton from "@/features/ui/components/CustomButton/CustomButton";

function RegistroUsuario() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isInvalid, setIsInvalid] = useState({
    name: false,
    pass: false,
    email: false,
    repitPass: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, pass, repitPass } = e.target;

    const draft = {
      ...isInvalid,
      name: !name.value,
      pass: !pass.value,
      email: !email.value,
      repitPass: !repitPass.value,
    };

    if (Object.values(draft).every((value) => value === false)) {
      setIsSubmit(true);
      if (pass !== repitPass) {
      }
    } else {
      setIsSubmit(false);
    }
    setIsInvalid(draft);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <CustomInput
          name="name"
          placeholder="Nombre completo"
          type="text"
          className="my-8"
          isInvalid={isInvalid.name}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          type="email"
          className="my-8"
          isInvalid={isInvalid.email}
        />
        <CustomInput
          name="pass"
          placeholder="Contraseña"
          type="password"
          className="my-8"
          isInvalid={isInvalid.pass}
        />
        <CustomInput
          name="repitPass"
          placeholder="Repita contraseña"
          type="password"
          className="my-8"
          isInvalid={isInvalid.repitPass}
        />

        {isSubmit ? <p className="text-green-600">Perfil creado</p> : <></>}
        <CustomButton type="submit">Crear perfil</CustomButton>
      </div>
    </form>
  );
}

export default RegistroUsuario;
