import { CustomButton } from "@/features/ui";

export default function DocCustomButton() {
  return (
    <>
      <p className="pb-2 text-sm">
        Consultar{" "}
        <a
          href="https://nextui.org/docs/components/button#api"
          rel="noreferrer noopener"
          target="_blank"
          className="text-primary-700 font-bold"
        >
          Button | NextUI
        </a>
      </p>
      <p>Custom Button</p>
      <div
        className={[
          "grid grid-cols-[repeat(auto-fit,minmax(130px,1fr))]",
          "pt-2 gap-1 max-w-[530px]",
        ].join(" ")}
      >
        {[
          "default",
          "danger",
          "primary",
          "secondary",
          "success",
          "warning",
        ].map((color) => (
          <CustomButton color={color} key={color}>
            {color}
          </CustomButton>
        ))}
      </div>
    </>
  );
}
