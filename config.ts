import { Pathnames } from "next-intl/navigation";

export const defaultLocale = "tr" as const;
export const locales = ["en", "tr"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    tr: "/pathname",
  },
} satisfies Pathnames<typeof locales>;

// Use the default: `always`
export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;
