import { CarritoModal } from "@/features/carrito";

import { CustomButton, CustomInput, CustomTextarea, cn } from "@/features/ui";

export const metadata = {
  title: "Only Development",
};

function Box({ className, children, ...props }) {
  return (
    <div className={cn("py-3", className)} {...props}>
      {children}
    </div>
  );
}

export default function OnlyDevelopmentPage() {
  return (
    <div className="flex flex-col divide-y divide-primary-700">
      <Box className="pb-0 flex flex-row gap-4">
        <p>Carrito Modal</p>
        <CarritoModal />
      </Box>
      <Box>
        <CustomInput
          type="text"
          name="message"
          placeholder="Custom Input ..."
          label="Custom Input"
        />
      </Box>
      <Box>
        <CustomTextarea
          type="text"
          name="message"
          placeholder="Custom Textarea ..."
          label="Custom Textarea"
        />
      </Box>
      <Box>
        <p>Custom Button</p>
        <div className="pt-2 grid grid-cols-2 gap-1">
          {[
            "default",
            "danger",
            "primary",
            "secondary",
            "success",
            "warning",
          ].map((color) => (
            <CustomButton color={color} key={color}>
              {color}
            </CustomButton>
          ))}
        </div>
      </Box>
    </div>
  );
}
