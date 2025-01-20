import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ParseAllObjects<T>(json: any): T[] | null {
  try {
    const jsonString = JSON.stringify(json);
    return JSON.parse(jsonString) as T[];
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return null!;
  }
}

export const createQueryString = (name: any, value: any) => {
  const params = new URLSearchParams();
  params.set(name, value);

  return params.toString();
};
