"use client";

import { useState } from "react";
import { useLocale } from "@/context/LocaleContext";
import { aboutData } from "@/data/about";
import type { SectionVariant } from "./SectionRenderer";

const styles = {
  terminal: {
    heading: "text-green-400 font-semibold",
    body: "text-zinc-300 text-sm",
    accent: "text-zinc-400",
  },
  gui: {
    heading: "text-zinc-900 dark:text-zinc-100 font-semibold text-lg",
    body: "text-zinc-600 dark:text-zinc-300",
    accent: "text-zinc-500 dark:text-zinc-400",
  },
};

export function About({ variant }: { variant: SectionVariant }) {
  const { t } = useLocale();
  const s = styles[variant];
  const [photoError, setPhotoError] = useState(false);
  const photoUrl = "photoUrl" in aboutData ? aboutData.photoUrl : null;
  const showPhoto = photoUrl && !photoError;

  const experienceLines = t("about_experience_list").split("\n");
  const funfactKeys = [
    "about_funfacts_car",
    "about_funfacts_anime",
    "about_funfacts_game",
    "about_funfacts_fuel",
    "about_funfacts_interests",
    "about_funfacts_pets",
  ] as const;

  return (
    <div className="space-y-4">
      {showPhoto && (
        <img
          src={photoUrl}
          alt=""
          className="w-24 h-24 rounded-full object-cover border-2 border-zinc-300 dark:border-zinc-600"
          onError={() => setPhotoError(true)}
        />
      )}
      <div className="space-y-3">
        <h3 className={s.heading}>{t("about_name")}</h3>
        <p className={s.accent}>{t("about_headline")}</p>
        <p className={s.body}>{t("about_bio")}</p>
        <p className={`${s.body} font-medium`}>{t("about_experience_title")}</p>
        <ul className="list-none space-y-1">
          {experienceLines.map((line, i) => (
            <li key={i} className={s.body}>
              {line}
            </li>
          ))}
        </ul>
        <p className={s.body}>{t("about_bio_closing")}</p>
        <p className={`${s.body} font-medium mt-4`}>{t("about_funfacts_title")}</p>
        <ul className="list-none space-y-1.5">
          {funfactKeys.map((key) => (
            <li key={key} className={s.body}>
              {t(key)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
