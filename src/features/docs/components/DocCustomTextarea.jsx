import { CustomTextarea } from "@/features/ui";

export default function DocCustomTextarea() {
  return (
    <>
      <p className="pb-2 text-sm">
        Consultar{" "}
        <a
          href="https://nextui.org/docs/components/textarea#api"
          rel="noreferrer noopener"
          target="_blank"
          className="text-primary-700 font-bold"
        >
          Textarea | NextUI
        </a>
      </p>
      <CustomTextarea
        type="text"
        name="message"
        placeholder="Custom Textarea ..."
        label="Custom Textarea"
      />
    </>
  );
}
