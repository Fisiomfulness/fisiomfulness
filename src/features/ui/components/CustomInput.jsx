"use client";

import { Input } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "../utils";

const CustomInput = forwardRef(({ ...otherProps }, ref) => {
  return (
    <Input
      ref={ref}
      variant="bordered"
      labelPlacement="outside"
      placeholder=" "
      radius="sm"
      classNames={{
        label: cn("m-0 font-normal text-base !text-inherit"),
        input: cn(
          "placeholder:!not-italic placeholder:text-gray-500 text-base flex-1",
        ),
        inputWrapper: cn("border-1 border-gray-500", "bg-zinc-200 h-12 px-4"),
        innerWrapper: cn("justify-between"),
      }}
      {...otherProps}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
