"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { WindowChrome } from "@/components/gui/WindowChrome";
import { FolderView } from "@/components/gui/FolderView";
import { SectionRenderer } from "@/components/content/SectionRenderer";
import type { ContentSectionId } from "@/components/content/types";

export function Finder() {
  const { t } = useLocale();
  const [openSection, setOpenSection] = useState<ContentSectionId | null>(null);

  return (
    <div className="w-full max-w-4xl shadow-2xl rounded-xl overflow-hidden bg-white dark:bg-zinc-800 border border-black/10 dark:border-zinc-600">
      <WindowChrome title={t("gui_window_title")} />
      <div className="flex min-h-[400px]">
        <aside
          className="w-48 border-r border-zinc-200 dark:border-zinc-600 bg-zinc-50/80 dark:bg-zinc-800/80 p-2"
          aria-label={t("gui_sidebar_favorites")}
        >
          <p className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider px-2 py-1">
            {t("gui_sidebar_favorites")}
          </p>
          <FolderView
            onOpenFolder={setOpenSection}
            openSection={openSection}
          />
        </aside>
        <section
          className="flex-1 p-4 bg-white dark:bg-zinc-800 min-h-[320px] overflow-auto"
          aria-label="Content"
        >
          {openSection ? (
            <FolderContent sectionId={openSection} />
          ) : (
            <p className="text-zinc-400 dark:text-zinc-500 text-sm">
              {t("gui_empty_selectFolder")}
            </p>
          )}
        </section>
      </div>
    </div>
  );
}

function FolderContent({ sectionId }: { sectionId: ContentSectionId }) {
  return (
    <div className="text-zinc-700 dark:text-zinc-300">
      <SectionRenderer sectionId={sectionId} variant="gui" />
    </div>
  );
}
