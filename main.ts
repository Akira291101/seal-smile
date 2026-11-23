import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const emoji: string = "🦭";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), emoji, { encoding: "utf8" });
