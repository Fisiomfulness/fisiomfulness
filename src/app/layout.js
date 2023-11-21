import { Raleway } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const raleway = Raleway({
  weight: ["200", "300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={raleway.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
