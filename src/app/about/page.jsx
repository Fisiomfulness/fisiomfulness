import imgTop from "@/assets/about/top.svg";
import imgBot from "@/assets/about/bot.svg";
import ImgAbout from "./imgAbout";
import Image from "next/image";
import text from "./text";

export default function About() {
  return (
    <div className="w-full">
      <ImgAbout image={imgTop} />
      <div className="w-full flex flex-col px-10 md:px-16 lg:px-52">
        <h1 className="text-2xl pb-5 lg:pb-10">
          Quiénes <span className="text-[#3DAADD]">somos</span>
        </h1>
        <div className="pb-14">
          {text.map((item, index) => (
            <p key={index} className="text-sm pb-4 text-gray-950">
              {item}
            </p>
          ))}
        </div>
        <p className="text-base text-center">
          ¡Bienvenidos a FisiomFulness, donde el bienestar es nuestro compromiso
          y su satisfacción es nuestro éxito!
        </p>
        <div className="w-full flex justify-center item-center pt-16">
          <Image
            src="/logo_simple.webp"
            width={30}
            height={30}
            alt="logo_simple"
          />
        </div>
      </div>
      <ImgAbout image={imgBot} />
    </div>
  );
}
