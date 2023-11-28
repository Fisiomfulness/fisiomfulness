"use client";

import { cn } from "@/features/ui";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
  RadioGroup,
  Radio,
} from "@nextui-org/react";

function Tabla() {
  return (
    <div className="overflow-x-auto w-full">
      <table
        className={cn(
          "rounded-lg overflow-hidden", // borde
          "min-w-max mx-auto", //sscroll y centrar
          "bg-primary",
        )}
      >
        <thead className="text-white bg-primary">
          <tr className="[&_th]:px-6 [&_th]:py-3">
            <th scope="col">Servicios a contratar</th>
            <th scope="col"></th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody
          className={cn("[&_tr_td]:px-6 [&_tr_td]:py-4", "text-left bg-white")}
        >
          <tr className="border-b border-gray-300 bg-white">
            <td>Dr. Mario Gómez</td>
            <td className="text-sm">Fecha: 09-02-2024 - Horario: 09:00</td>
            <td>$100</td>
          </tr>
          <tr className="bg-zinc-200">
            <td>Total</td>
            <td></td>
            <td>$100</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function CustomRadio({ children, ...otherProps }) {
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "inline-flex m-0 hover:bg-zinc-200 items-center justify-start",
          "flex-row max-w-[300px] cursor-pointer rounded-sm gap-2 px-4 py-3 border-1 border-primary",
          "data-[selected=true]:bg-zinc-200 font-normal",
        ),
      }}
      value="buenos-aires"
    >
      {children}
    </Radio>
  );
}

const metodosDePago = [
  {
    value: "credito",
    label: "Tarjeta de crédito",
  },
  {
    value: "debito",
    label: "Tarjeta de débito",
  },
];
const formaDePago = [
  {
    value: "paypal",
    label: "Paypal",
  },
  {
    value: "mercadoPago",
    label: "Mercado pago",
  },
  {
    value: "tambo",
    label: "Tambo",
  },
];

function Group({ label, values }) {
  return (
    <RadioGroup label={label} classNames={{ label: cn("text-inherit") }}>
      {values.map((value) => (
        <CustomRadio key={value.value} value={value.value}>
          {value.label}
        </CustomRadio>
      ))}
    </RadioGroup>
  );
}

function ModalBase() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        color="primary"
        radius="sm"
        className="text-base"
        onPress={onOpen}
      >
        Asigna tu metodo de pago
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="center">
        <ModalContent className="rounded-md p-8 min-w-[700px]">
          {(onClose) => (
            <div className="flex flex-row gap-8">
              <div className="bg-blue-300 flex-1">
                <p className="border-b border-primary w-fit">
                  Elige tu método de pago
                </p>
                <div className="bg-red-300">
                  <Group label="Método de pago" values={metodosDePago} />
                  <Group label="Otras formas de pago" values={formaDePago} />
                </div>
              </div>
              <div className="bg-green-300 flex-1">
                <Button color="secondary" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Pagar
                </Button>
              </div>
            </div>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default function CarritoPage() {
  return (
    <div className="flex flex-col justify-center items-center min-h-[80vh] px-4 gap-8">
      <Tabla />
      <ModalBase />
    </div>
  );
}
