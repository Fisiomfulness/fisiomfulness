import { cn } from "@/features/ui";

export default function ServiciosHomePage() {
  return (
    <div className="grid grid-cols-3 w-full h-[90vh]">
      {["Mental", "Fisica", "Nutricional"].map((item, index) => (
        <div
          key={index}
          className={cn(
            `bg-[url('/servicios_img/salud_${item.toLocaleLowerCase()}.jpg')]`,
            "bg-no-repeat bg-cover"
          )}
        >
          <div
            className={cn(
              "h-full text-white grid place-content-center",
              "bg-primary/40 font-bold italic text-center"
            )}
          >
            <p className="text-3xl">Salud</p>
            <p className="text-5xl">{item === "Fisica" ? "Física" : item}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
