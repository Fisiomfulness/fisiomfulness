"use client";

import { CustomButton, CustomInput, CustomModal, cn } from "@/features/ui";

import { RadioGroup, Radio } from "@nextui-org/react";
import TablaServicios from "./TablaServicios";
import { useEffect, useState } from "react";

import { MdOutlineCached, MdOutlineCheckCircle } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";

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

function FirstModal({ onClose }) {
  return (
    <>
      <p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
        Elige tu método de pago
      </p>
      <div className="flex flex-row gap-6">
        <div className="flex flex-col gap-6">
          <Group label="Método de pago" values={metodosDePago} />
          <Group label="Otras formas de pago" values={formaDePago} />
        </div>
        <div className="flex flex-col gap-4 w-72">
          <TablaPagar />
          <CustomInput
            label="Cupon de descuento"
            placeholder="Ingresa el codigo de tu cupon"
          />
          <CustomButton onPress={onClose}>Pagar</CustomButton>
        </div>
      </div>
    </>
  );
}

function SecondModal({ onOpenChange, onCheck, onBack }) {
  const [isSubmit, setIsSubmit] = useState(false);
  const [isInvalid, setIsInvalid] = useState({
    titular: false,
    tarjeta: false,
    vencimiento: false,
    ccv: false,
  });

  useEffect(() => {
    if (isSubmit) {
      onCheck();
      onOpenChange();
    }
  }, [isSubmit, onOpenChange, onCheck]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { titular, tarjeta, vencimiento, ccv } = event.target;

    const draft = {
      ...isInvalid,
      titular: !titular.value,
      tarjeta: !tarjeta.value,
      vencimiento: !vencimiento.value,
      ccv: !ccv.value,
    };

    if (Object.values(draft).every((value) => value === false)) {
      setIsSubmit(true);
    } else {
      setIsSubmit(false);
    }

    setIsInvalid(draft);
  };

  return (
    <>
      <p className="mb-3 cursor-pointer w-fit" onClick={() => onBack()}>
        <IoIosArrowBack className="-ml-1.5 inline text-primary w-5 h-5" />{" "}
        Volver a elegir tu método de pago
      </p>
      <p className="border-b border-primary w-fit text-lg font-semibold">
        Ingresá tus datos
      </p>
      <form onSubmit={handleSubmit} className="pt-2 w-80">
        <CustomInput
          name="titular"
          defaultValue="***** *****"
          label="Titular de la tarjeta"
          isInvalid={isInvalid.titular}
        />
        <CustomInput
          name="tarjeta"
          defaultValue="**** **** **** ****"
          isInvalid={isInvalid.tarjeta}
          label="Número de tarjeta"
        />
        <div className="flex flex-row justify-between">
          <CustomInput
            name="vencimiento"
            defaultValue="**/**"
            isInvalid={isInvalid.vencimiento}
            label="Vencimiento"
            classNames={{
              base: cn("w-32"),
              label: cn("m-0 font-normal text-base !text-inherit"),
              input: cn("!w-[100px]"),
            }}
          />
          <CustomInput
            name="ccv"
            defaultValue="***"
            isInvalid={isInvalid.ccv}
            label="ccv"
            classNames={{
              base: cn("w-32"),
              label: cn("m-0 font-normal text-base !text-inherit"),
              input: cn("!w-[100px]"),
            }}
          />
        </div>
        <CustomButton className="w-full mt-4" type="submit">
          Pagar
        </CustomButton>
      </form>
    </>
  );
}

const defaultIconMapping = {
  success: <MdOutlineCheckCircle className="w-10 h-10 text-primary mb-4" />,
  error: <MdErrorOutline className="w-10 h-10 text-red-500 mb-4" />,
  loading: (
    <MdOutlineCached className="w-10 h-10 text-primary mb-4 animate-reverse-spin" />
  ),
};

function ThirdModal({ onBack, onClose, status }) {
  status ||= "success";

  const content = {
    loading: (
      <p>
        Confirmando pago, <span className="font-bold italic">aguarde</span>
      </p>
    ),
    error: (
      <>
        <p>Datos inválidos</p>
        <p>intente nuevamente</p>
      </>
    ),
    success: <p>Pago realizado con exito</p>,
  };

  const onPress = () => {
    if (status === "success") {
      onClose();
      return;
    }
    onBack();
  };

  return (
    <CustomModal.SmallContent>
      <CustomModal.Body>
        {defaultIconMapping[status]}
        {content[status]}
      </CustomModal.Body>
      <CustomModal.Footer>
        {status !== "loading" && (
          <CustomButton onPress={onPress}>Volver</CustomButton>
        )}
      </CustomModal.Footer>
    </CustomModal.SmallContent>
  );
}

const Step = Object.freeze({
  first: 0,
  second: 1,
  third: 2,
});

function ModalBase() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (status !== "loading") return;

    const timeout = setTimeout(() => {
      setStatus("success");
      // setStatus("error");
    }, 1500);

    return () => clearTimeout(timeout);
  }, [status]);

  const [step, setStep] = useState(-1);

  return (
    <>
      <CustomButton onPress={() => setStep(Step.first)}>
        Asigna tu metodo de pago
      </CustomButton>
      <CustomModal
        isOpen={step === Step.first}
        onOpenChange={() => setStep(-1)}
      >
        <FirstModal onClose={() => setStep(Step.second)} />
      </CustomModal>
      <CustomModal
        isOpen={step === Step.second}
        onOpenChange={() => setStep(-1)}
      >
        <SecondModal
          onOpenChange={() => setStep(Step.third)}
          onBack={() => setStep(Step.first)}
          onCheck={() => setStatus("loading")}
        />
      </CustomModal>
      <CustomModal
        isOpen={step === Step.third}
        className={"min-w-0"}
        onOpenChange={() => setStep(-1)}
        hideCloseButton
        isDismissable={false}
      >
        <ThirdModal
          status={status}
          onBack={() => setStep(Step.second)}
          onClose={() => setStep(-1)}
        />
      </CustomModal>
    </>
  );
}

export default function Pago() {
  return (
    <>
      <TablaServicios />
      <ModalBase />
    </>
  );
}
