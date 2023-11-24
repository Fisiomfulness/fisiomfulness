import { cn } from "@/features/ui";

function getMonday(inputDate) {
  const date = new Date(inputDate);
  const dayOfWeek = date.getDay();
  const difference = date.getDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1);
  const mondayDate = new Date(date.setDate(difference));
  return mondayDate;
}

function createQuoteTime(hours, minutes) {
  const currentDate = new Date();
  currentDate.setHours(hours);
  currentDate.setMinutes(minutes);
  return currentDate;
}

function createQuoteDay(day) {
  const currentDate = new Date();
  currentDate.setDate(day);
  return currentDate;
}

const citaciones = [
  {
    key: "1",
    hour: createQuoteTime(7, 30),
    date: createQuoteDay(21),
    name: "Maria Gimenez",
  },
  {
    key: "2",
    hour: createQuoteTime(7, 0),
    date: createQuoteDay(22),
    name: "Juan Carlos Osorio",
  },
];

const calendario__box_class = cn(
  "w-16 h-16",
  "border-black border-1",
  "bg-red-500",
);

let count = 30 * 7 * 2; // inicia desde las 7
let dayCount = 0;

function Cita({ index }) {
  if (index === 0) return <div></div>;

  if (index < 8) {
    return (
      <div>
        <p className="bg-blue-600">
          {new Intl.DateTimeFormat("es-ES", { weekday: "short" }).format(
            new Date().setDate(index - 2),
          )}
        </p>
        <p className="bg-blue-600">
          {new Intl.DateTimeFormat("es-ES", { month: "short" }).format(
            new Date(),
          )}
          {getMonday(new Date()).getDate() + index - 1}
        </p>
      </div>
    );
  }

  if (index % 8 === 0) {
    const seconds = Math.floor(count % 60)
      .toString()
      .padStart(2, "0");
    const minutes = (Math.floor(count / 60) > 24 ? 0 : Math.floor(count / 60))
      .toString()
      .padStart(2, "0");

    count += 30;

    return (
      <p className="bg-orange-600">
        Horario {minutes}:{seconds}
      </p>
    );
  }

  const seconds = Math.floor((count - 30) % 60);
  const minutes =
    Math.floor((count - 30) / 60) > 24 ? 0 : Math.floor((count - 30) / 60);

  const horario = createQuoteTime(minutes, seconds);
  const horaCitada = citaciones[0].hour;
  const diaCitada = citaciones[0].date;

  console.log(horario.getMinutes());

  const citacion =
    diaCitada.getDate() === getMonday(new Date()).getDate() + dayCount &&
    horario.getHours() === horaCitada.getHours() &&
    horario.getMinutes() === horaCitada.getMinutes()
      ? "true"
      : "-";
  dayCount < 6 ? dayCount++ : (dayCount = 0);

  return (
    <div className={calendario__box_class}>
      <p>{citacion}</p>
      <p>
        {count} {dayCount - 1}
      </p>
      {/* <p>{citaciones.date.getHours() + ":" + citaciones.date.getMinutes()}</p>*/}
    </div>
  );
}

function Calendario() {
  return (
    <div className="bg-green-600 p-8 w-full">
      <div
        className={cn(
          "grid grid-cols-[repeat(8,64px)] grid-rows-[repeat(5,64px)]",
          "overflow-x-auto w-full",
        )}
      >
        {Array(8 * 5)
          .fill(0)
          .map((_, index) => (
            <Cita key={index} index={index} />
          ))}
      </div>
    </div>
  );
}

export default function CalendarioPage() {
  return (
    <div className="px-6 min-h-screen flex flex-col items-center overflow-hidden">
      <p className="pb-6 text-xl font-semibold">Calendario</p>
      <Calendario />
    </div>
  );
}
