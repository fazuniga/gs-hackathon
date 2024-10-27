import { type ClassValue, clsx } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const nanoid = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
  10
);

export function getSeverityColor(severity: string): string {
  const level = parseInt(severity.replaceAll("*", ""), 10);
  if (level < 0 || level > 5) return "bg-gray-400"; // Default color for out of range
  if (level === 0) return "bg-green-500 text-white";
  if (level === 1) return "bg-yellow-300 text-black";
  if (level === 2) return "bg-yellow-500 text-black";
  if (level === 3) return "bg-orange-500";
  if (level === 4) return "bg-red-300 text-white";
  return "bg-red-500"; // For level 5
}
