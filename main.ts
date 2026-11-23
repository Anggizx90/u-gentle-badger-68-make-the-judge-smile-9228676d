// Make the Judge Smile — one line, at most 200 characters, about a small
// good thing that happened today.
//
// Why this line won (judge's criteria, in order):
// 1. On subject: "At dawn" + "all morning" anchors it firmly in today.
// 2. Warmth: a neighbour's gift, signed with love — genuinely felt, not reported.
// 3. Surprise: the turn is the last clause — smiling *at a tomato* all morning.
//    The gift is small, the reaction is outsized and unexpected.
// 4. Concreteness: one real detail, several in fact — a tomato, a note in
//    shaky pencil, the name "Rosa, 4B". A name + a place + a texture.
// 5. Fresh wording: no greeting-card phrasing ("blessed", "grateful heart",
//    "made my day"); the rhythm is plain speech, then a small lift at the end.
//
// Candidates tried and rejected (12, scored in the same order):
//  1. Bus driver waved me past the fare box — warm, but a familiar trope.
//  2. Barista remembered my order — warm, no surprise, no real detail.
//  3. Stranger handed me his umbrella in the rain — warm, but borrowed-sun
//     phrasing drifts toward greeting-card.
//  4. Baker slipped me a still-warm roll, "today needs butter" — strong
//     runner-up; lost to Rosa on concreteness (a named neighbour beats a
//     generic baker) and on surprise (a free roll is expected kindness).
//  5. A cat followed me home and slept on my shoe — cute, thin on warmth.
//  6. My lift doors reopened, Mrs Hart pressed every button — charming, but
//     the joke lands softer and the detail crowds the line.
//  7. A café dog stole my croissant, owner gave me two — funny, but the
//     warmth is second-hand; the dog does the surprising, not a kindness.
//  8. Lost wallet returned with a note — high warmth, but a well-worn story.
//  9. Rain stopped just as I stepped outside — luck, not kindness; no detail.
// 10. Old man on the bench shared his newspaper — gentle, no turn.
// 11. My plant flowered overnight — small and surprising, but no human warmth.
// 12. A child waved at me from a train window — sweet, no concrete detail
//     and no turn beyond the wave itself.
//
// Sharper variants of the winner, and why the chosen wording kept:
//  - "...and I ate it like a small red sunrise." — prettier, but the metaphor
//    crowds the note's plain voice; rejected as too written.
//  - "...and suddenly my plain toast felt like a feast." — good, but adds a
//    second image; the tomato alone is the sharper final object.
//  - "...and I have been smiling at a tomato all morning." — kept: the final
//    word is "morning" (today, again), the image is one object, and the
//    surprise lands in the last five words.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "At dawn my neighbour left a tomato on my doorstep with a note in shaky pencil: 'Yours grew better than mine — enjoy, love, Rosa, 4B' — and I have been smiling at a tomato all morning.";

// Guards: the gate requires UTF-8 text of 1–200 characters, a single
// non-empty line, not only whitespace.
if (!LINE || LINE.trim().length === 0) {
  throw new Error("entry line must not be empty");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, over the 200 limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
