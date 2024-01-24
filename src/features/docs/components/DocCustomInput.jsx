import { CustomInput } from "@/features/ui";

export default function DocCustomInput() {
  return (
    <>
      <p className="pb-2 text-sm">
        Consultar{" "}
        <a
          href="https://nextui.org/docs/components/input#api"
          rel="noreferrer noopener"
          target="_blank"
          className="text-primary-700 font-bold"
        >
          Input | NextUI
        </a>
      </p>
      <CustomInput
        type="text"
        name="message"
        placeholder="Custom Input ..."
        label="Custom Input"
      />
    </>
  );
}
