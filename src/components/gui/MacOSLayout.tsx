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
    <div className="min-h-screen bg-[#ececec] flex flex-col">
      <header
        className="h-10 flex items-center justify-between gap-6 bg-black/5 backdrop-blur-md border-b border-black/10 px-4 text-sm text-zinc-700"
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
          className="p-2 rounded-lg hover:bg-black/10 transition"
          aria-label={t("settings_title")}
          title={t("settings_title")}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </svg>
        </button>
      </header>
      {settingsOpen && <SettingsModal onClose={() => setSettingsOpen(false)} />}
      <main className="flex-1 flex items-center justify-center p-6" role="main">
        <Finder />
      </main>
      <AppDock />
    </div>
  );
}
