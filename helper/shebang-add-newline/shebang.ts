import * as readline from "node:readline/promises";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir: string = path.dirname(fileURLToPath(import.meta.url));

const targetFile = "index.js";
const outputFile = "output.js";

const targetFilePath: string = path.join(currentDir, targetFile);
const outputFilePath: string = path.join(currentDir, outputFile);

const output = fs.createWriteStream(outputFilePath);

const rl = readline.createInterface({
  input: fs.createReadStream(targetFilePath),
});

let isFirstLine: boolean = true;

rl.on("line", (line) => {
  if (isFirstLine) {
    output.write(line + "\n" + "\n");
    isFirstLine = false;
  } else {
    output.write(line + "\n");
  }
});

rl.on("close", () => {
  output.close();
  fs.unlinkSync(targetFilePath);
});
