import * as DocComponents from "@/features/docs/components";
import * as DocUtils from "@/features/docs/utils";

import { cn } from "@/features/ui";

function Box({ className, children, ...props }) {
  return (
    <div className={cn("py-3", className)} {...props}>
      {children}
    </div>
  );
}

const renderDocComponents = Object.keys(DocComponents).map(
  (component, index) => {
    const Component = DocComponents[component];
    return (
      <Box key={index} className="flex flex-col gap-2">
        <Component />
      </Box>
    );
  },
);

const renderDocUtils = Object.keys(DocUtils).map((component, index) => {
  const Component = DocUtils[component];
  return (
    <Box key={index} className="flex flex-col gap-2 overflow-hidden">
      <Component />
    </Box>
  );
});

export default function OnlyDevelopmentPage() {
  return (
    <>
      <p className="pb-2 text-lg">
        <span className="font-bold">{">"}</span> Todos los componentes y
        utilidades se deben usar desde{" "}
        <span className="font-bold">{`"@/features/ui"`}</span>
      </p>
      <div className="flex flex-row gap-4 w-full flex-wrap">
        <div className="flex-1 min-w-[280px] max-w-lg">
          <p className="text-lg font-bold underline">
            Componentes Reutilizables
          </p>
          <div className="flex flex-col divide-y divide-primary-700">
            {renderDocComponents}
          </div>
        </div>
        <div className="flex-1 min-w-[280px] max-w-lg">
          <p className="text-lg font-bold underline">Utilidades</p>
          <div className="flex flex-col divide-y divide-primary-700">
            {renderDocUtils}
          </div>
        </div>
      </div>
    </>
  );
}
