import type { TextAreaProps } from "@nextui-org/react";
import type { FC, TextareaHTMLAttributes } from "react";

interface Props
  extends TextareaHTMLAttributes<HTMLTextAreaElement>,
    TextAreaProps {}

const CustomTextarea: FC<Props>;

export default CustomTextarea;
