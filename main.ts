import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

// The excuse, assembled from its two beats: the setup everyone recognises,
// then the punchline that turns the ceiling into the boss.
const setup = "My phone's screen time report says I spent 9 hours staring at the ceiling,";
const punchline = "so I'm taking a mental health day before the ceiling files a complaint.";
const excuse = [setup, punchline].join(" ");

mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(outFile, excuse, { encoding: "utf8" });
console.log(`Wrote ${excuse.length} characters to ${outFile}`);
