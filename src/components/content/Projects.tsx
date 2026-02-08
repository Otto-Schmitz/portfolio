"use client";

import { useLocale } from "@/context/LocaleContext";
import { projectsData } from "@/data/projects";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    name: "text-zinc-300",
    desc: "text-zinc-400 text-sm",
    tech: "text-zinc-500 text-xs",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    name: "text-zinc-800 dark:text-zinc-200 font-medium",
    desc: "text-zinc-600 dark:text-zinc-400 text-sm",
    tech: "text-zinc-500 dark:text-zinc-500 text-xs",
  },
};

const PROJECT_KEYS = ["project_1", "project_2"] as const;

export function Projects({ variant }: { variant: SectionVariant }) {
  const { t } = useLocale();
  const s = styles[variant];
  return (
    <div className="space-y-4">
      <h3 className={s.heading}>{t("gui_folder_projects")}</h3>
      <ul className="space-y-3 list-none">
        {PROJECT_KEYS.map((key, i) => {
          const link = projectsData.items[i]?.link;
          return (
            <li key={key} className="p-3 rounded-lg bg-zinc-100 dark:bg-zinc-800/50">
              <p className={s.name}>{t(`${key}_name`)}</p>
              <p className={s.desc}>{t(`${key}_description`)}</p>
              <p className={s.tech}>{t(`${key}_tech`)}</p>
              {link && link !== "#" && (
                <a
                  href={link}
                  className="text-green-500 dark:text-green-400 hover:underline text-sm mt-1 inline-block"
                >
                  {t("projects_view_project")}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
