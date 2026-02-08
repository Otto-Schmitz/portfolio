"use client";

import { isContentSectionId, SECTIONS, type ContentSectionId } from "@/components/content/types";
import type { CommandResult, CommandContext } from "./types";
import { DEFAULT_THEME, parseColor } from "../theme";
import { LOCALES } from "@/locales/types";

/** Nome do "arquivo" que existe dentro de cada pasta e contém o conteúdo da seção */
const CONTENT_FILE = "content";

/** De "about/content" retorna ["about", "content"]; senão null */
function parsePath(path: string): [ContentSectionId, string] | null {
  const parts = path.split("/").map((p) => p.trim().toLowerCase()).filter(Boolean);
  if (parts.length !== 2) return null;
  const [dir, file] = parts;
  if (isContentSectionId(dir) && file === CONTENT_FILE) return [dir, file];
  return null;
}

export function executeCommand(
  input: string,
  ctx: CommandContext
): CommandResult | null {
  const trimmed = input.trim();
  if (!trimmed) return null;

  const { t } = ctx;
  const parts = trimmed.split(/\s+/);
  const name = parts[0].toLowerCase();
  const args = parts.slice(1);

  if (name === "gui" || name === "/gui") {
    return { type: "switchToGui" };
  }

  if (name === "clear" || name === "cls") {
    return { type: "clear" };
  }

  if (name === "help" || name === "?") {
    return {
      type: "help",
      value: [
        t("terminal_help_title"),
        t("terminal_help_ls"),
        t("terminal_help_cd"),
        t("terminal_help_cat"),
        t("terminal_help_open"),
        t("terminal_help_history"),
        t("terminal_help_clear"),
        t("terminal_help_theme"),
        t("terminal_help_gui"),
        t("terminal_help_help"),
        t("terminal_help_lang"),
      ].join("\n"),
    };
  }

  if (name === "lang") {
    if (args.length === 0) {
      return {
        type: "text",
        value: t("terminal_lang_current", { locale: ctx.locale }),
      };
    }
    const code = args[0].toLowerCase();
    const normalized = code === "pt-br" ? "pt-BR" : code;
    const localeCode = normalized as (typeof LOCALES)[number];
    if (LOCALES.includes(localeCode)) {
      return { type: "setLocale", value: localeCode };
    }
    return {
      type: "text",
      value: t("terminal_lang_unknown", { code: args[0] }),
    };
  }

  if (name === "theme") {
    if (args.length === 0) {
      return {
        type: "text",
        value: [
          t("terminal_theme_usage"),
          t("terminal_theme_prompt"),
          t("terminal_theme_command"),
          t("terminal_theme_output"),
          t("terminal_theme_background"),
          t("terminal_theme_reset"),
          t("terminal_theme_example"),
        ].join("\n"),
      };
    }
    if (args[0].toLowerCase() === "reset") {
      return { type: "setTheme", value: DEFAULT_THEME };
    }
    if (args.length < 2) {
      return { type: "text", value: t("terminal_theme_missingColor") };
    }
    const key = args[0].toLowerCase() as keyof typeof DEFAULT_THEME;
    if (!(key in DEFAULT_THEME)) {
      return {
        type: "text",
        value: t("terminal_theme_unknownKey", { key: args[0] }),
      };
    }
    const color = parseColor(args[1]);
    if (!color) {
      return { type: "text", value: t("terminal_theme_invalidColor", { value: args[1] }) };
    }
    return { type: "setTheme", value: { [key]: color } };
  }

  if (name === "history") {
    const list = (ctx.history ?? [])
      .map((cmd, i) => `${String(i + 1).padStart(5)}  ${cmd}`)
      .join("\n");
    return {
      type: "text",
      value: list || t("terminal_history_empty"),
    };
  }

  if (name === "ls") {
    if (ctx.currentDir === "~") {
      const target = args[0]?.toLowerCase();
      if (!target) {
        const list = SECTIONS.join("  ");
        return { type: "text", value: list };
      }
      if (isContentSectionId(target)) {
        return { type: "text", value: CONTENT_FILE };
      }
      return {
        type: "text",
        value: t("terminal_ls_cannotAccess", { name: args[0] }),
      };
    }
    if (args[0]) {
      return {
        type: "text",
        value: t("terminal_ls_cannotAccess", { name: args[0] }),
      };
    }
    return { type: "text", value: CONTENT_FILE };
  }

  if (name === "cd") {
    if (args.length === 0) {
      ctx.setCurrentDir("~");
      return { type: "text", value: "" };
    }
    const dir = args[0].toLowerCase();
    if (dir === "~" || dir === "..") {
      ctx.setCurrentDir("~");
      return { type: "text", value: "" };
    }
    if (isContentSectionId(dir)) {
      ctx.setCurrentDir(dir);
      return { type: "text", value: "" };
    }
    return {
      type: "text",
      value: t("terminal_cd_noSuchDir", { name: args[0] }),
    };
  }

  if (name === "cat") {
    if (args.length === 0) {
      return { type: "text", value: "cat: missing operand" };
    }
    const pathArg = args[0].toLowerCase();

    if (ctx.currentDir === "~") {
      const parsed = parsePath(pathArg);
      if (parsed) {
        const [section] = parsed;
        return {
          type: "component",
          value: { _section: section },
        } as unknown as CommandResult;
      }
      if (isContentSectionId(pathArg)) {
        return {
          type: "text",
          value: t("terminal_cat_isDirectory", { name: pathArg }),
        };
      }
      return {
        type: "text",
        value: t("terminal_cat_noSuchFile", { name: args[0] }),
      };
    }

    if (pathArg === CONTENT_FILE) {
      return {
        type: "component",
        value: { _section: ctx.currentDir },
      } as unknown as CommandResult;
    }
    return {
      type: "text",
      value: t("terminal_cat_noSuchFile", { name: args[0] }),
    };
  }

  if (name === "open") {
    if (args.length === 0) {
      return { type: "text", value: "open: missing operand" };
    }
    const pathArg = args[0].toLowerCase();

    if (ctx.currentDir === "~") {
      const parsed = parsePath(pathArg);
      if (parsed) {
        const [section] = parsed;
        return {
          type: "component",
          value: { _section: section },
        } as unknown as CommandResult;
      }
      if (isContentSectionId(pathArg)) {
        ctx.setCurrentDir(pathArg);
        return { type: "text", value: "" };
      }
      return {
        type: "text",
        value: t("terminal_cat_noSuchFile", { name: args[0] }),
      };
    }

    if (pathArg === CONTENT_FILE) {
      return {
        type: "component",
        value: { _section: ctx.currentDir },
      } as unknown as CommandResult;
    }
    return {
      type: "text",
      value: t("terminal_cat_noSuchFile", { name: args[0] }),
    };
  }

  if (name.startsWith("/") && name.length > 1) {
    const section = name.slice(1).toLowerCase();
    if (isContentSectionId(section)) {
      ctx.setCurrentDir(section);
      return { type: "text", value: "" };
    }
  }

  return {
    type: "text",
    value: t("terminal_commandNotFound", { cmd: name }),
  };
}
