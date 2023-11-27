import Image from "next/image";

export default function ImgAbout({ image }) {
  return (
    <div className="w-full">
      <Image
        src={image}
        alt={image}
        width={1000}
        height={760}
        className="w-full"
      />
    </div>
  );
}
