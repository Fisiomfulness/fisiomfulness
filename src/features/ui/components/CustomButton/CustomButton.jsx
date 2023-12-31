"use client";

import { Button, forwardRef } from "@nextui-org/react";
import { cn } from "../../utils";

const CustomButton = forwardRef((props, ref) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      ref={ref}
      color="primary"
      className={cn(
        "h-auto py-2.5",
        "rounded-md font-bold text-sm uppercase",
        className,
      )}
      {...otherProps}
    >
      {children}
    </Button>
  );
});

CustomButton.displayName = "CustomButton";

export default CustomButton;
