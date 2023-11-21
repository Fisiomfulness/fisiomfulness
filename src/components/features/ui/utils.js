import { cx } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(cx(inputs))
}
