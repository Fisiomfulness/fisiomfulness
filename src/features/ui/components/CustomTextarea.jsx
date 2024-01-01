"use client";

import { Textarea } from "@nextui-org/react";
import { forwardRef } from "react";
import { cn } from "../utils";

const CustomTextarea = forwardRef(({ ...otherProps }, ref) => {
  return (
    <Textarea
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

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
