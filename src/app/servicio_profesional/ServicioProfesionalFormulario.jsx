"use client";


import { Modal, ModalBody, ModalContent, ModalFooter } from "@nextui-org/react";
import { useState } from "react";
import { CustomButton, CustomInput, CustomTextarea, cn } from "@/features/ui";

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
          <CustomButton color="primary" onPress={onClose}>
            Volver
          </CustomButton>
        </ModalFooter>
      </div>
    </ModalContainer>
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
          <CustomButton color="primary" type="submit">
            Crear
          </CustomButton>
        </div>
      </form>
      <ModalConfirm isOpen={isSubmit} onClose={() => setIsSubmit(false)} />
    </div>
  );
}
