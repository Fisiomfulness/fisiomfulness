import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}
export default function CustomOverlay(props: Props) {
  const { children, className, ...otherProps } = props;

  return (
    <div
      className={cn(
        "absolute top-0 left-0",
        "min-h-screen w-screen z-50 bg-white",
        className,
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
}
