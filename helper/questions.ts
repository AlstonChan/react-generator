import chalk from "chalk";
import inquirer, { QuestionCollection } from "inquirer";
import path from "node:path";
import validate from "validate-npm-package-name";

const projectName: QuestionCollection = {
  name: "projectName",
  type: "input",
  message: "Project name:",
  validate: (input: string) => {
    const name: string = path.basename(path.resolve(input));
    const nameValidation = validate(path.basename(path.resolve(name)));

    if (nameValidation.validForNewPackages) {
      return true;
    }

    const { warnings, errors } = nameValidation;

    return `Invalid project name: ${chalk.red.bold(errors || warnings)}`;
  },
};

const packageManager: QuestionCollection = {
  name: "packageManager",
  type: "list",
  message: "Select your choice of package manager:",
  choices: ["npm", "yarn", "pnpm"],
};

const questions = [projectName, packageManager];

export default questions;
