"use client";
import { useRouter } from "next/navigation";
import img from "../../../public/prod2Prueba.png";

export const ProductCard = ({ prod }) => {
  const router = useRouter();

  const onClick = (id) => {
    router.push(`/productos/${id}`);
  };

  return (
    <div
      className="w-[230px] h-[290px] relative bg-cover rounded-md overflow-hidden cursor-pointer "
      style={{
        background: `url(${img.src})`,
      }}
      onClick={() => onClick(prod.id)}
    >
      <div className="absolute flex bottom-0 w-full h-2/5 bg-[#A1D3ED] bg-opacity-70 items-center">
        <span className="text-[#003953] font-black text-lg ml-4">
          {prod.nombre}
        </span>
      </div>
    </div>
  );
};
