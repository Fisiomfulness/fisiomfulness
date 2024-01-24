"use client";

import { Button } from "@nextui-org/react";
import { cn } from "../../utils";

const CustomButton = (props) => {
  const { children, className, ...otherProps } = props;

  return (
    <Button
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
};

export default CustomButton;
