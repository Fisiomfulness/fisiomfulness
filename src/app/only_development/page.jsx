import { CarritoModal } from "@/features/carrito";
import { CustomInput, cn } from "@/features/ui";

function Box({ className, children, ...props }) {
  return <div className={cn("py-3", className)}>{children}</div>;
}

export default function OnlyDevelopmentPage() {
  return (
    <div className="flex flex-col divide-y divide-primary-700">
      <Box className="pb-2 flex flex-row gap-4">
        <p>Carrito Modal</p>
        <CarritoModal />
      </Box>
      <Box>
        <CustomInput
          type="text"
          name="message"
          placeholder="mensaje..."
          label="Custom Input"
        />
      </Box>
    </div>
  );
}
