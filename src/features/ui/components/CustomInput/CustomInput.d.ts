import type { InputProps } from "@nextui-org/react";
import type { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement>, InputProps {}

const CustomInput: FC<Props>;

export default CustomInput;
