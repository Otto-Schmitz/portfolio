"use client";

import { useLocale } from "@/context/LocaleContext";
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="settings-title"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="w-full max-w-md rounded-xl bg-white shadow-xl border border-zinc-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-3 bg-zinc-50">
          <h2 id="settings-title" className="font-semibold text-zinc-800">
            {t("settings_title")}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-500 hover:bg-zinc-200 hover:text-zinc-700 transition"
            aria-label={t("settings_close")}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-4">
          <p className="text-sm font-medium text-zinc-600 mb-3">{t("settings_language")}</p>
          <ul className="space-y-1">
            {LOCALES.map((code) => (
              <li key={code}>
                <button
                  type="button"
                  onClick={() => {
                    setLocale(code);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                    locale === code
                      ? "bg-blue-100 text-blue-800 font-medium"
                      : "text-zinc-700 hover:bg-zinc-100"
                  }`}
                >
                  {t(LOCALE_LABEL_KEYS[code])}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-zinc-200 px-4 py-3 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-200 text-zinc-800 text-sm font-medium hover:bg-zinc-300 transition"
          >
            {t("settings_close")}
          </button>
        </div>
      </div>
    </div>
  );
}
