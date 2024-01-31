"use client";

import { useLayoutEffect } from "react";

const CustomModalClient = (props) => {
  const { children, isOpen } = props;

  useLayoutEffect(() => {
    const style = document.documentElement.style;
    style.overflow = isOpen ? "hidden" : "auto";
    style.paddingRight = isOpen ? "0.6rem" : "0px";
  }, [isOpen]);

  return <>{children}</>;
};

export { CustomModalClient };
