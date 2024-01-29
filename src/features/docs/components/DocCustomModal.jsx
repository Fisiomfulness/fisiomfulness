"use client";

import { CustomModal } from "@/features/ui";
import { useDisclosure } from "@nextui-org/react";

export default function DocCustomModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <p>Custom Modal</p>
      <button
        className="bg-primary-500 text-white py-2 px-4 rounded-md"
        onClick={onOpen}
      >
        Custom Modal
      </button>
      <CustomModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <CustomModal.SmallContent>
          <CustomModal.Header className="bg-red-400">Header</CustomModal.Header>
          <CustomModal.Body className="bg-blue-400">Body</CustomModal.Body>
          <CustomModal.Footer className="bg-green-400">
            Footer
          </CustomModal.Footer>
        </CustomModal.SmallContent>
      </CustomModal>
    </>
  );
}
