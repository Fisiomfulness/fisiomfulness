"use client";

import { useState } from "react";
import {
  CustomButton,
  CustomInput,
  CustomModal,
  CustomTextarea,
} from "@/features/ui";

import { MdOutlineCheckCircle } from "react-icons/md";

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
      <CustomModal isOpen={isSubmit} onOpenChange={() => setIsSubmit(false)}>
        <CustomModal.SmallContent>
          <CustomModal.Body>
            <MdOutlineCheckCircle className="w-10 h-10 text-primary mb-4" />
            <p>Servicio creado</p>
          </CustomModal.Body>
          <CustomModal.Footer>
            <CustomButton onPress={() => setIsSubmit(false)}>
              Volver
            </CustomButton>
          </CustomModal.Footer>
        </CustomModal.SmallContent>
      </CustomModal>
    </div>
  );
}
