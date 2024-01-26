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
