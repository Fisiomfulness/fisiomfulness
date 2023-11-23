'use client'
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
import Image from 'next/image';
import NextLink from "next/link"
import { useState } from "react";
import FisiumLogo from "../assets/Logo.svg";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogged, setIsLogged] = useState(false);

  const menuItems = [
    "Home",
    "Servicios",
    "Profesionales",
    "Pregunta a un especialista",
    "Comunidad",
    "Productos",
  ];

  return (
    <Navbar maxWidth={"xl"} height={`100px`} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Image width={120} src={FisiumLogo} alt="Logo Fisiom fulness" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={index === 1}>
            <Link as={NextLink} color="secondary" href="#" aria-current={index === 1 ? "page" : undefined}>
              {item}
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
              href="#"
              
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
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              as={NextLink}
              color={
                index === 2
                  ? "secondary"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
