"use client";

import { useState } from "react";
import { Finder } from "@/components/gui/Finder";
import { AppDock } from "@/components/shared/AppDock";
import { SettingsModal } from "@/components/gui/SettingsModal";
import { useLocale } from "@/context/LocaleContext";

export function MacOSLayout() {
  const { t } = useLocale();
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden flex flex-col liquid-glass-bg">
      <header
        className="h-10 shrink-0 flex items-center justify-between gap-6 bg-black/5 dark:bg-white/5 backdrop-blur-md border-b border-black/10 dark:border-white/10 px-4 text-sm text-zinc-700 dark:text-zinc-300"
        role="banner"
      >
        <div className="flex items-center gap-6">
          <span className="font-semibold">{t("gui_menu_finder")}</span>
          <span>{t("gui_menu_file")}</span>
          <span>{t("gui_menu_edit")}</span>
          <span>{t("gui_menu_view")}</span>
          <span>{t("gui_menu_go")}</span>
          <span>{t("gui_menu_window")}</span>
          <span>{t("gui_menu_help")}</span>
        </div>
        <button
          type="button"
          onClick={() => setSettingsOpen(true)}
          className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition text-zinc-600 dark:text-zinc-400"
          aria-label={t("settings_title")}
          title={t("settings_title")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
          </svg>
        </button>
      </header>
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
      <main className="flex-1 min-h-0 flex items-center justify-center p-6 overflow-hidden" role="main">
        <Finder />
      </main>
      <AppDock />
    </div>
  );
}
