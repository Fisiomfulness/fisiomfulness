"use client";

import { CustomButton, cn } from "@/features/ui";
import {
  Badge,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { useAtom } from "jotai";
import { MdErrorOutline, MdShoppingCart } from "react-icons/md";
import { cartAtom } from "../store";
import { useCart } from "../hooks";

function ModalContainer({ children, className, ...otherProps }) {
  return (
    <Modal
      placement="center"
      className={cn("!mx-2", className)}
      {...otherProps}
    >
      <ModalContent className="rounded-md p-8 overflow-hidden">
        {children}
      </ModalContent>
    </Modal>
  );
}

function ThirdModal({ onClose }) {
  return (
    <div className="w-56 h-72 flex flex-col">
      <ModalBody className="flex justify-center gap-0 items-center my-16 p-0">
        <MdErrorOutline className="w-10 h-10 text-primary mb-4" />
        No tienes items en tu carro
      </ModalBody>
      <ModalFooter className="flex flex-col p-0">
        <CustomButton color="primary" onPress={onClose}>
          Volver
        </CustomButton>
      </ModalFooter>
    </div>
  );
}

function ListProducts() {
  const [{ cart }, { removeItem }] = useCart();

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        "text-secondary my-8 h-80 overflow-auto px-6",
      )}
    >
      {cart.map((product) => (
        <div key={product.key} className="flex flex-row gap-5">
          {/* eslint-disable-next-line */}
          <img
            src={product.img}
            alt={product.name}
            className="min-w-[160px] h-24 object-cover object-bottom rounded-lg"
          />
          <div className="w-80">
            <p className="font-bold text-md">{product.name}</p>
            <p className="line-clamp-3">{product.description}</p>
          </div>
          <div className="text-right flex flex-col gap-2 justify-center">
            <p className="font-bold text-xl">${product.price}</p>
            <CustomButton
              color="danger"
              size="sm"
              className="px-2 py-1 lowercase"
              onPress={() => removeItem(product)}
            >
              eliminar
            </CustomButton>
          </div>
        </div>
      ))}
    </div>
  );
}

function FirstModal({ onClose }) {
  const [, { clearCart }] = useCart();

  return (
    <div className="">
      <p className="border-b border-primary w-fit mb-4 text-lg font-semibold">
        TU CARRO
      </p>
      <div className="mx-auto max-w-fit">
        <ListProducts />
        <div className="w-64 flex flex-col gap-4 mx-auto">
          <CustomButton color="primary" onPress={onClose}>
            Checkout
          </CustomButton>
          <CustomButton color="danger" onPress={clearCart}>
            Borrar todo
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default function CarritoModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [{ cart, quantity }] = useAtom(cartAtom);

  return (
    <div>
      <button onClick={onOpen}>
        <Badge content={quantity} color="danger" placement="top-left" size="md">
          <MdShoppingCart className="w-8 h-8 text-primary" />
        </Badge>
      </button>
      {cart.length ? (
        <ModalContainer
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          className={"max-w-3xl"}
        >
          {(onClose) => <FirstModal onClose={onClose} />}
        </ModalContainer>
      ) : (
        <ModalContainer
          isOpen={isOpen}
          className={"max-w-fit"}
          onOpenChange={onOpenChange}
          hideCloseButton
          isDismissable={false}
        >
          {(onClose) => <ThirdModal onClose={onClose} />}
        </ModalContainer>
      )}
    </div>
  );
}
