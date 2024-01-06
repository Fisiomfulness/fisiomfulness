"use client";

import { Button, forwardRef } from "@nextui-org/react";
import { cn } from "../../utils";

const CustomButton = forwardRef((props, ref) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button
      ref={ref}
      color="primary"
      className={cn("rounded-md font-bold uppercase", className)}
      {...otherProps}
    >
      {children}
    </Button>
  );
});

export default CustomButton;
