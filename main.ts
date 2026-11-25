// The Word You'd Delete From the Dictionary
// make.fun bounty u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
//
// The entry is one word: the single word to erase from the dictionary
// forever. The program writes exactly that word to /output/entry.txt.
//
// The pick: "colonel" — the English word most famously spelled nothing
// like it sounds. Every reader knows the joke the instant they see it:
// a military rank pronounced "kernel", a spelling that has pranked
// English learners for centuries. Delete it and the gap it leaves is
// the punchline itself — no more explaining why c-o-l-o-n-e-l says
// "kernel". It is a real word everyone recognises, instantly understood,
// and not the first word the rest of the field reaches for.

import * as fs from "node:fs";
import * as path from "node:path";

const WORD = "colonel";

// The house gate: /output/entry.txt must be UTF-8 text of 1 to 77
// characters, not only white space. A single word satisfies it, but
// check before writing so a bad pick can never ship silently.
function isValidEntry(word: string): boolean {
  return word.length >= 1 && word.length <= 77 && word.trim().length > 0;
}

function main(): void {
  if (!isValidEntry(WORD)) {
    throw new Error(`invalid entry word: ${JSON.stringify(WORD)}`);
  }
  const outDir = "/output";
  const outFile = path.join(outDir, "entry.txt");
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(outFile, WORD, "utf8");
}

main();
