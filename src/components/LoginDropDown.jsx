import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  User,
} from "@nextui-org/react";
import {Popover, PopoverTrigger, PopoverContent, Button} from "@nextui-org/react";

import { useState } from "react";

export default function LoginDropDown() {
  const [showPopover, setShowPopover] = useState(false)


  return (
    <div className="flex items-center gap-4">
      <Dropdown placement="bottom-start">
        <DropdownTrigger>
          <User
            as="button"
            name="Dr. Mario Gómez"
            avatarProps={{
              isBordered: true,
              src: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
            }}
            className="transition-transform"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="User Actions" variant="flat" closeOnSelect={false}>
          <DropdownItem key="settings">
            <Popover 
              showArrow
              placement="right"
            >
              <PopoverTrigger>
                Mis servicios
              </PopoverTrigger>
              <PopoverContent>
                  <Button>Historial clinico pacientes</Button>
                  <Button>Calendario</Button>
              </PopoverContent>
            </Popover>
          </DropdownItem>
          <DropdownItem key="team_settings">Editar perfil</DropdownItem>
          <DropdownItem key="analytics"><Popover 
              showArrow
              placement="right"
            >
              <PopoverTrigger>
                Blog
              </PopoverTrigger>
              <PopoverContent>
                  <Button>Crear blog</Button>
                  <Button>Mis blogs</Button>
              </PopoverContent>
            </Popover></DropdownItem>
          <DropdownItem key="system">Cerrar sesión</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
