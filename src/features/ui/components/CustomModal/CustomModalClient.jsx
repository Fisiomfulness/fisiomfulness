"use client";

import { useLayoutEffect } from "react";

const CustomModalClient = (props) => {
  const { children, isOpen } = props;

  useLayoutEffect(() => {
    const docElement = document.documentElement;
    const footer = document.querySelector("footer");

    const originalDocElementStyle = window.getComputedStyle(docElement);
    const originalFooterStyle = window.getComputedStyle(footer);

    const originalDocElementOverflow = originalDocElementStyle.overflow;
    const originalDocElementPaddingRight = originalDocElementStyle.paddingRight;
    const originalFooterWidth = originalFooterStyle.width;

    if (isOpen) {
      docElement.style.overflow = "hidden";
      docElement.style.paddingRight = "0.6rem";
      footer.style.width = "100vw";
    }

    return () => {
      if (isOpen) {
        docElement.style.overflow = originalDocElementOverflow;
        docElement.style.paddingRight = originalDocElementPaddingRight;
        footer.style.width = originalFooterWidth;
      }
    };
  }, [isOpen]);

  return <>{children}</>;
};

export { CustomModalClient };
