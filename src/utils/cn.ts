import clsx, { ClassArray } from "clsx"
import { twMerge } from "tailwind-merge"

// if you don't understand search for docs of this labrary
export function cn(...tstyles: ClassArray) {
  // take a array of classNames and merge them with no repetition in classes
  return twMerge(clsx(tstyles))
}
