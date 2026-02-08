"use client";

import { useState } from "react";
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
  const s = styles[variant];
  const [photoError, setPhotoError] = useState(false);
  const photoUrl = "photoUrl" in aboutData ? aboutData.photoUrl : null;
  const showPhoto = photoUrl && !photoError;

  return (
    <div className="space-y-3">
      {showPhoto && (
        <img
          src={photoUrl}
          alt=""
          className="w-24 h-24 rounded-full object-cover border-2 border-zinc-300 dark:border-zinc-600"
          onError={() => setPhotoError(true)}
        />
      )}
      <div className="space-y-2">
        <h3 className={s.heading}>{aboutData.name}</h3>
        <p className={s.accent}>{aboutData.headline}</p>
        <p className={s.body}>{aboutData.bio}</p>
      </div>
    </div>
  );
}
