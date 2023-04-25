#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ora from "ora";
import chalk from "chalk";
import inquirer, { Answers } from "inquirer";

import questions from "./helper/questions.js";
import { createDirectory } from "./helper/create-file.js";
import { installDeps } from "./helper/install.js";
import { initGit } from "./helper/git.js";

// intro message
console.log("", "\n", chalk.green.bold("REACT APP GENERATOR"), "", "\n");

async function createProject() {
  try {
    const { projectName, packageManager }: Answers = await inquirer.prompt(
      questions
    );
    const __dirname: string = path.dirname(fileURLToPath(import.meta.url));
    // since file will actually be executed in dist folder
    // we have to back up one step in order to get the
    // correct template path
    const noDistPath = path.dirname(__dirname);
    // where the template folder located at
    const templatePath: string = `${noDistPath}/template`;
    // user current working directory where user wants to
    // create react template folder at
    const projectPath = path.join(process.cwd(), projectName);
    fs.mkdirSync(projectPath);

    const spinner1 = ora("Creating React App").start();
    await createDirectory(templatePath, projectPath);
    spinner1.text = "React App Created";
    spinner1.succeed();

    // change directory to the newly created react app
    process.chdir(projectPath);

    await installDeps(packageManager, projectPath);
    await initGit();

    console.log(
      `Project ${chalk.green.bold(projectName)} was successfully created!`,
      "\n",
      "\n",
      "To start developing your react app, run",
      "\n",
      "\n",
      `cd ${chalk.green.bold(projectName)}`,
      "\n",
      `${packageManager} run dev`,
      "\n",
      "\n",
      `Open your browser and head to ${chalk.cyan.bold(
        "http://127.0.0.1:3000"
      )}`,
      "\n",
      `For more information, kindly refer to ${chalk.cyan.bold("README.md")}`,
      "\n"
    );
  } catch (error) {
    console.error(error);
  }
}

createProject();
