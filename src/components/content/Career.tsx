"use client";

import { useLocale } from "@/context/LocaleContext";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    item: "text-zinc-300 text-sm",
    meta: "text-zinc-500 text-xs",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    item: "text-zinc-700 dark:text-zinc-300",
    meta: "text-zinc-500 dark:text-zinc-400 text-sm",
  },
};

const CAREER_KEYS = [
  "career_1",
  "career_2",
  "career_3",
  "career_4",
  "career_5",
] as const;

export function Career({ variant }: { variant: SectionVariant }) {
  const { t } = useLocale();
  const s = styles[variant];
  return (
    <div className="space-y-4">
      <h3 className={s.heading}>{t("gui_folder_career")}</h3>
      <ul className="space-y-3 list-none">
        {CAREER_KEYS.map((key, i) => (
          <li key={key} className="border-l-2 border-zinc-300 dark:border-zinc-600 pl-3">
            <p className={`font-medium ${s.item}`}>{t(`${key}_role`)}</p>
            <p className={s.meta}>
              {t(`${key}_company`)} · {t(`${key}_period`)}
            </p>
            <p className={s.item}>{t(`${key}_description`)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
