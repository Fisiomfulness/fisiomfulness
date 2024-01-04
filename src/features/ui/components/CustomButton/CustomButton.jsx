"use client";

import { Button } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "../../utils";

const CustomButton = forwardRef(
  ({ children, className, ...otherProps }, ref) => {
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
  },
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
