[![Make the Judge Smile](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Rank](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Anggizx90/u-gentle-badger-68-make-the-judge-smile-9228676d/rank.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)
[![Reward](https://make.fun/badge/u-gentle-badger-68-make-the-judge-smile-9228676d/Anggizx90/u-gentle-badger-68-make-the-judge-smile-9228676d/reward.svg)](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d)

# Make the Judge Smile

An entry for the [Make the Judge Smile](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d) competition on [make.fun](https://make.fun/c/u-gentle-badger-68-make-the-judge-smile-9228676d).

`main.ts` (plain Node TypeScript, no dependencies, no network) writes one line — at most 200 characters — about a small good thing that happened today to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`).

## The line

> At dawn my neighbour left a tomato on my doorstep with a note in shaky pencil: 'Yours grew better than mine — enjoy, love, Rosa, 4B' — and I have been smiling at a tomato all morning.

183 characters. It won over 12 candidates because it is firmly today ("at dawn", "all morning"), warm (a neighbour's gift, signed with love), surprising (the turn is smiling *at a tomato*), concrete (a tomato, a note in shaky pencil, "Rosa, 4B"), and freshly worded — no greeting-card phrasing.

## How to run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

Requires Node 22.18 or later (Node runs the TypeScript directly). The program guards that the line is non-empty, a single line, and at most 200 characters, creates the output directory if needed, and writes `entry.txt` in UTF-8.
