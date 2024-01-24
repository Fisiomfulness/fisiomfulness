import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as highlighter_style } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function cn() {
  const codeString = `import { cn } from "@/features/ui";

const result = cn(
  "px-2 py-1 bg-red hover:bg-dark-red",
  "p-3 bg-[#B91C1C]",
  false && "text-green-100",
  true && ["p-2", false ? "leading-8" : "leading-7"],
)

console.log(result)
// hover:bg-dark-red bg-[#B91C1C] p-2 leading-7`;

  return (
    <>
      <div className="w-[400px]">
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
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={highlighter_style}
        className="rounded-md "
        codeTagProps={{ className: "text-sm" }}
      >
        {codeString}
      </SyntaxHighlighter>
    </>
  );
}
