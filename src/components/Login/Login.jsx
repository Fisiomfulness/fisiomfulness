"use client";

{/*
import React from "react";
import { Group } from "../Group";
import Link from "next/link";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
      <div className="bg-[#68bce3] flex flex-row justify-center w-screen">
        <div className="bg-[#68bce3] w-full h-full">
          <div className="relative w-full h-full top-[0px] left-3">
            <div className= "relative w-[1640px] h-[820px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#ffffff] rounded-[6px] shadow-[0px_4px_4px_#00000040]"/>
            <Group className="!absolute !left-[772px] !top-[495px]" />
            <div className="absolute w-[329px] h-[232px] top-[422px] left-[1423px]">
              <div className="absolute w-[327px] h-[124px] top-[108px] left-px">
                <p className="absolute top-[113px] left-[10px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#000000] text-[9px] tracking-[0] leading-[normal]">
                  <span className="[font-family:'Raleway-Italic',Helvetica] italic">
                    Contraseña{" "}
                  </span>
                  <span className="[font-family:'Raleway-BoldItalic',Helvetica] font-bold italic">
                    olvidada ?
                  </span>
                </p>
                <div className="absolute w-[57px] h-[22px] top-0 left-[6px]">
                  <div className="absolute top-[5px] left-[4px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#ff6060] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Required
                  </div>
                </div>
                <Link
                  href="/"
                  className="absolute w-[323px] h-[37px] top-[52px] left-0 bg-[#68bce3]"
                >
                  <button className="absolute top-[13px] left-[145px] [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                    LOGIN
                  </button>
                </Link>
              </div>
              <style jsx global>{`
                input:focus {
                  outline: none;
                  border: 2px solid #4a4a4a;
                }
              `}</style>

              <div className="absolute w-[325px] h-[32px] top-[65px] left-0 bg-[url(/rectangle-8.svg)] bg-[100%_100%]">
                <input
                  type="password"
                  alt="Rectangle"
                  className="absolute w-[325px] h-[32px] top-0 left-0 bg-[url(https://c.animaapp.com/lrtxPsMD/img/rectangle-9.svg)] bg-[100%_100%] z-[50] focus:border-gray-900"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingLeft: "10px" }}
                />
              </div>

              <input
                type="email"
                alt="Rectangle"
                className="absolute w-[325px] h-[32px] top-0 left-0 bg-[url(https://c.animaapp.com/lrtxPsMD/img/rectangle-9.svg)] bg-[100%_100%] z-[50] focus:border-gray-900"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: "10px" }}
              />
            </div>
            <img
              className="absolute w-[1075px] h-[1075px] bottom-[0px] left-[0px] object-cover"
              alt="Logo"
              src="https://c.animaapp.com/lrtxPsMD/img/logo-fisiomfulness-f-2.png"
            />
            <div className="absolute w-[95px] h-[25px] top-[683px] left-[1570px]">
              <div className="relative w-[93px] h-[25px] bg-[#68bce3] rounded-[3px]">
                <Link
                  href="/registro"
                  className="absolute top-[6px] left-[21px] [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  Registrarse
                </Link>
              </div>
            </div>
            <div className="absolute top-[688px] left-[1478px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#000000] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
              No tiene cuenta?
            </div>
          </div>
        </div>
      </div>
  );
};

*/}

import React from "react";
import { Group } from "../Group";
import Link from "next/link";


export const Login = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

  return (
    <div className="bg-[#68bce3] flex flex-row justify-center w-full">
      <div className="bg-[#68bce3] w-[1440px] h-[1024px]">
        <div className="relative w-[1310px] h-[925px] top-[99px]">
          <div className="absolute w-[1127px] h-[667px] top-[2px] left-[183px] bg-[#ffffff] rounded-[6px] shadow-[0px_4px_4px_#00000040]" />
          <Group className="!absolute !left-[372px] !top-[285px]" />
          <div className="absolute w-[329px] h-[232px] top-[192px] left-[823px]">
            <div className="absolute w-[327px] h-[124px] top-[108px] left-px">
              <p className="absolute top-[113px] left-[10px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#000000] text-[9px] tracking-[0] leading-[normal]">
                <span className="[font-family:'Raleway-Italic',Helvetica] italic">Contraseña </span>
                <span className="[font-family:'Raleway-BoldItalic',Helvetica] font-bold italic">olvidada ?</span>
              </p>
              <div className="absolute w-[57px] h-[22px] top-0 left-[6px]">
                <div className="absolute top-[5px] left-[4px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#ff6060] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                  Required
                </div>
              </div>


              <Link href="/"
                  className="absolute w-[323px] h-[37px] top-[52px] left-0 bg-[#68bce3]"
                >
                  <button className="absolute top-[13px] left-[145px] [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[12px] tracking-[0] leading-[normal] whitespace-nowrap">
                    LOGIN
                  </button>
                </Link>

              
              
            </div>
            <div className="absolute w-[325px] h-[32px] top-[65px] left-0 bg-[url(/rectangle-8.svg)] bg-[100%_100%]">
            <input
                  type="password"
                  alt="Rectangle"
                  className="absolute w-[325px] h-[32px] top-0 left-0 bg-[url(https://c.animaapp.com/lrtxPsMD/img/rectangle-9.svg)] bg-[100%_100%] z-[50] focus:border-gray-900"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ paddingLeft: "10px" }}
                />
            </div>
            <input
                type="email"
                alt="Rectangle"
                className="absolute w-[325px] h-[32px] top-0 left-0 bg-[url(https://c.animaapp.com/lrtxPsMD/img/rectangle-9.svg)] bg-[100%_100%] z-[50] focus:border-gray-900"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ paddingLeft: "10px" }}
              />
          </div>
          <img
            className="absolute w-[922px] h-[925px] top-0 left-0 object-cover"
            alt="Logo FISIOMFULNESS f"
            src="https://c.animaapp.com/lrtxPsMD/img/logo-fisiomfulness-f-2.png"
          />
          <div className="absolute w-[95px] h-[25px] top-[483px] left-[970px]">
            <div className="relative w-[93px] h-[25px] bg-[#68bce3] rounded-[3px]">
            <Link
                  href="/registro"
                  className="absolute top-[6px] left-[21px] [font-family:'Raleway-Bold',Helvetica] font-bold text-[#ffffff] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap"
                >
                  Registrarse
                </Link>
            </div>
          </div>
          <div className="absolute top-[488px] left-[878px] [font-family:'Raleway-Regular',Helvetica] font-normal text-[#000000] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
            No tiene cuenta?
          </div>
        </div>
      </div>
    </div>
  );
};





