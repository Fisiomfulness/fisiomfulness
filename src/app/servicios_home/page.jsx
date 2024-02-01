import Link from "next/link";
import { CustomOverlay } from "@/features/ui";

const links = [
  {
    name: "Salud Mental",
    className: "bg-[url('/servicios_img/salud_mental.jpg')]",
  },
  {
    name: "Salud Física",
    className: "bg-[url('/servicios_img/salud_fisica.jpg')]",
  },
  {
    name: "Salud Nutricional",
    className: "bg-[url('/servicios_img/salud_nutricional.jpg')]",
  },
];

export default function ServiciosHomePage() {
  return (
    <CustomOverlay
      className={[
        "grid grid-rows-3 md:grid-cols-3",
        "md:grid-rows-1 w-full",
      ].join(" ")}
    >
      {links.map((item) => (
        <Link
          key={item.name}
          className={`${item.className} bg-center bg-no-repeat bg-cover`}
          href={"#"}
        >
          <div
            className={[
              "h-full text-white grid place-content-center",
              "bg-primary/40 font-bold italic text-center",
            ].join(" ")}
          >
            <p className="text-3xl">{item.name.split(" ")[0]}</p>
            <p className="text-5xl">{item.name.split(" ")[1]}</p>
          </div>
        </Link>
      ))}
    </CustomOverlay>
  );
}
