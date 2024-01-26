"use client";

import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiOutlineFacebook } from "react-icons/ai";

const socialItems = [
  { logoComponent: AiOutlineFacebook, href: "/" },
  { logoComponent: AiOutlineInstagram, href: "/" },
  { logoComponent: AiOutlineLinkedin, href: "/" },
];

const navItems = [
  { name: "Trabaja con nosotros", href: "/trabajaConNosotros" },
  { name: "Quienes somos", href: "/about" },
  { name: "Blog", href: "/blog" },
];

function Footer() {
  return (
    <footer className="bg-secondary py-6">
      <div className="flex flex-col gap-6">
        <div className="flex justify-evenly items-center max-sm:flex-col gap-4">
          <div>
            {/* eslint-disable-next-line */}
            <img
              width={200}
              src="/Logo.png"
              alt="Logo Fisiom fulness"
              loading="lazy"
            />
            <div className="flex justify-center gap-4 text-white pt-4 max-sm:text-center">
              {socialItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="hover:text-inherit"
                >
                  <item.logoComponent className="text-2xl" />
                </Link>
              ))}
            </div>
          </div>
          <div className="text-white flex flex-col justify-evenly max-sm:items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                className="block hover:text-inherit hover:no-underline"
                href={item.href}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="text-center">
          <p className="text-white text-sm">
            Copyright © {new Date().getFullYear()} FisiomFulness
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
