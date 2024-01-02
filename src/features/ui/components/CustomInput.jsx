"use client";

import { Input } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "../utils";

function mergeKeepValues(t1, t2) {
  const obj1 = { ...t1 };
  const obj2 = { ...t2 };

  for (let key in obj2) {
    if (!(key in obj1)) {
      obj1[key] = obj2[key];
    } else {
      obj1[key] += " " + obj2[key];
    }
  }

  return obj1;
}

const CustomInput = forwardRef(({ classNames, ...otherProps }, ref) => {
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
      {...otherProps}
    />
  );
});

CustomInput.displayName = "CustomInput";

export default CustomInput;
