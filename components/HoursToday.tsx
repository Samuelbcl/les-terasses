"use client";

import { useEffect, useState } from "react";

const jours = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
];

export default function HoursToday() {
  const [day, setDay] = useState<string>("");
  const [soir, setSoir] = useState<string>("18h00 — 22h00");

  useEffect(() => {
    const d = new Date();
    setDay(jours[d.getDay()]);
    // Jeu (4) à dim (0) : service jusqu'à 22h. Lun-mer : 21h.
    const isLate = [0, 4, 5, 6].includes(d.getDay());
    setSoir(isLate ? "18h00 — 22h00" : "18h00 — 21h00");
  }, []);

  return (
    <div className="bg-charbon/70 backdrop-blur-md border border-blanc-craie/10 p-8 rounded">
      <h3 className="font-display text-xl mb-4">
        Aujourd&apos;hui{day && ` — ${day}`}
      </h3>
      <ul className="flex flex-col gap-2">
        <li className="flex justify-between pb-2 border-b border-dashed border-blanc-craie/15">
          <strong className="font-medium">Midi</strong>
          <span className="text-blanc-craie/80 tabular-nums">12h00 — 14h30</span>
        </li>
        <li className="flex justify-between">
          <strong className="font-medium">Soir</strong>
          <span className="text-blanc-craie/80 tabular-nums">{soir}</span>
        </li>
      </ul>
    </div>
  );
}
