"use client";

import React from "react";
import { Group } from "../Group";
import Link from "next/link";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

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

                  <div className="relative w-[325px] h-[32px]  bg-[url(/rectangle-8.svg)] bg-[100%_100%]">
                    <input
                      type="password"
                      alt="Rectangle"
                      className="relative w-[325px] h-[32px] bg-[url(https://c.animaapp.com/lrtxPsMD/img/rectangle-9.svg)] bg-[100%_100%] z-[50] focus:border-gray-900"
                      placeholder="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ paddingLeft: "10px", width: "100%" }}
                    />
                  </div>

                  <Link
                    href="/"
                    className="relative w-[323px] h-[37px]  bg-[#68bce3] flex items-center top-4"
                  >
                    <button className="relative [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap items-center text-center w-full flex justify-center">
                      LOGIN
                    </button>
                  </Link>
                  <p className="relative  [font-family:'Raleway-Regular',Helvetica] font-normal text-[#000000] text-[9px] tracking-[0] leading-[normal] flex justify-start text-left w-full">
                    <span className="[font-family:'Raleway-Italic',Helvetica] italic">
                      Contraseña{" "}
                    </span>
                    <span className="[font-family:'Raleway-BoldItalic',Helvetica] font-bold italic relative left-1">
                      olvidada ?
                    </span>
                  </p>
                  <div className="relative w-[57px] h-[22px]">
                    <div className="relative [font-family:'Raleway-Regular',Helvetica] font-normal text-[#ff6060] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap hidden">
                      {/* Required queda pendiente hasta definir funcionalidad */}
                      Required
                    </div>
                  </div>
                </div>
              </div>

              <div className="text relative flex items-center justify-between max-w-[180px] w-full">
                <div className="relative  [font-family:'Raleway-Regular',Helvetica] font-normal text-[#000000] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                  No tiene cuenta?
                </div>
                <div className="relative w-[93px] h-[25px] bg-[#68bce3] rounded-[3px] flex items-center">
                  <Link
                    href="/registro"
                    className="relative [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap items-center text-center w-full flex justify-center"
                  >
                    Registrarse
                  </Link>
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





