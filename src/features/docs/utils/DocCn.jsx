import { cn } from "@/features/ui";
import { cx } from "class-variance-authority";
import { DocCode, DocSyntax, DocTabs } from "../components";

const codeString = `import { cn } from "@/features/ui";

const result = cn(
  "px-2 py-1 bg-red hover:bg-dark-red",
  "p-3 bg-[#B91C1C]",
  false && "text-green-100",
  true && ["p-2", false ? "leading-8" : "leading-7"],
)

console.log(result)
// hover:bg-dark-red bg-[#B91C1C] p-2 leading-7`;

const codeRender = `// Usando \`cn\`
<div className={cn(
  "w-24 h-24",
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
)} // w-24 h-24 bg-blue-500
></div>

// Usando \`cx\`
<div className={cx(
  "w-24 h-24",
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
)} // w-24 h-24 bg-red-500 bg-green-500 bg-blue-500
></div>`;

const previewRender = (
  <div className="flex gap-4">
    <div>
      <p>
        Usando <DocCode>cn</DocCode>
      </p>
      <div
        className={cn("w-24 h-24", "bg-red-500", "bg-green-500", "bg-blue-500")}
      ></div>
    </div>
    <div>
      <p>
        Usando <DocCode>cx</DocCode>
      </p>
      <div
        className={cx("w-24 h-24", "bg-red-500", "bg-green-500", "bg-blue-500")}
      ></div>
    </div>
  </div>
);

export default function DocCn() {
  return (
    <>
      <p className="text-lg font-bold">cn</p>
      <p>
        Usa{" "}
        <a
          href="https://github.com/lukeed/clsx#usage"
          rel="noreferrer noopener"
          target="_blank"
          className="text-primary-700 font-bold"
        >
          clsx
        </a>{" "}
        y{" "}
        <a
          href="https://github.com/dcastil/tailwind-merge#tailwind-merge"
          rel="noreferrer noopener"
          target="_blank"
          className="text-primary-700 font-bold"
        >
          twMerge
        </a>{" "}
        para fusionar de manera eficiente las clases CSS de Tailwind en JS sin
        conflictos de estilo.
      </p>
      <DocSyntax>{codeString}</DocSyntax>
      <DocTabs previewRender={previewRender} codeRender={codeRender} />
    </>
  );
}
