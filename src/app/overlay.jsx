"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer/Footer";
import { usePathname } from "next/navigation";
import { center, container } from "@/styled-system/patterns";

const exclude = [
  "/login",
  "/servicios_home",
  "/recupero",
  "/registro",
  "/about",
];
export function Overlay({ children }) {
  const pathname = usePathname();
  const isRootPath = pathname === "/";

  if (exclude.includes(pathname)) {
    return (
      <main
        className={center({
          minH: "screen",
          "& > div": container.raw({
            flex: "1",
            minH: "screen",
          }),
        })}
      >
        {children}
      </main>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <main
        className={container({
          flex: "1",
          w: "full",
          p: isRootPath ? "0!" : undefined,
          maxW: isRootPath ? "unset" : undefined,
        })}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
