import which from "which";
import chalk from "chalk";
import { execSync } from "child_process";

function isInGitRepository(): boolean {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    return true;
  } catch (_) {}
  return false;
}

function isInMercurialRepository(): boolean {
  try {
    execSync("hg --cwd . root", { stdio: "ignore" });
    return true;
  } catch (_) {}
  return false;
}

export const initGit = async () => {
  try {
    const hasGit = await which("git", { nothrow: true });

    if (hasGit) {
      if (isInGitRepository() || isInMercurialRepository()) {
        return initFailed();
      }

      execSync("git init", { stdio: "ignore" });
      execSync("git checkout -b main", { stdio: "ignore" });
      execSync("git add -A", { stdio: "ignore" });
      execSync('git commit -m "Initial commit from React Generator"', {
        stdio: "ignore",
      });

      return initSuccess();
    } else {
      return initFailed();
    }
  } catch (error: any) {
    initFailed();
    throw new Error(error);
  }
};

function initFailed() {
  console.log(`${chalk.red.bold("× git")} couldn't be initialized`, "\n");
}

function initSuccess() {
  console.log(`${chalk.yellow.bold("✓ git")} initialized`, "\n");
}
