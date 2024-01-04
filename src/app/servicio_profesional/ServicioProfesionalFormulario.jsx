"use client";

import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Textarea,
} from "@nextui-org/react";
import { useState } from "react";
import { cn } from "@/features/ui";
import { MdOutlineCheckCircle } from "react-icons/md";

function ModalContainer({ children, className, ...otherProps }) {
  return (
    <Modal
      placement="center"
      className={cn("max-w-fit !mx-2", className)}
      {...otherProps}
    >
      <ModalContent className="rounded-md p-8 overflow-hidden">
        {children}
      </ModalContent>
    </Modal>
  );
}

function ModalConfirm({ isOpen, onClose }) {
  return (
    <ModalContainer
      isOpen={isOpen}
      className={"min-w-0"}
      onOpenChange={onClose}
      isDismissable={false}
    >
      <div className="w-56 h-72 flex flex-col">
        <ModalBody className="flex justify-center gap-0 items-center my-16 p-0">
          <MdOutlineCheckCircle className="w-10 h-10 text-primary mb-4" />
          <p>Servicio creado</p>
        </ModalBody>
        <ModalFooter className="flex flex-col p-0">
          <Button
            radius="sm"
            color="primary"
            className="uppercase text-black p-0"
            onPress={onClose}
          >
            Volver
          </Button>
        </ModalFooter>
      </div>
    </ModalContainer>
  );
}

function CustomInput({ ...otherProps }) {
  const errorMessage = otherProps.isInvalid ? "Requerido" : "";

  return (
    <Input
      variant="bordered"
      labelPlacement="outside"
      placeholder=" "
      radius="sm"
      errorMessage={errorMessage}
      classNames={{
        label: cn("m-0 font-normal text-base !text-inherit"),
        input: cn("placeholder:!not-italic placeholder:text-base text-base"),
        inputWrapper: cn("bg-zinc-200 border-1 border-gray-500"),
      }}
      {...otherProps}
    />
  );
}

function CustomTextarea({ ...otherProps }) {
  const errorMessage = otherProps.isInvalid ? "Requerido" : "";

  return (
    <Textarea
      variant="bordered"
      labelPlacement="outside"
      placeholder=" "
      radius="sm"
      errorMessage={errorMessage}
      classNames={{
        label: cn("m-0 font-normal text-base !text-inherit"),
        input: cn("placeholder:!not-italic placeholder:text-base text-base"),
        inputWrapper: cn("bg-zinc-200 border-1 border-gray-500"),
      }}
      {...otherProps}
    />
  );
}

export default function SecondModal() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isInvalid, setIsInvalid] = useState({
    servicio: false,
    precio: false,
    desc: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { servicio, precio, desc } = event.target;

    const draft = {
      ...isInvalid,
      servicio: !servicio.value,
      precio: !precio.value,
      desc: !desc.value,
    };

    if (Object.values(draft).every((value) => value === false)) {
      setIsSubmit(true);
      console.log("Submit");
    } else {
      setIsSubmit(false);
    }

    setIsInvalid(draft);
  };

  return (
    <div className="overflow-x-auto">
      <form onSubmit={handleSubmit} className="flex justify-center">
        <div className="flex flex-col gap-6 pt-4 w-80">
          <CustomInput
            name="servicio"
            defaultValue="***** *****"
            isInvalid={isInvalid.servicio}
            label="Servicio"
          />
          <CustomInput
            name="precio"
            defaultValue="***** *****"
            isInvalid={isInvalid.precio}
            label="Precio"
          />
          <CustomTextarea
            name="desc"
            defaultValue="***** *****"
            isInvalid={isInvalid.desc}
            label="Descripción"
            minRows={7}
          />
          <Button
            color="primary"
            type="submit"
            size="lg"
            className="uppercase font-bold"
            radius="sm"
          >
            Crear
          </Button>
        </div>
      </form>
      <ModalConfirm isOpen={isSubmit} onClose={() => setIsSubmit(false)} />
    </div>
  );
}
