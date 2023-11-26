import imgTop from "@/assets/about/top.svg";
import imgBot from "@/assets/about/bot.svg";
import ImgAbout from "./imgAbout";

export default function About() {
  return (
    <div className="w-full min-h-screen relative">
      <ImgAbout image={imgTop} />
      <div className="w-full h-full flex items-center">
        <h1>Quienes somos</h1>
      </div>
      <ImgAbout image={imgBot} />
    </div>
  );
}
