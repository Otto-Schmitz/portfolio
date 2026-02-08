export const LOCALES = [
  "pt-BR",
  "en",
  "zh",
  "ko",
  "ja",
  "de",
  "es",
] as const;

export type LocaleCode = (typeof LOCALES)[number];

export type Translations = {
  app_skipLink: string;
  terminal_help_title: string;
  terminal_help_ls: string;
  terminal_help_cd: string;
  terminal_help_cat: string;
  terminal_help_open: string;
  terminal_help_history: string;
  terminal_help_clear: string;
  terminal_help_theme: string;
  terminal_help_gui: string;
  terminal_help_help: string;
  terminal_help_lang: string;
  terminal_theme_usage: string;
  terminal_theme_prompt: string;
  terminal_theme_command: string;
  terminal_theme_output: string;
  terminal_theme_background: string;
  terminal_theme_reset: string;
  terminal_theme_example: string;
  terminal_theme_missingColor: string;
  terminal_theme_unknownKey: string;
  terminal_theme_invalidColor: string;
  terminal_theme_updated: string;
  terminal_history_empty: string;
  terminal_lang_current: string;
  terminal_lang_usage: string;
  terminal_lang_success: string;
  terminal_lang_unknown: string;
  terminal_cat_noSuchFile: string;
  terminal_cat_isDirectory: string;
  terminal_commandNotFound: string;
  terminal_cd_noSuchDir: string;
  terminal_ls_cannotAccess: string;
  gui_menu_finder: string;
  gui_menu_file: string;
  gui_menu_edit: string;
  gui_menu_view: string;
  gui_menu_go: string;
  gui_menu_window: string;
  gui_menu_help: string;
  gui_sidebar_favorites: string;
  gui_empty_selectFolder: string;
  gui_folder_about: string;
  gui_folder_career: string;
  gui_folder_skills: string;
  gui_folder_projects: string;
  gui_folder_contact: string;
  gui_window_title: string;
  dock_terminal: string;
  dock_finder: string;
  settings_title: string;
  settings_language: string;
  settings_theme: string;
  settings_dark_mode: string;
  settings_close: string;
  lang_name_ptBR: string;
  lang_name_en: string;
  lang_name_zh: string;
  lang_name_ko: string;
  lang_name_ja: string;
  lang_name_de: string;
  lang_name_es: string;
};
