"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
} from "@nextui-org/react";
import LoginDropDown from "./LoginDropDown";
import Image from "next/image";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import FisiumLogo from "../assets/Logo.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const path = usePathname();

  const handleMenuToogle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const showOnRegister = () => {
    if (path === "/registro" || path === "/login") return "hidden";
  };

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Servicios y especialistas", href: "/servicios" },
    { name: "Productos", href: "/productos" },
    { name: "Tratamientos", href: "/tratamientos" },
    { name: "Comunidad", href: "/comunidad" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <Navbar
      maxWidth={"xl"}
      height={`100px`}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={showOnRegister()}
    >
      <NavbarContent justify="start">
        <NavbarMenuToggle
          isselected="true"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
        <NavbarBrand>
          <Link as={NextLink} href={menuItems[0].href}>
            <Image
              width={120}
              src={FisiumLogo}
              alt="Logo Fisiom fulness"
              priority
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-5" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.name}-${index}`}
            isActive={path === item.href}
          >
            <Link
              as={NextLink}
              color={path === item.href ? "primary" : "foreground"}
              href={item.href}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          {!isLogged ? (
            <Button
              onClick={setIsLogged}
              as={Link}
              color="secondary"
              href="/login"
            >
              Sign Up
            </Button>
          ) : (
            <LoginDropDown />
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem
            key={`${item.name}-${index}`}
            isActive={path === item.href}
          >
            <Link
              as={NextLink}
              color={path === item.href ? "secondary" : "foreground"}
              className="w-full"
              href={item.href}
              size="lg"
              onPress={() => {
                handleMenuToogle();
              }}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
