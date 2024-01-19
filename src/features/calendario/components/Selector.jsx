"use client";

import { CustomButton, CustomInput, CustomModal, cn } from "@/features/ui";

import { Select, SelectItem, Link } from "@nextui-org/react";
import { useState } from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineCheckCircle } from "react-icons/md";

const defaultIconMapping = {
  success: <MdOutlineCheckCircle className="w-10 h-10 mb-4 text-secondary" />,
  question: (
    <AiOutlineQuestionCircle className="w-10 h-10 mb-4 text-secondary" />
  ),
};

const Step = Object.freeze({
  first: 0,
  second: 1,
});

export default function Selector() {
  const defaultValue = "Seleccione una opcion";
  const [state, setState] = useState(defaultValue);
  const [message, setMessage] = useState("");

  const [step, setStep] = useState(-1);

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
          <CustomButton
            color="secondary"
            className="w-28"
            onPress={() => setStep(Step.first)}
          >
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
      <CustomModal
        isOpen={step === Step.first}
        onOpenChange={() => setStep(-1)}
      >
        <CustomModal.SmallContent>
          <CustomModal.Body>
            {defaultIconMapping["question"]}
            <p className="text-center">{message || "No se ha seleccionado"}</p>
          </CustomModal.Body>
          <CustomModal.Footer className="gap-2">
            <CustomButton onPress={() => setStep(Step.second)}>
              Aceptar
            </CustomButton>
            <CustomButton color="secondary" onPress={() => setStep(-1)}>
              Cancelar
            </CustomButton>
          </CustomModal.Footer>
        </CustomModal.SmallContent>
      </CustomModal>
      <CustomModal
        isOpen={step === Step.second}
        onOpenChange={() => setStep(-1)}
        className="gap-2"
      >
        <CustomModal.Header className="underline font-bold">
          Iniciar sesión
        </CustomModal.Header>
        <CustomModal.Body className="items-start">
          <CustomInput
            autoFocus
            label="Correo electrónico"
            variant="bordered"
          />
          <CustomInput label="Contraseña" type="password" variant="bordered" />
          <Link color="primary" href="#" size="sm" className="px-1 py-2">
            ¿Has olvidado la contraseña?
          </Link>
        </CustomModal.Body>
        <CustomModal.Footer className="flex-row gap-2">
          <CustomButton color="secondary" onPress={() => setStep(-1)}>
            Cerrar
          </CustomButton>
          <CustomButton color="primary" onPress={() => setStep(-1)}>
            Ingresar
          </CustomButton>
        </CustomModal.Footer>
      </CustomModal>
    </div>
  );
}
