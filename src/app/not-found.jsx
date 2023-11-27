import Image from "next/image";
import Error404 from "../assets/Error404.png";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center relative">
        <h2 className="text-8xl text-primary">4</h2>
        <h2 className="text-8xl text-[#3DAADD]">0</h2>
        <h2 className="text-8xl text-primary">4</h2>

        <div className="flex items-baseline w-16 h-16 absolute -right-14">
          <Image width={50} height={50} src={Error404} alt="Error 404" />
        </div>
      </div>

      <div className="flex flex-col m-4 text-sm items-center justify-center">
        <p className="m-1">
          Es posible que la entrada haya sido eliminada o que la dirección no
          exista.
        </p>
        <p className="m-1">
          Haz{" "}
          <span className="text-primary cursor-pointer underline">
            click aqui
          </span>{" "}
          para volver al home.
        </p>
      </div>
    </div>
  );
}
