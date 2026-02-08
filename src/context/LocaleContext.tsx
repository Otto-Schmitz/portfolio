"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  type ReactNode,
} from "react";
import type { LocaleCode } from "@/locales/types";
import { LOCALES } from "@/locales/types";
import { translations, t as translate } from "@/locales";

const STORAGE_KEY = "portfolio-locale";

function loadLocale(): LocaleCode {
  if (typeof window === "undefined") return "pt-BR";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as LocaleCode | null;
    if (stored && LOCALES.includes(stored)) return stored;
  } catch {}
  return "pt-BR";
}

function saveLocale(locale: LocaleCode) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {}
}

type TFunction = (key: keyof import("@/locales/types").Translations, params?: Record<string, string>) => string;

type LocaleContextValue = {
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
  t: TFunction;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("pt-BR");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setLocaleState(loadLocale());
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: LocaleCode) => {
    setLocaleState(newLocale);
    saveLocale(newLocale);
    if (typeof document !== "undefined") {
      document.documentElement.lang = newLocale === "pt-BR" ? "pt-BR" : newLocale;
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.lang = locale === "pt-BR" ? "pt-BR" : locale;
  }, [locale, mounted]);

  const t = useCallback<TFunction>(
    (key, params) => translate(locale, key, params),
    [locale]
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}

export function useT() {
  return useLocale().t;
}
