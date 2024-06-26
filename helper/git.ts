// Nodejs modules
import { execSync } from "child_process";

// External modules
import which from "which";
import chalk from "chalk";

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
      execSync('git commit -m "Initial commit from React App Generator"', {
        stdio: "ignore",
      });

      return initSuccess();
    } else {
      console.error(
        chalk.red("git command not found, make sure git is installed on your system")
      );
      return initFailed();
    }
  } catch (error) {
    initFailed();
    console.error(chalk.red("An error occurred while initializing git repository"));
  }
};

function initFailed() {
  console.log(`${chalk.red.bold("× git")} couldn't be initialized`, "\n");
}

function initSuccess() {
  console.log(`${chalk.yellow.bold("✓ git")} initialized`, "\n");
}

/**
 * Check if the current working directory is a git repository
 */
function isInGitRepository(): boolean {
  try {
    execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" });
    console.error("You are already in a git repository.");
    return true;
  } catch (_) {
    return false;
  }
}

/**
 * Check if the current working directory is a mercurial repository
 */
function isInMercurialRepository(): boolean {
  try {
    execSync("hg --cwd . root", { stdio: "ignore" });
    console.error("You are already in a mercurial repository.");
    return true;
  } catch (_) {
    return false;
  }
}
