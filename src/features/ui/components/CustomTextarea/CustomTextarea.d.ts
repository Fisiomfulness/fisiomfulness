import type { TextAreaProps } from "@nextui-org/react";
import type { FC, TextareaHTMLAttributes } from "react";

interface Props
  extends TextAreaProps,
    TextareaHTMLAttributes<HTMLTextAreaElement> {}

const CustomTextarea: FC<Props>;

export default CustomTextarea;
