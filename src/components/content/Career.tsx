"use client";

import { careerData } from "@/data/career";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    item: "text-zinc-300 text-sm",
    meta: "text-zinc-500 text-xs",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    item: "text-zinc-700 dark:text-zinc-300",
    meta: "text-zinc-500 dark:text-zinc-400 text-sm",
  },
};

export function Career({ variant }: { variant: SectionVariant }) {
  const s = styles[variant];
  return (
    <div className="space-y-4">
      <h3 className={s.heading}>Carreira</h3>
      <ul className="space-y-3 list-none">
        {careerData.jobs.map((job, i) => (
          <li key={i} className="border-l-2 border-zinc-300 dark:border-zinc-600 pl-3">
            <p className={`font-medium ${s.item}`}>{job.role}</p>
            <p className={s.meta}>
              {job.company} · {job.period}
            </p>
            <p className={s.item}>{job.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
