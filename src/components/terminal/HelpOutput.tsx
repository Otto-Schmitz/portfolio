"use client";

import type { TerminalTheme } from "./theme";

/**
 * Parseia a saída do help (uma linha por comando) e renderiza comando + descrição
 * em layout flex para que no mobile a descrição quebre linha e fique legível.
 */
function parseHelpLines(text: string): { title: string; rows: { cmd: string; desc: string }[] } {
  const lines = text.trim().split("\n").filter(Boolean);
  const title = lines[0] ?? "";
  const rows: { cmd: string; desc: string }[] = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    const match = trimmed.match(/^(.+?)\s{2,}(.+)$/);
    if (match) {
      rows.push({ cmd: match[1].trim(), desc: match[2].trim() });
    } else if (trimmed) {
      rows.push({ cmd: trimmed, desc: "" });
    }
  }
  return { title, rows };
}

type HelpOutputProps = {
  text: string;
  theme: TerminalTheme;
};

export function HelpOutput({ text, theme }: HelpOutputProps) {
  const { title, rows } = parseHelpLines(text);

  return (
    <div className="font-mono text-sm leading-relaxed" style={{ color: theme.output }}>
      <p className="font-semibold mb-2">{title}</p>
      <ul className="space-y-2 list-none p-0 m-0">
        {rows.map(({ cmd, desc }, i) => (
          <li key={i} className="flex flex-col sm:flex-row sm:gap-3 gap-0.5">
            <span className="shrink-0 sm:w-28" style={{ color: theme.prompt }}>
              {cmd}
            </span>
            <span className="break-words min-w-0 pl-0 sm:pl-0">
              {desc}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
