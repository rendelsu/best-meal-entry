import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence = "The best meal I ever had was my grandmother's tomato rice on her porch steps, slick with garlic oil, eaten with my fingers while rain hammered the tin roof and the first bite burned my tongue.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, sentence, "utf8");
chmodSync(outFile, 0o644);
