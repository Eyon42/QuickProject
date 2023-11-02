import { env } from "@/env.mjs";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCurrentURL = (): string => {
  if (typeof window !== "undefined") {
    return window.location.protocol + "//" + window.location.host;
  }

  if (
    process.env.VERCEL_ENV === "production" ||
    process.env.NEXT_PUBLIC_GCR_ENV == "production"
  ) {
    if (process.env.NEXT_PUBLIC_PROD_URL) {
      return process.env.NEXT_PUBLIC_PROD_URL;
    }
    throw Error("Missing PROD URL");
  }
  if (process.env.NGROK_ENV) {
    if (process.env.NGROK_URL) {
      return process.env.NGROK_URL;
    }
    throw Error("Missing NGROK URL");
  }

  return "http://localhost:3000";
};

export function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}


export function formatTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = Math.floor(time - hours * 60);
  return `${hours}H ${minutes}M`;
}
export function fitUsername(username: string, length = 10) {
  if (username.length === 42) {
    return shortAddress(username);
  }
  if (username.length > length) {
    return username.slice(0, length) + "...";
  }
  return username;
}

export function formatRelativeTime(date: Date) {
  const rtf1 = new Intl.RelativeTimeFormat("es", { style: "short" });
  const diff = Math.floor((new Date().getTime() - date.getTime()) / 1000);
  if (diff < 60) return rtf1.format(-diff, "second");
  if (diff < 60 * 60) return rtf1.format(-Math.floor(diff / 60), "minute");
  if (diff < 60 * 60 * 24)
    return rtf1.format(-Math.floor(diff / (60 * 60)), "hour");
  if (diff < 60 * 60 * 24 * 7)
    return rtf1.format(-Math.floor(diff / (60 * 60 * 24)), "day");
  if (diff < 60 * 60 * 24 * 30)
    return rtf1.format(-Math.floor(diff / (60 * 60 * 24 * 7)), "week");
  if (diff < 60 * 60 * 24 * 365)
    return rtf1.format(-Math.floor(diff / (60 * 60 * 24 * 30)), "month");
  else return rtf1.format(-Math.floor(diff / (60 * 60 * 24 * 365)), "year");
}

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
