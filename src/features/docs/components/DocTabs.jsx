"use client";

import { useState } from "react";
import DocPreview from "./DocPreview";
import DocSyntax from "./DocSyntax";

const Step = Object.freeze({
  first: 0,
  second: 1,
});

export default function DocTabs({ previewRender, codeRender }) {
  const [step, setStep] = useState(0);

  return (
    <div>
      <ul className="flex">
        {["Preview", "Code"].map((title, index) => (
          <li
            key={index}
            className={[
              "px-2 py-1 hover:text-primary-700 cursor-pointer",
              index === step &&
                "underline underline-offset-4 decoration-4 decoration-primary font-bold",
            ].join(" ")}
            onClick={() => setStep(index)}
          >
            {title}
          </li>
        ))}
      </ul>
      {step === Step.first && <DocPreview>{previewRender}</DocPreview>}
      {step === Step.second && <DocSyntax>{codeRender}</DocSyntax>}
    </div>
  );
}
