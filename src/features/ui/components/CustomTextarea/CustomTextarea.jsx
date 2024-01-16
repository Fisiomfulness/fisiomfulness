"use client";

import { Textarea, forwardRef } from "@nextui-org/react";
import { cn, mergeKeepValues } from "../../utils";

const CustomTextarea = forwardRef((props, ref) => {
  const { classNames, ...otherProps } = props;

  const errorMessage = otherProps.isInvalid ? "Requerido" : "";

  const defaultClassNames = {
    label: cn("m-0 font-normal text-base !text-inherit"),
    input: cn(
      "placeholder:!not-italic placeholder:text-gray-500 text-base flex-1",
    ),
    inputWrapper: cn("bg-zinc-200/70 border-1 border-gray-500/70 rounded-md"),
    innerWrapper: cn("justify-between"),
  };

  return (
    <Textarea
      ref={ref}
      variant="bordered"
      labelPlacement="outside"
      placeholder=" "
      classNames={mergeKeepValues(defaultClassNames, classNames)}
      errorMessage={errorMessage}
      {...otherProps}
    />
  );
});

CustomTextarea.displayName = "CustomTextarea";

export default CustomTextarea;
