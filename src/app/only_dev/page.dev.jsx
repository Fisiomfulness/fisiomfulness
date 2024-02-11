import * as DocContents from "@/features/docs/contents";
import * as DocUtils from "@/features/docs/utils";

const renderDocContents = Object.keys(DocContents).map((component, index) => {
  const Component = DocContents[component];
  return (
    <div key={index} className="py-3 flex flex-col gap-2">
      <Component />
    </div>
  );
});

const renderDocUtils = Object.keys(DocUtils).map((component, index) => {
  const Component = DocUtils[component];
  return (
    <div key={index} className="py-3 flex flex-col gap-2">
      <Component />
    </div>
  );
});

const columns = [
  { name: "Componentes Reutilizables", render: renderDocContents },
  { name: "Utilidades", render: renderDocUtils },
];

export default function OnlyDevelopmentPage() {
  return (
    <div className="overflow-auto">
      <p className="pb-2 text-lg">
        <b>{">"}</b> Todos los componentes y utilidades se deben usar desde{" "}
        <b>{`"@/features/ui"`}</b>
      </p>
      <div className="flex flex-row gap-4 flex-wrap">
        {columns.map((item) => (
          <div className="flex-1 min-w-80" key={item.name}>
            <p className="text-lg font-bold underline">{item.name}</p>
            <div className="flex flex-col divide-y divide-primary-700">
              {item.render}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
