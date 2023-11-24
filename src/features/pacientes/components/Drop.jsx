"use client"

import { cn } from "@/features/ui";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

export default function Drop({ defaultItems, placeholder }) {
  return (
    <Autocomplete
      defaultItems={defaultItems}
      labelPlacement={"outside"}
      placeholder={placeholder}
      variant="underlined"
      aria-label={placeholder}
      size="sm"
      inputProps={{
        classNames: {
          base: cn("px-2 py-1 bg-white"),
          innerWrapper: cn("!border-none !shadow-none px-2"),
          inputWrapper: cn(
            "!border-none !shadow-none after:!hidden"
          ),
          input: cn(
            "placeholder:!not-italic placeholder:text-inherit",
            "!border-none max-w-[130px] !p-0"
          ),
        }
      }}
      popoverProps={{
        radius: "sm",
        shadow: "sm",
        size: "sm",
        offset: 2,
        classNames: {
          content: cn("p-0"),
        }
      }}
      listboxProps={{
        classNames:{
          list: cn("[&_li]:!rounded-md"),
        },
        color: "secondary"
      }}
    >
      {(item) => (
        <AutocompleteItem key={item.value}>
          {item.value}
        </AutocompleteItem>
      )}
    </Autocomplete>
  )
}

