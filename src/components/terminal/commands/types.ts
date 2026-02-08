import type { ContentSectionId } from "@/components/content/types";
import type { ReactNode } from "react";
import type { TerminalTheme } from "../theme";
import type { LocaleCode, Translations } from "@/locales/types";

export type CommandResult =
  | { type: "text"; value: string }
  | { type: "component"; value: ReactNode }
  | { type: "switchToGui" }
  | { type: "clear" }
  | { type: "setTheme"; value: Partial<TerminalTheme> }
  | { type: "setLocale"; value: LocaleCode };

export type TFunction = (
  key: keyof Translations,
  params?: Record<string, string>
) => string;

export type CommandContext = {
  currentDir: ContentSectionId | "~";
  setCurrentDir: (dir: ContentSectionId | "~") => void;
  switchToGui: () => void;
  history: string[];
  t: TFunction;
  locale: LocaleCode;
  setLocale: (locale: LocaleCode) => void;
};
