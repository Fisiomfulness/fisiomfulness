"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CustomButton,
  CustomInput,
  CustomLogo,
  CustomOverlay,
  cn,
} from "@/features/ui";

// NOTE: componente temporal hasta mejorar los estilos en
// las validaciones de CustomInput
function CustomInputValidator(props) {
  return (
    <CustomInput
      variant="flat"
      classNames={{
        base: "!h-[4.5rem]",
        inputWrapper: cn("!mb-6", props.isInvalid && "!border-1 border-danger"),
        helperWrapper: "-top-6",
        errorMessage: "text-sm",
      }}
      {...props}
    />
  );
}

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <CustomOverlay
      className={[
        "px-4 w-full bg-primary-400",
        "flex justify-center items-center",
      ].join(" ")}
    >
      <img
        className="absolute bottom-0 left-0 h-1/2 max-sm:w-2/3 max-sm:h-auto"
        alt="logo_overlay"
        src="/logo_overlay.png"
      />
      <div
        className={[
          "max-w-3xl w-full rounded-md bg-white max-sm:px-4 py-20",
          "flex flex-row max-sm:flex-col max-sm:gap-8 items-center justify-evenly",
        ].join(" ")}
      >
        <CustomLogo width="220" color="dark" />

        <div className="flex flex-col gap-2 max-w-xs w-full z-10">
          <CustomInputValidator
            isInvalid={email.length === 0} // TODO: mejorar la condicion
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInputValidator
            isInvalid={password.length === 0} // TODO: mejorar la condicion
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CustomButton className="bg-primary-400 mt-2" as={Link} href="/">
            LOGIN
          </CustomButton>
          <Link href="/recupero" className="w-full italic mt-1">
            Contraseña <strong>olvidada ?</strong>
          </Link>

          <div className="flex flex-row justify-center items-center gap-4 mt-8">
            <p>No tiene cuenta?</p>
            <CustomButton
              className="bg-primary-400 min-w-fit !w-fit py-2"
              as={Link}
              href="/registro"
            >
              Registrarse
            </CustomButton>
          </div>
        </div>
      </div>
    </CustomOverlay>
  );
};
