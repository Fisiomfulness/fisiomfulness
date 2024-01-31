import { notFound } from "next/navigation";
import { DocColorPalette, DocRoutes } from "@/features/docs/components";

export const metadata = {
  title: "Only Development",
};

function Container({ children }) {
  return (
    <div className="flex flex-col justify-center gap-4 px-4 w-full max-w-5xl mx-auto">
      <p className="text-2xl font-bold underline text-center">
        Esta pagina solo funciona en development
      </p>
      <DocRoutes />
      <DocColorPalette />
      <div className="flex flex-row w-full gap-4 overflow-hidden">
        <div className="overflow-auto w-full">{children}</div>
      </div>
    </div>
  );
}

export default function OnlyDevelopmentLayout({ children }) {
  if (process.env.NODE_ENV !== "development") {
    notFound();
  }

  return <Container>{children}</Container>;
}
