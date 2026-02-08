"use client";

import { useAppMode } from "@/context/AppModeContext";
import { useLocale } from "@/context/LocaleContext";

/**
 * Dock original da interface: barra inferior com ícone Terminal e Finder.
 * Usado tanto na GUI quanto no Terminal para alternar entre os modos.
 */
export function AppDock() {
  const { mode, setMode } = useAppMode();
  const { t } = useLocale();

  return (
    <footer
      className="h-14 flex items-center justify-center gap-2 bg-black/10 backdrop-blur-md rounded-2xl mx-auto mb-2 sm:mb-4 px-3 sm:px-4 border border-black/10 shrink-0 max-w-[calc(100vw-1rem)]"
      role="contentinfo"
      aria-label={t("dock_terminal") + " / " + t("dock_finder")}
    >
      <button
        type="button"
        onClick={() => setMode("terminal")}
        className={`w-12 h-12 min-w-12 min-h-12 rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform touch-manipulation ${
          mode === "terminal" ? "bg-blue-500" : "bg-zinc-600"
        }`}
        aria-label={t("dock_terminal")}
        title={t("dock_terminal")}
      >
        ⌨️
      </button>
      <button
        type="button"
        onClick={() => setMode("gui")}
        className={`w-12 h-12 min-w-12 min-h-12 rounded-xl flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform touch-manipulation ${
          mode === "gui" ? "bg-blue-500" : "bg-zinc-600"
        }`}
        aria-label={t("dock_finder")}
        title={t("dock_finder")}
      >
        📁
      </button>
    </footer>
  );
}
