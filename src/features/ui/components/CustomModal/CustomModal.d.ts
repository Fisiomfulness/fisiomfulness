import {
  ModalBodyProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from "@nextui-org/react";
import { FC, HTMLAttributes } from "react";

const CustomModal: FC<ModalProps> & {
  SmallContent: FC<HTMLAttributes<HTMLDivElement>>;
  Header: FC<ModalHeaderProps>;
  Body: FC<ModalBodyProps>;
  Footer: FC<ModalFooterProps>;
};

export { CustomModal };
