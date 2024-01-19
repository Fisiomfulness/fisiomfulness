"use client";

import { CarritoModal } from "@/features/carrito";

import {
  CustomButton,
  CustomInput,
  CustomModal,
  CustomTextarea,
  cn,
} from "@/features/ui";
import { useDisclosure } from "@nextui-org/react";

function Box({ className, children, ...props }) {
  return (
    <div className={cn("py-3", className)} {...props}>
      {children}
    </div>
  );
}

export default function OnlyDevelopmentPage() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col divide-y divide-primary-700">
      <Box className="pb-0 flex flex-row gap-4">
        <p>Carrito Modal</p>
        <CarritoModal />
      </Box>
      <Box>
        <CustomInput
          type="text"
          name="message"
          placeholder="Custom Input ..."
          label="Custom Input"
        />
      </Box>
      <Box>
        <CustomTextarea
          type="text"
          name="message"
          placeholder="Custom Textarea ..."
          label="Custom Textarea"
        />
      </Box>
      <Box>
        <p>Custom Button</p>
        <div className="pt-2 grid grid-cols-2 gap-1">
          {[
            "default",
            "danger",
            "primary",
            "secondary",
            "success",
            "warning",
          ].map((color) => (
            <CustomButton color={color} key={color}>
              {color}
            </CustomButton>
          ))}
        </div>
      </Box>
      <Box>
        <p>Custom Modal</p>
        <CustomButton onPress={onOpen}>Custom Modal</CustomButton>
        <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim cupidatat excepteur officia.
          Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate
          voluptate dolor minim nulla est proident. Nostrud officia pariatur ut
          officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit
          commodo officia dolor Lorem duis laboris cupidatat officia voluptate.
          Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis
          officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis
          sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea
          consectetur et est culpa et culpa duis.
        </CustomModal>
      </Box>
    </div>
  );
}
