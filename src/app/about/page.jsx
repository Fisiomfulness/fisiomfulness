import imgTop from "@/assets/about/top.svg";
import imgBot from "@/assets/about/bot.svg";
import Logo from "@/assets/Logosimple.svg";
import ImgAbout from "./imgAbout";
import Image from "next/image";
import text from "./text";

export default function About() {
  return (
    <div className="w-full min-h-screen relative">
      <ImgAbout image={imgTop} />
      <div className="w-full h-full flex flex-col px-56 ">
        <h1 className=" text-2xl pb-10">
          Quienes <span className="text-[#3DAADD]">somos</span>
        </h1>
        <div className="pb-14 ">
          {text.map((item, index) => (
            <p key={index} className="text-xs pb-4 text-gray-950">
              {item}
            </p>
          ))}
          ;
        </div>
        <p className="text-sm text-center">
          ¡Bienvenidos a FisiomFulness, donde el bienestar es nuestro compromiso
          y su satisfacción es nuestro éxito!
        </p>
        <div className="w-full h-full flex justify-center item-center py-10">
          <Image src={Logo} alt="Logo" width={30} height={30} />
        </div>
      </div>
      <ImgAbout image={imgBot} />
    </div>
  );
}
