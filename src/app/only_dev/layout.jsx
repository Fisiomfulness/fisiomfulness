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

function CustomLink({ children, href }) {
  return (
    <Link
      href={href}
      className={cn(
        "bg-blue-300 px-4 py-1 rounded-sm whitespace-nowrap",
        "hover:bg-blue-200 hover:text-black",
      )}
    >
      {children}
    </Link>
  );
}

const routes = getDirectories(directoryPath);

function Container({ children }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 w-full">
      <p className="text-2xl font-bold underline text-center">
        Esta pagina solo funciona en development
      </p>
      <div className="flex flex-row w-full justify-between gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-lg font-bold underline">Rutas</p>
          {routes.map((route) => (
            <CustomLink key={route} href={route}>
              Ir a /{route}
            </CustomLink>
          ))}
        </div>
        <div className="flex flex-row gap-4 w-full flex-wrap">{children}</div>
      </div>
    </div>
  );
}

export default function OnlyDevelopmentLayout({ children }) {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <Container>{children}</Container>;
}
