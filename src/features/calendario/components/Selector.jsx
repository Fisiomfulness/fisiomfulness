"use client";

import { CustomButton, CustomInput, cn } from "@/features/ui";

import {
  Select,
  SelectItem,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineCheckCircle } from "react-icons/md";

const defaultIconMapping = {
  success: <MdOutlineCheckCircle className="w-10 h-10 text-secondary" />,
  question: <AiOutlineQuestionCircle className="w-10 h-10 text-secondary" />,
};

function ModalForm({ onClose }) {
  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Iniciar sesión</ModalHeader>
      <ModalBody>
        <CustomInput autoFocus label="Correo electrónico" variant="bordered" />
        <CustomInput label="Contraseña" type="password" variant="bordered" />
        <div className="flex py-2 px-1 justify-between">
          <Link color="primary" href="#" size="sm">
            ¿Has olvidado la contraseña?
          </Link>
        </div>
      </ModalBody>
      <ModalFooter>
        <CustomButton color="secondary" onPress={onClose}>
          Cerrar
        </CustomButton>
        <CustomButton color="primary" onPress={onClose}>
          Ingresar
        </CustomButton>
      </ModalFooter>
    </>
  );
}

export function ModalBase({ isOpen, onOpenChange, children }) {
  const { isOpen: opened, onOpen, onOpenChange: closeModal } = useDisclosure();
  const content =
    typeof children === "function"
      ? (onClose) =>
          children(onClose, () => {
            onClose();
            onOpen();
          })
      : children;

  return (
    <>
      <Modal
        size="xs"
        radius="sm"
        isOpen={isOpen}
        placement="center"
        onOpenChange={onOpenChange}
      >
        <ModalContent className="h-80">{content}</ModalContent>
      </Modal>
      <Modal isOpen={opened} onOpenChange={closeModal} placement="center">
        <ModalContent>
          {(onClose) => <ModalForm onClose={onClose} />}
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Selector() {
  const defaultValue = "Seleccione una opcion";
  const [state, setState] = useState(defaultValue);
  const [message, setMessage] = useState("");
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="w-full flex flex-row justify-between flex-wrap gap-4 pt-4">
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
        onChange={(e) => {
          setMessage(`Desea ${e.target.value} esta cita?`);
          setState(e.target.value);
        }}
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
          <CustomButton color="secondary" className="w-28" onPress={onOpen}>
            Aceptar
          </CustomButton>
          <CustomButton
            color="primary"
            className="w-28"
            onPress={() => setState(defaultValue)}
          >
            Cancelar
          </CustomButton>
        </div>
      )}
      <ModalBase isOpen={isOpen} onOpenChange={onOpenChange}>
        {(onClose, openForm) => (
          <>
            <ModalBody className="flex justify-center items-center px-4 py-0 pt-4">
              {defaultIconMapping["question"]}
              <p>{message}</p>
            </ModalBody>
            <ModalFooter className="flex flex-col p-4">
              <CustomButton color="primary" onPress={openForm}>
                Acceptar
              </CustomButton>
              <CustomButton color="secondary" onPress={onClose}>
                Cancelar
              </CustomButton>
            </ModalFooter>
          </>
        )}
      </ModalBase>
    </div>
  );
}
