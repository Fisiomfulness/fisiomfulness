import { cn } from "@/features/ui";
import Link from "next/link";
import { notFound } from "next/navigation";

import fs from "fs";
import path from "path";

const directoryPath = path.join(__dirname, "../../../../src/app/");
const getDirectories = (source) =>
  fs
    .readdirSync(source, { withFileTypes: true })
    .filter((file) => file.isDirectory() && file.name !== "only_development")
    .map((file) => file.name);
const routes = getDirectories(directoryPath);

const a = [
  "bg-primary-50",
  "bg-primary-100",
  "bg-primary-200",
  "bg-primary-300",
  "bg-primary-400",
  "bg-primary-500",
  "bg-primary-600",
  "bg-primary-700",
  "bg-primary-800",
  "bg-primary-900 text-white",
  "bg-primary-950 text-white",
];

const a2 = [
  "bg-alter-50",
  "bg-alter-100",
  "bg-alter-200",
  "bg-alter-300",
  "bg-alter-400",
  "bg-alter-500",
  "bg-alter-600",
  "bg-alter-700",
  "bg-alter-800",
  "bg-alter-900 text-white",
  "bg-alter-950 text-white",
];

const a3 = [
  "bg-aqua-50",
  "bg-aqua-100",
  "bg-aqua-200",
  "bg-aqua-300",
  "bg-aqua-400",
  "bg-aqua-500",
  "bg-aqua-600",
  "bg-aqua-700",
  "bg-aqua-800",
  "bg-aqua-900 text-white",
  "bg-aqua-950 text-white",
];

const b = [
  "bg-secondary-50",
  "bg-secondary-100",
  "bg-secondary-200",
  "bg-secondary-300",
  "bg-secondary-400",
  "bg-secondary-500 text-white",
  "bg-secondary-600 text-white",
  "bg-secondary-700 text-white",
  "bg-secondary-800 text-white",
  "bg-secondary-900 text-white",
  "bg-secondary-950 text-white",
];

const c = [
  { cn: "bg-palette-100 text-white", name: "secondary" },
  { cn: "bg-palette-200 text-white", name: "primary-700-800" },
  { cn: "bg-palette-300", name: "primary-600" },
  { cn: "bg-palette-400", name: "primary-500" },
  { cn: "bg-palette-500", name: "alter" },
  { cn: "bg-palette-600", name: "descartado" },
  { cn: "bg-palette-700", name: "descartado" },
  { cn: "bg-palette-800", name: "aqua" },
  { cn: "bg-palette-900", name: "white" },
];

function Container({ children }) {
  return (
    <div className="flex flex-col justify-center gap-4 px-4 w-full max-w-5xl mx-auto">
      <p className="text-2xl font-bold underline text-center">
        Esta pagina solo funciona en development
      </p>
      <div>
        <p className="text-lg font-bold underline">Rutas</p>
        <div
          className={[
            "grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))]",
            "overflow-hidden w-full",
          ].join(" ")}
        >
          {routes.map((route) => (
            <Link
              key={route}
              href={route}
              className={cn(
                "border-l-2 border-primary whitespace-nowrap hover:font-bold px-1.5 leading-snug",
              )}
            >
              Ir a /{route}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-lg font-bold underline">Paleta de colores</p>
        <p>Generado con https://www.tints.dev/</p>
        <div className="flex flex-row pt-2 overflow-auto">
          <div>
            {new Array(11).fill().map((_, index) => (
              <div className={`text-center w-40 h-8 ${a[index]}`} key={index}>
                {a[index].split(" ")[0]}
              </div>
            ))}
          </div>
          <div>
            {new Array(11).fill().map((_, index) => (
              <div className={`text-center w-40 h-8 ${a2[index]}`} key={index}>
                {a2[index].split(" ")[0]}
              </div>
            ))}
          </div>
          <div>
            {new Array(11).fill().map((_, index) => (
              <div className={`text-center w-40 h-8 ${a3[index]}`} key={index}>
                {a3[index].split(" ")[0]}
              </div>
            ))}
          </div>
          <div>
            {new Array(11).fill().map((_, index) => (
              <div className={`text-center w-40 h-8 ${b[index]}`} key={index}>
                {b[index].split(" ")[0]}
              </div>
            ))}
          </div>
          <div>
            {new Array(9).fill().map((_, index) => (
              <div
                className={`text-center w-40 h-8 ${c[index].cn}`}
                key={index}
              >
                {c[index].name ? c[index].name : c[index].cn.split(" ")[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-row w-full gap-4 overflow-hidden">
        <div className="overflow-auto w-full">{children}</div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Only Development",
};

export default function OnlyDevelopmentLayout({ children }) {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <Container>{children}</Container>;
}
