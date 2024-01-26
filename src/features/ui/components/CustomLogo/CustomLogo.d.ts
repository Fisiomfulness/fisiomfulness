import { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  color?: "light" | "dark";
}

export default function CustomLogo(props: Props): JSX.Element;
