import { cn } from "@/features/ui"

const calendario__box_class = cn(
  "w-16 h-16",
  "border-black border-1",
  "bg-red-500"
)

function Cita({index}) {
  if (index === 0) return <div></div>

  if (index < 8) {
    return (
      <div>
      <p className="bg-blue-600">
        {new Intl.DateTimeFormat('es-ES', { weekday: 'short'}).format(new Date().setDate(index - 2))}
      </p>
      <p className="bg-blue-600">
        {new Intl.DateTimeFormat('es-ES', { month: 'short'}).format(new Date())}
        {new Date().getDate() + index - 1}
      </p>
      </div>
    )
  }

  if (index % 8 === 0) {
    return <p className="bg-orange-600">Horario</p>
  }

  return <div className={calendario__box_class}></div>
}

function Calendario() {
  return (
    <div className="bg-green-600 p-8 w-full">
      <div
        className={cn(
          "grid grid-cols-[repeat(8,64px)] grid-rows-[repeat(5,64px)]",
          "overflow-x-auto w-full"
        )}
      >
        {Array(8*5).fill(0).map((_, index) => (
          <Cita index={index} />
        ))}
      </div>
    </div>
  )
}

export default function CalendarioPage() {
  return (
    <div className="px-6 min-h-screen flex flex-col items-center overflow-hidden">
      <p className="pb-6 text-xl font-semibold">Calendario</p>
      <Calendario />
    </div>
  )
}
