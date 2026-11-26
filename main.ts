import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence = "The best meal I ever had was my grandmother's tomato rice on her porch steps, sticky with oil and basil, eaten while rain hammered the tin roof and made hunger feel like company.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, sentence, "utf8");
chmodSync(outFile, 0o644);
