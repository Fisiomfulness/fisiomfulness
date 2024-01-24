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

// export const metadata = {
//   title: "Only Development",
// };

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
    <>
      <div>
        <p className="text-lg font-bold underline">Componentes Reutilizables</p>
        <div className="flex flex-col divide-y divide-primary-700 w-72">
          <Box className="pb-0 flex flex-col">
            <div className="text-sm pb-2">
              <p>Aun en desarrollo, no acepta ninguna prop ni referencia.</p>
              <p>Solo muestra y elimina los productos que hay en el carrito.</p>
              <p className="text-red-500 font-bold">
                Puede haber errores de hidratacion si se llama a mas de uno en
                la misma pagina
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <p>Carrito Modal</p>
              <CarritoModal />
            </div>
          </Box>
          <Box>
            <p className="pb-2 text-sm">
              Consultar{" "}
              <a
                href="https://nextui.org/docs/components/input#api"
                rel="noreferrer noopener"
                target="_blank"
                className="text-primary-700 font-bold"
              >
                Input | NextUI
              </a>
            </p>
            <CustomInput
              type="text"
              name="message"
              placeholder="Custom Input ..."
              label="Custom Input"
            />
          </Box>
          <Box>
            <p className="pb-2 text-sm">
              Consultar{" "}
              <a
                href="https://nextui.org/docs/components/textarea#api"
                rel="noreferrer noopener"
                target="_blank"
                className="text-primary-700 font-bold"
              >
                Textarea | NextUI
              </a>
            </p>
            <CustomTextarea
              type="text"
              name="message"
              placeholder="Custom Textarea ..."
              label="Custom Textarea"
            />
          </Box>
          <Box>
            <p className="pb-2 text-sm">
              Consultar{" "}
              <a
                href="https://nextui.org/docs/components/button#api"
                rel="noreferrer noopener"
                target="_blank"
                className="text-primary-700 font-bold"
              >
                Button | NextUI
              </a>
            </p>
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
              Lorem ipsum dolor sit amet, officia excepteur ex fugiat
              reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit
              ex esse exercitation amet. Nisi anim cupidatat excepteur officia.
              Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet
              voluptate voluptate dolor minim nulla est proident. Nostrud
              officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex
              occaecat reprehenderit commodo officia dolor Lorem duis laboris
              cupidatat officia voluptate. Culpa proident adipisicing id nulla
              nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua
              reprehenderit commodo ex non excepteur duis sunt velit enim.
              Voluptate laboris sint cupidatat ullamco ut ea consectetur et est
              culpa et culpa duis.
            </CustomModal>
          </Box>
        </div>
      </div>
      <div>
        <p className="text-lg font-bold underline">Utilidades</p>
        <div className="flex flex-col divide-y divide-primary-700">
          <Box className="pb-0 flex flex-col gap-4 overflow-hidden">
            <div className="w-[400px]">
              <p className="text-lg font-bold">cn</p>
              <p>
                Usa{" "}
                <a
                  href="https://github.com/lukeed/clsx#usage"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-primary-700 font-bold"
                >
                  clsx
                </a>{" "}
                y{" "}
                <a
                  href="https://github.com/dcastil/tailwind-merge#tailwind-merge"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-primary-700 font-bold"
                >
                  twMerge
                </a>{" "}
                para fusionar de manera eficiente las clases CSS de Tailwind en
                JS sin conflictos de estilo.
              </p>
            </div>
            <pre className="p-2 rounded-md bg-zinc-200/70 overflow-auto text-sm">
              {`import { cn } from "@/features/ui";

const result = cn(
  "px-2 py-1 bg-red hover:bg-dark-red",
  "p-3 bg-[#B91C1C]",
  false && "text-green-100",
  true && ["p-2", false ? "leading-8" : "leading-7"],
)

console.log(result)
// hover:bg-dark-red bg-[#B91C1C] p-2 leading-7`}
            </pre>
          </Box>
        </div>
      </div>
    </>
  );
}
