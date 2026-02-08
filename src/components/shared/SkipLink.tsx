"use client";

import { useLocale } from "@/context/LocaleContext";

export function SkipLink() {
  const { t } = useLocale();

  return (
    <a
      href="#main"
      className="sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-zinc-800 focus:text-white focus:rounded-lg focus:w-auto focus:h-auto focus:overflow-visible focus:m-0"
    >
      {t("app_skipLink")}
    </a>
  );
}
