"use client";

import type { ContentSectionId } from "@/components/content/types";
import { useLocale } from "@/context/LocaleContext";

const SECTIONS: ContentSectionId[] = [
  "about",
  "career",
  "skills",
  "projects",
  "contact",
];

const FOLDER_KEYS: Record<ContentSectionId, keyof import("@/locales/types").Translations> = {
  about: "gui_folder_about",
  career: "gui_folder_career",
  skills: "gui_folder_skills",
  projects: "gui_folder_projects",
  contact: "gui_folder_contact",
};

type FolderViewProps = {
  onOpenFolder: (id: ContentSectionId) => void;
  openSection: ContentSectionId | null;
};

export function FolderView({ onOpenFolder, openSection }: FolderViewProps) {
  const { t } = useLocale();

  return (
    <ul className="space-y-0.5" role="list">
      {SECTIONS.map((id) => (
        <li key={id}>
          <button
            type="button"
            onClick={() => onOpenFolder(id)}
            className={`w-full flex items-center gap-2 px-2 py-2 rounded-md text-left text-sm transition-colors ${
              openSection === id
                ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200"
                : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700"
            }`}
            aria-current={openSection === id ? "true" : undefined}
          >
            <span className="text-lg" aria-hidden>
              📁
            </span>
            {t(FOLDER_KEYS[id])}
          </button>
        </li>
      ))}
    </ul>
  );
}
