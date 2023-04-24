import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import chalk from "chalk";
import inquirer, { Answers } from "inquirer";

import questions from "./helper/questions.js";
import { createDirectory } from "./helper/create-file.js";

// intro message
console.log("", "\n", chalk.green.bold("REACT APP GENERATOR"), "", "\n");

async function createProject() {
  try {
    const { projectName }: Answers = await inquirer.prompt(questions);
    const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
    // since file will actually be executed in dist folder
    // we have to back up one step in order to get the
    // correct template path
    const noDirPath = path.dirname(__dirname);
    // where the template folder located at
    const templatePath: string = `${noDirPath}/template`;
    // user current working directory where user wants to
    // create react template folder at
    const projectPath = path.join(process.cwd(), projectName);
    fs.mkdirSync(projectPath);

    await createDirectory(templatePath, projectPath);

    console.log("Done");
  } catch (error) {
    console.error(error);
  }
}

createProject();
