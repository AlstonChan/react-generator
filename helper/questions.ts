import chalk from "chalk";
import { QuestionCollection } from "inquirer";
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

const questions = [projectName];

export default questions;
