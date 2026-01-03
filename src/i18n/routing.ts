import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "sk"],
  defaultLocale: "sk",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/blog": "/blog",
    "/about": {
      sk: "/o-nas",
    },
  },
});
