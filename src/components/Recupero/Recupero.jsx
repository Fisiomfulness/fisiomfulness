'use client';

import React from "react";
import "./Recupero.css";
import { Group } from "../Group";
import Link from "next/link";

const Recupero = () => {
  const [email, setEmail] = React.useState("");

  return (
    <div className="login bg-[#68bce3] flex flex-row justify-center w-screen">
      <div className="container relative bg-[#68bce3] flex justify-center items-center">
        <div className="form-container relative flex justify-center items-center ">
          <div className="formulario relative bg-[#ffffff] flex items-center justify-between">
            <Group className="logo-container" />

            <div className="input-container relative w-[329px] h-[232px] ">
              <div className="relative w-[327px] ">
                <div className="input-content relative w-[327px] ">
                  <div className="relative w-[325px] h-[32px] ">
                    <input
                      type="email"
                      alt="Rectangle"
                      className="relative w-[325px] h-[32px]  bg-[url(https://c.animaapp.com/lrtxPsMD/img/rectangle-9.svg)] bg-[100%_100%] z-[50] focus:border-gray-900"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ paddingLeft: "10px" }}
                    />
                  </div>

                  <Link
                    href="/"
                    className="relative w-[323px] h-[37px]  bg-[#68bce3] flex items-center top-4"
                  >
                    <button className="relative [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap items-center text-center w-full flex justify-center">
                      ENVIAR
                    </button>
                  </Link>
                  <div className="w-[323px] h-[37px] relative text-[12px] text-darkslategray text-left inline-block font-raleway">
                    <span>{`Ingrese su `}</span>
                    <i className="font-bold">email</i>
                    <span>{` para recuperar la `}</span>
                    <i className="font-bold">password</i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="logo-fisiom absolute object-cover bottom-0 left-0"
          alt="Logo FISIOMFULNESS f"
          src="https://c.animaapp.com/lrtxPsMD/img/logo-fisiomfulness-f-2.png"
        />
      </div>
    </div>
  );
};

export default Recupero;


