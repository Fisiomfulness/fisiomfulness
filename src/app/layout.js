'use client'

import { Raleway } from "next/font/google";
import { Providers } from "./providers";
import Nav from "@/components/Nav";
import "./globals.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Footer from "../components/Footer/Footer";
import { usePathname } from "next/navigation";

const raleway = Raleway({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="es">
      <body className={raleway.className}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            {!isLoginPage && <Nav />}
            <main className="flex flex-1">{children}</main>
            {!isLoginPage && <Footer />}
          </div>
        </Providers>
      </body>
    </html>
  );
}
