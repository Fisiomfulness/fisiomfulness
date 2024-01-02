"use client";

import { Input } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn, mergeKeepValues } from "../../utils";

const CustomInput = forwardRef(({ classNames, ...otherProps }, ref) => {
  const errorMessage = otherProps.isInvalid ? "Requerido" : "";

  const defaultClassNames = {
    label: cn("m-0 font-normal text-base !text-inherit"),
    input: cn(
      "placeholder:!not-italic placeholder:text-gray-500 text-base flex-1",
    ),
    inputWrapper: cn("bg-zinc-200 border-1 border-gray-500"),
    innerWrapper: cn("justify-between"),
  };

  return (
    <Input
      ref={ref}
      variant="bordered"
      labelPlacement="outside"
      placeholder=" "
      radius="sm"
      classNames={mergeKeepValues(defaultClassNames, classNames)}
      errorMessage={errorMessage}
      {...otherProps}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
