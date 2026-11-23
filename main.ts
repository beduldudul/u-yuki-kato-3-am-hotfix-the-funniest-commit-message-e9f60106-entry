import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "revert: the deploy that paged me at 3 AM; prod is back up, my sleep schedule filed its own incident";

if (line.length < 1 || line.length > 179 || !line.trim()) {
  throw new Error("entry must be 1-179 non-blank chars, got " + line.length);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
