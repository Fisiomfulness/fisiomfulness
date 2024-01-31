"use client";

import { CustomButton, CustomModal } from "@/features/ui";
import { useDisclosure } from "@nextui-org/react";
import { DocCode, DocTabs } from "../components";

const codeRender = `// Custom Modal
<CustomButton onPress={onOpen}>Custom Modal</CustomButton>
<CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
  <CustomModal.Header className="bg-red-400">
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
    cillum sint consectetur cupidatat.
  </CustomModal.Header>
  <CustomModal.Body className="bg-blue-400">
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
    cillum sint consectetur cupidatat.
  </CustomModal.Body>
  <CustomModal.Footer className="bg-green-400">
    Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
    cillum sint consectetur cupidatat.
  </CustomModal.Footer>
</CustomModal>

// Small Content
<CustomButton onPress={onOpen2}>Small Content</CustomButton>
<CustomModal isOpen={isOpen2} onOpenChange={onOpenChange2}>
  <CustomModal.SmallContent>
    <CustomModal.Header className="bg-red-400">Header</CustomModal.Header>
    <CustomModal.Body className="bg-blue-400">Body</CustomModal.Body>
    <CustomModal.Footer className="bg-green-400">
      Footer
    </CustomModal.Footer>
  </CustomModal.SmallContent>
</CustomModal>
`;

const PreviewRender = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onOpenChange: onOpenChange2,
  } = useDisclosure();

  return (
    <div className="flex gap-2">
      <CustomButton onPress={onOpen}>Custom Modal</CustomButton>
      <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <CustomModal.Header className="bg-red-400">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </CustomModal.Header>
        <CustomModal.Body className="bg-blue-400">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </CustomModal.Body>
        <CustomModal.Footer className="bg-green-400">
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </CustomModal.Footer>
      </CustomModal>
      <CustomButton onPress={onOpen2}>Small Content</CustomButton>
      <CustomModal isOpen={isOpen2} onOpenChange={onOpenChange2}>
        <CustomModal.SmallContent>
          <CustomModal.Header className="bg-red-400">Header</CustomModal.Header>
          <CustomModal.Body className="bg-blue-400">Body</CustomModal.Body>
          <CustomModal.Footer className="bg-green-400">
            Footer
          </CustomModal.Footer>
        </CustomModal.SmallContent>
      </CustomModal>
    </div>
  );
};

export default function DocCustomModal() {
  return (
    <>
      <p className="text-lg font-bold">WIP: Custom Modal</p>
      <div>
        <p>
          Acepta las mismas props del componente Modal de NextUI. La composicion
          tambien cambia:
        </p>
        <p>
          <DocCode>ModalHeader</DocCode> {"-->"}{" "}
          <DocCode>CustomModal.Header</DocCode>
        </p>
        <p>
          <DocCode>ModalBody</DocCode> {"-->"}{" "}
          <DocCode>CustomModal.Body</DocCode>
        </p>
        <p>
          <DocCode>ModalFooter</DocCode> {"-->"}{" "}
          <DocCode>CustomModal.Footer</DocCode>
        </p>
        <p>
          Ya no es necesario el uso de <DocCode>ModalContent</DocCode>, en su
          lugar use un <DocCode>div</DocCode>. Si necesita crear una
          notificacion puede usar <DocCode>CustomModal.SmallContent</DocCode>.
        </p>
        Consultar{" "}
        <a
          href="https://nextui.org/docs/components/modal#modal-props"
          rel="noreferrer noopener"
          target="_blank"
          className="text-primary-700 font-bold"
        >
          Modal | NextUI
        </a>
        .
      </div>
      <DocTabs previewRender={PreviewRender()} codeRender={codeRender} />
    </>
  );
}
