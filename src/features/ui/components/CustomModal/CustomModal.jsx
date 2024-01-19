"use client";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { cn } from "../../utils";
import { useLayoutEffect } from "react";

const _CustomModal = (props) => {
  const { children, className, ...otherProps } = props;
  const isOpen = props.isOpen;

  const content =
    typeof children === "function" ? (
      (onClose) => <div className="overflow-x-auto">{children(onClose)}</div>
    ) : (
      <div className="overflow-x-auto">{children}</div>
    );

  useLayoutEffect(() => {
    const style = document.documentElement.style;
    style.overflow = isOpen ? "hidden" : "auto";
    style.paddingRight = isOpen ? "0.6rem" : "0px";
  }, [isOpen]);

  return (
    <Modal
      placement="center"
      className={cn("!rounded-md max-w-fit !mx-4", className)}
      {...otherProps}
    >
      <ModalContent className="rounded-md p-6 overflow-x-auto">
        {content}
      </ModalContent>
    </Modal>
  );
};

const CustomModalSmallContent = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <div
      className={cn("h-72 w-56", "flex flex-col", className)}
      {...otherProps}
    >
      {children}
    </div>
  );
};

const CustomModalHeader = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <ModalHeader
      className={cn("flex text-base font-normal p-0 gap-0", className)}
      {...otherProps}
    >
      {children}
    </ModalHeader>
  );
};

const CustomModalBody = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <ModalBody
      className={cn(
        "flex flex-1 flex-col justify-center items-center",
        "p-0 gap-0",
        className,
      )}
      {...otherProps}
    >
      {children}
    </ModalBody>
  );
};

const CustomModalFooter = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <ModalFooter
      className={cn("flex flex-col", "p-0 gap-0", className)}
      {...otherProps}
    >
      {children}
    </ModalFooter>
  );
};

const CustomModal = Object.assign(_CustomModal, {
  SmallContent: CustomModalSmallContent,
  Header: CustomModalHeader,
  Body: CustomModalBody,
  Footer: CustomModalFooter,
});

export {
  CustomModal,
  // CustomModalHeader,
  // CustomModalBody,
  // CustomModalFooter,
};
