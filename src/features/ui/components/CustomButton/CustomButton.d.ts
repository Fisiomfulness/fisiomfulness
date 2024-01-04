import type { ButtonProps } from "@nextui-org/react";
import type { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {}

const CustomButton: FC<Props>;

export default CustomButton;
