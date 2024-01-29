import { Textarea } from "@nextui-org/react";
import { cn, mergeKeepValues } from "../../utils";

const CustomTextarea = (props) => {
  const { classNames, ...otherProps } = props;

  const errorMessage = otherProps.isInvalid ? "Requerido" : "";

  const variant = otherProps.variant === "flat" ? "flat" : "bordered";

  const defaultClassNames = {
    label: cn("m-0 font-normal text-base !text-inherit"),
    input: cn(
      "placeholder:!not-italic placeholder:text-gray-500 text-base flex-1",
    ),

    inputWrapper: cn(
      "!bg-zinc-200 border-gray-400 rounded-md whitespace-nowrap",
    ),
    innerWrapper: cn("justify-between"),
  };

  return (
    <Textarea
      variant={variant}
      labelPlacement="outside"
      placeholder=" "
      classNames={mergeKeepValues(defaultClassNames, classNames)}
      errorMessage={errorMessage}
      {...otherProps}
    />
  );
};

export default CustomTextarea;
