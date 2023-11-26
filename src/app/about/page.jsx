import imgTop from "@/assets/about/top.svg";
import imgBot from "@/assets/about/bot.svg";
import Logo from "@/assets/Logosimple.svg";
import ImgAbout from "./imgAbout";
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full min-h-screen relative">
      <ImgAbout image={imgTop} />
      <div className="w-full h-full flex flex-col items-center">
        <h1>
          Quienes <span className="text-[#3DAADD]">somos</span>
        </h1>
        <p>
          En FisiomFulness, somos mucho más que una startup en el mundo de la
          salud. Nuestro enfoque va más allá de los límites tradicionales de la
          atención médica, abrazando la salud física, mental y nutricional como
          pilares fundamentales para una vida plena y saludable. Creemos que la
          salud no es un lujo, sino un derecho fundamental de cada ser humano. Y
          es por eso que hemos decidido desafiar el statu del sistema de salud,
          hemos dado un paso valiente. Mientras los profesionales de la salud a
          menudo reciben un porcentaje minimo de ganancia, en FisiomFulness,
          tendran la oportunidad de obtener mejores ingresos. Porque entendemos
          que, para cambiar el mundo, primero debemos recompensar y empoderar a
          aquellos que trabajan incansablemente para mejorar nuestras vidas.
          Cada persona que se cruza con FisiomFulness es más que un cliente o un
          profesional de la salud; son parte de nuestra familia. Cuando usted
          confía en nosotros, confía en una comunidad apasionada que lo apoya en
          su búsqueda de bienestar. Nos esforzamos por crear un ambiente de
          apoyo, empatía y comprensión, donde usted se sienta seguro para
          embarcarse en su viaje hacia la salud física, mental y nutricional. En
          FisiomFulness, el bienestar es un viaje que emprendemos juntos. No
          importa cuál sea su punto de partida, estamos comprometidos a ayudarle
          a alcanzar sus metas y a vivir la vida al máximo. Creemos que el
          bienestar no es un destino, sino un camino continuo, y estamos aquí
          para guiarle en cada paso del camino. Así que, únase a nosotros en
          este viaje hacia una vida más saludable y significativa.
        </p>
        <p>
          ¡Bienvenidos a FisiomFulness, donde el bienestar es nuestro compromiso
          y su satisfacción es nuestro éxito!
        </p>
        <Image src={Logo} alt="Logo" width={150} height={150} />
      </div>
      <ImgAbout image={imgBot} />
    </div>
  );
}
