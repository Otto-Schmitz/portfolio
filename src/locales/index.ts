import type { LocaleCode, Translations } from "./types";
import { ptBR } from "./pt-BR";
import { en } from "./en";
import { zh } from "./zh";
import { ko } from "./ko";
import { ja } from "./ja";
import { de } from "./de";
import { es } from "./es";

export type { LocaleCode, Translations };
export { LOCALES } from "./types";

export const translations: Record<LocaleCode, Translations> = {
  "pt-BR": ptBR,
  en,
  zh,
  ko,
  ja,
  de,
  es,
};

export function getTranslation(locale: LocaleCode, key: keyof Translations): string {
  return translations[locale]?.[key] ?? translations.en[key] ?? key;
}

export function t(
  locale: LocaleCode,
  key: keyof Translations,
  params?: Record<string, string>
): string {
  let str = getTranslation(locale, key);
  if (params) {
    for (const [k, v] of Object.entries(params)) {
      str = str.replace(new RegExp(`\\{\\{${k}\\}\\}`, "g"), v);
    }
  }
  return str;
}
