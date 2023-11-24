import Image from "next/image";
import img from "../../../public/prod3Prueba.png";

const Detail = () => {
  return (
    <section className="w-[70%] min-h-full flex justify-center">
      <div className="flex flex-col mt-10 mb-10">
        <div className="flex flex-col w-full">
          <h2>Producto</h2>
          <span className="flex items-center pl-2 text-[#ffffff] bg-[#369DCC] w-[157px] h-[29px] rounded-sm">
            $1000
          </span>
        </div>
        <div className="flex pt-4">
          <div className="flex flex-col w-[422px] gap-3 text-justify">
            <Image
              width={422}
              height={350}
              src={img.src}
              alt="imagen del prodcuto"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              accusamus atque optio natus labore nulla recusandae similique iure
              dolorum consequuntur. Aliquid laboriosam perspiciatis enim
              tempore?
            </p>
            <div className="flex w-full justify-between items-center pt-5">
              <button className="w-[195px] h-[48px] bg-[#3DAADD] text-[#ffffff] rounded-sm hover:bg-secondary  duration-300">
                Argegar carrito
              </button>
              <div className="flex gap-3">
                <button className="w-[40px] h-[30px] bg-[#3DAADD] text-[#ffffff] rounded-sm  hover:bg-secondary  duration-300">
                  -
                </button>
                <span className="flex w-[65px] h-[30xp] bg-[#3DAADD] text-[#ffffff] justify-center items-center rounded-sm ">
                  1
                </span>
                <button className="w-[40px] h-[30px] bg-[#3DAADD] text-[#ffffff] rounded-sm  hover:bg-secondary  duration-300">
                  +
                </button>
              </div>
            </div>
          </div>
          <div className="w-[100px] h-full">imagenes</div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
