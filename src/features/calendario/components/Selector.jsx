"use client";

import { cn } from "@/features/ui";
import {
  Button,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineCheckCircle } from "react-icons/md";

function Aviso({ isOpen, onOpenChange }) {
  return (
    <Modal size="xs" radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="h-80">
        {(onClose) => (
          <>
            <ModalBody className="flex justify-center items-center px-4 py-0 pt-4">
              <AiOutlineQuestionCircle className="w-10 h-10 text-secondary" />
              <MdOutlineCheckCircle className="w-10 h-10 text-secondary" />
              <p>Desea Reprogramar esta cita?</p>
            </ModalBody>
            <ModalFooter className="flex flex-col p-4">
              <Button color="primary" onPress={() => console.log("Aceptar")}>
                Acceptar
              </Button>
              <Button color="secondary" onPress={onClose}>
                Cancelar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}

export default function Selector() {
  const defaultValue = "Seleccione una opcion";
  const [state, setState] = useState(defaultValue);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex flex-row justify-between flex-wrap gap-4">
      <Select
        variant="flat"
        radius="sm"
        labelPlacement={"outside"}
        placeholder={defaultValue}
        className="max-w-[200px]"
        color="primary"
        aria-label={defaultValue}
        selectedKeys={[state]}
        disabledKeys={[defaultValue]}
        onChange={(e) => setState(e.target.value)}
        classNames={{
          trigger: cn("bg-[#D8EEF8]"),
          value: cn("text-black"),
        }}
        popoverProps={{
          radius: "sm",
          shadow: "sm",
          size: "sm",
          offset: 2,
          classNames: {
            content: cn("p-0 bg-[#D8EEF8] shadow-none"),
          },
        }}
        listboxProps={{
          itemClasses: {
            base: cn("first:hidden rounded-md"),
          },
          color: "primary",
        }}
      >
        {[defaultValue, "Reprogramar", "Cancelar"].map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
      {state !== defaultValue && (
        <div className="flex flex-row gap-2">
          <Button
            radius="sm"
            color="secondary"
            className="w-28"
            onPress={onOpen}
          >
            Aceptar
          </Button>
          <Button
            radius="sm"
            color="primary"
            className="w-28"
            onPress={() => setState(defaultValue)}
          >
            Cancelar
          </Button>
          <Aviso isOpen={isOpen} onOpenChange={onOpenChange} />
        </div>
      )}
    </div>
  );
}
