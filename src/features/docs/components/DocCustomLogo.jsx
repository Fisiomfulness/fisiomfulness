import { CustomLogo, cn } from "@/features/ui";

function Code({ children }) {
  return (
    <span className="font-bold bg-zinc-200 rounded-md px-1">{children}</span>
  );
}

export default function DocCustomLogo() {
  const classNames = (className) => cn("p-2 rounded-md", className);

  return (
    <>
      <div className="text-sm pb-2">
        <p>
          Acepta la prop <Code>color</Code> que puede ser <Code>light</Code> o{" "}
          <Code>dark</Code> y las props de la etiqueta <Code>img</Code>.
        </p>
      </div>
      <p className="pb-2">Custom Logo</p>
      <CustomLogo color="dark" className={classNames("bg-primary-200")} />
      <CustomLogo color="light" className={classNames("bg-secondary")} />
    </>
  );
}
