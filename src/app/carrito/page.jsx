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
  Input,
} from "@nextui-org/react";

function Tabla() {
  return (
    <div className="overflow-x-auto w-full">
      <table
        className={cn(
          "rounded-lg overflow-hidden", // borde
          "min-w-max mx-auto", //scroll y centrar
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

function TablaPagar() {
  return (
    <div className="overflow-x-auto w-full p-3 bg-zinc-200 rounded-md">
      <table
        className={cn(
          "min-w-max mx-auto", //scroll y centrar
          "bg-transparent",
        )}
      >
        <thead>
          <tr className="[&_th]:py-3">
            <th scope="col">Información de tu compra</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className={cn("[&_tr_td]:py-2", "text-left")}>
          <tr>
            <td>servicio</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>servicio</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>servicio</td>
            <td>$100</td>
          </tr>
          <tr className="border-t border-primary">
            <td className="font-bold">total</td>
            <td>$300</td>
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
          "inline-flex flex-row items-center justify-start gap-2",
          "min-w-[280px] m-0 cursor-pointer px-5 py-3 font-normal",
          "border-1 border-primary rounded-sm",
          "data-[selected=true]:bg-zinc-200 hover:bg-zinc-200",
        ),
        control: cn("w-4 h-4 bg-primary"),
        label: cn("text-base"),
        wrapper: cn("!border-secondary !bg-zinc-200"),
      }}
      size="sm"
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

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="max-w-fit"
      >
        <ModalContent className="rounded-md p-8 overflow-hidden">
          {(onClose) => (
            <div className="overflow-x-auto">
              <p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
                Elige tu método de pago
              </p>
              <div className="flex flex-row gap-8">
                <div>
                  <div className="flex flex-col gap-6">
                    <Group label="Método de pago" values={metodosDePago} />
                    <Group label="Otras formas de pago" values={formaDePago} />
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-4 w-72">
                    <TablaPagar />
                    <Input
                      variant="bordered"
                      label="Cupon de descuento"
                      placeholder="Ingresa el codigo de tu cupon"
                      labelPlacement="outside"
                      radius="sm"
                      classNames={{
                        label: cn("m-0 font-normal text-base"),
                        input: cn(
                          "placeholder:!not-italic placeholder:text-base text-base",
                        ),
                        inputWrapper: cn(
                          "bg-zinc-200 border-1 border-gray-500",
                        ),
                      }}
                    />
                    <Button
                      color="primary"
                      onPress={onClose}
                      size="lg"
                      className="uppercase font-bold"
                      radius="sm"
                    >
                      Pagar
                    </Button>
                  </div>
                </div>
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
