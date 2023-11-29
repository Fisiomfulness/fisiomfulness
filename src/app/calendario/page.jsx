import { Calendario } from "@/features/calendario";

export default function CalendarioPage() {
  return (
    <div className="px-6 min-h-screen flex flex-col items-center overflow-hidden">
      <p className="pb-6 text-xl font-semibold">Calendario</p>
      <Calendario />
    </div>
  );
}
