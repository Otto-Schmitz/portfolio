"use client";

import { useLocale } from "@/context/LocaleContext";
import { useTheme } from "@/context/ThemeContext";
import { LOCALES } from "@/locales/types";

type SettingsModalProps = {
  onClose: () => void;
};

const LOCALE_LABEL_KEYS: Record<string, keyof import("@/locales/types").Translations> = {
  "pt-BR": "lang_name_ptBR",
  en: "lang_name_en",
  zh: "lang_name_zh",
  ko: "lang_name_ko",
  ja: "lang_name_ja",
  de: "lang_name_de",
  es: "lang_name_es",
};

export function SettingsModal({ onClose }: SettingsModalProps) {
  const { locale, setLocale, t } = useLocale();
  const { setTheme, isDark } = useTheme();

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 dark:bg-black/60 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white dark:bg-zinc-800 shadow-xl border border-zinc-200 dark:border-zinc-600 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-600 px-4 py-3 bg-zinc-50 dark:bg-zinc-800">
          <h2 id="settings-title" className="font-semibold text-zinc-800 dark:text-zinc-100">
            {t("settings_title")}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-200 transition"
            aria-label={t("settings_close")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4 space-y-6">
          <section>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">{t("settings_theme")}</p>
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-zinc-700 dark:text-zinc-300">{t("settings_dark_mode")}</span>
              <button
                type="button"
                role="switch"
                aria-checked={isDark}
                aria-label={t("settings_dark_mode")}
                onClick={() => setTheme(isDark ? "light" : "dark")}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-zinc-800 ${
                  isDark ? "bg-blue-600" : "bg-zinc-300 dark:bg-zinc-600"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-white shadow ring-0 transition ${
                    isDark ? "translate-x-5" : "translate-x-0.5"
                  }`}
                  aria-hidden
                />
              </button>
            </div>
          </section>
          <section>
            <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">{t("settings_language")}</p>
            <ul className="space-y-1">
              {LOCALES.map((code) => (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => setLocale(code)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                      locale === code
                        ? "bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 font-medium"
                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                    }`}
                  >
                    {t(LOCALE_LABEL_KEYS[code])}
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </div>
        <div className="border-t border-zinc-200 dark:border-zinc-600 px-4 py-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-200 dark:bg-zinc-600 text-zinc-800 dark:text-zinc-200 text-sm font-medium hover:bg-zinc-300 dark:hover:bg-zinc-500 transition"
          >
            {t("settings_close")}
          </button>
        </div>
      </div>
    </div>
  );
}
