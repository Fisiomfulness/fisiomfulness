'use client';

/* import React from "react";
import "./Recupero.css";
import { Group } from "../Group";


const Recupero = () => {
  return (
    <div className="login bg-[#68bce3] flex flex-row justify-center w-screen">
    <div className="w-full h-[1024px] relative bg-lightskyblue overflow-hidden flex flex-row items-end justify-start pt-[99px] px-0 pb-0 box-border">
      <footer className="h-[925px] w-[1327px] flex flex-col items-start justify-end py-0 pr-5 pl-0 box-border">
        <main className="w-[1865px] h-[1469px] relative">
          <img
            className="logo-fisiom absolute object-cover bottom-0 left-0"
            alt=""
            src="https://c.animaapp.com/lrtxPsMD/img/logo-fisiomfulness-f-2.png"
          />
          <section className="absolute top-[49px] left-[738px] rounded-md bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1127px] h-[667px] z-[1] text-left text-xs text-deepskyblue font-raleway">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1127px] h-[667px] hidden" />
            
            {/* <div className="absolute top-[274px] left-[192px] w-[189px] h-[65px] z-[2] text-xl">
              <img
                className="absolute h-[61.54%] w-[21.16%] top-[0%] right-[40.74%] bottom-[38.46%] left-[38.1%] rounded-md max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/logo_dark.png"
              />
              <h2 className="m-0 absolute top-[43.08%] left-[11.64%] text-inherit font-extrabold font-open-sans z-[1]">
                Fisiom
              </h2>
              <h2 className="m-0 absolute top-[46.15%] left-[48.68%] text-inherit font-extrabold font-inherit text-dimgray-200 z-[1]">
                fulness
              </h2>
              <i className="absolute top-[81.54%] left-[0%] text-[10px] font-medium text-dimgray-100">
                Cuidamos tu cuerpo y sanamos tu mente
              </i>
  </div> 

<Group className="logo-container" />

            <input
              className="w-full [border:none] [outline:none] bg-whitesmoke absolute top-[258px] left-[648px] h-8 py-[9px] px-[21px] box-border font-raleway text-xs text-darkslategray z-[2]"
              placeholder="email"
              type="text"
            />
            <div className="absolute top-[392px] left-[649px] text-darkslategray z-[2]">
              <span>{`Ingrese su `}</span>
              <i className="font-bold">email</i>
              <span>{` para recuperar la `}</span>
              <i className="font-bold">password</i>
            </div>
            <div className="absolute top-[318px] left-[649px] w-[323px] h-[37px] z-[2] text-black">
              <i className="absolute top-[164.86%] left-[3.1%] text-[9px] hidden">
                Forgot password?
              </i>
              <div className="absolute h-[37.84%] w-[15.79%] top-[-181.08%] right-[80.8%] bottom-[243.24%] left-[3.41%] hidden text-tomato">
                <div className="absolute top-[0%] left-[0%]">Required</div>
              </div>
              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-lightskyblue hidden" />
              <b className="absolute top-[35.14%] left-[43.03%] text-white z-[1]">
                ENVIAR
              </b>
            </div>
          </section>
        </main>
      </footer>
    </div>
  </div>);
};

export default Recupero; */

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


