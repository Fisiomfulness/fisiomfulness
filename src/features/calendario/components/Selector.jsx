"use client";

import { cn } from "@/features/ui";
import {
  Button,
  Select,
  SelectItem,
  Modal,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Link,
} from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineCheckCircle } from "react-icons/md";

const defaultIconMapping = {
  success: <MdOutlineCheckCircle className="w-10 h-10 text-secondary" />,
  question: <AiOutlineQuestionCircle className="w-10 h-10 text-secondary" />,
};

export function Aviso({
  isOpen: opened,
  setIsOpen,
  severity = "success",
  message,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Modal
        size="xs"
        radius="sm"
        isOpen={opened}
        placement="center"
        onOpenChange={closeModal}
      >
        <ModalContent className="h-80">
          <ModalBody className="flex justify-center items-center px-4 py-0 pt-4">
            {defaultIconMapping[severity]}
            <p>{message}</p>
          </ModalBody>
          <ModalFooter className="flex flex-col p-4">
            <Button
              color="primary"
              onPress={() => {
                closeModal();
                onOpen();
              }}
            >
              Acceptar
            </Button>
            {severity === "question" && (
              <Button color="secondary" onPress={closeModal}>
                Cancelar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Iniciar sesión
              </ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  label="Correo electrónico"
                  variant="bordered"
                />
                <Input label="Contraseña" type="password" variant="bordered" />
                <div className="flex py-2 px-1 justify-between">
                  <Link color="primary" href="#" size="sm">
                    ¿Has olvidado la contraseña?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Ingresar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default function Selector() {
  const defaultValue = "Seleccione una opcion";
  const [state, setState] = useState(defaultValue);
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
          <Button
            radius="sm"
            color="secondary"
            className="w-28"
            onPress={() => setIsOpen(true)}
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
          <Aviso
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            severity="question"
            message={message}
          />
        </div>
      )}
    </div>
  );
}
