// Nodejs modules
import { execSync } from "node:child_process";
import path from "node:path";

// External modules
import chalk from "chalk";
import validate from "validate-npm-package-name";
import which from "which";

// Types
import type { QuestionCollection } from "inquirer";

const projectName: QuestionCollection<Record<string, string>> = {
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

const checkPackageManagerVersion = (packageManager: string): string => {
  const hasPackageManager = which.sync(packageManager, { nothrow: true });

  if (!hasPackageManager) {
    return "Not Found";
  } else {
    return execSync(`${packageManager} --version`).toString().trim();
  }
};

const packageManager: QuestionCollection<Record<string, string>> = {
  name: "packageManager",
  type: "list",
  message: "Select your choice of package manager:",
  choices: [
    {
      name: `npm  ${chalk.gray(`(${checkPackageManagerVersion("npm")})`)}`,
      value: "npm",
      disabled: which.sync("npm", { nothrow: true }) === null,
    },
    {
      name: `yarn  ${chalk.gray(`(${checkPackageManagerVersion("yarn")})`)}`,
      value: "yarn",
      disabled: which.sync("yarn", { nothrow: true }) === null,
    },
    {
      name: `pnpm  ${chalk.gray(`(${checkPackageManagerVersion("pnpm")})`)}`,
      value: "pnpm",
      disabled: which.sync("pnpm", { nothrow: true }) === null,
    },
  ],
};

const transpiler: QuestionCollection<Record<string, string>> = {
  name: "transpiler",
  type: "list",
  message: "Select your choice of Transpiler:",
  choices: [
    { name: "SWC", value: "swc" },
    { name: "Babel", value: "babel" },
  ],
};

const questions = [projectName, packageManager, transpiler];

export default questions;
