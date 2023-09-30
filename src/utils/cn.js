import { twMerge } from "tw-merge";
import clsx from "clsx";

export function cn(...className) {
  return twMerge(clsx(className));
}
