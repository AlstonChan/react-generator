// External modules
import chalk from "chalk";
import spawn from "cross-spawn";
import ora from "ora";

export const installDeps = async (packageManager: string, projectPath: string) => {
  return new Promise<void>((resolve, reject) => {
    const spinner = ora("Installing dependencies...");
    try {
      const installationProcess = spawn(packageManager, ["install"], {
        cwd: projectPath,
        stdio: "ignore",
      });

      spinner.start();
      spinner.color = "yellow";

      setTimeout(() => {
        spinner.text = "This is taking longer than usual, be patience...";
      }, 20000);

      installationProcess.on("error", (error) => {
        spinner.fail("Failed to install dependencies");
        console.error("\n", error);
        reject(error);
      });

      installationProcess.on("exit", () => {
        spinner.succeed("All dependencies have been installed");
        resolve();
      });
    } catch (error) {
      spinner.fail("Failed to install dependencies");
      reject(error);
      if (error instanceof Error) {
        console.error(chalk.red(error.message));
        console.error(chalk.white.bgRedBright(error.stack));
        throw new Error(error.name);
      } else {
        throw new Error("An error occurred while creating a directory");
      }
    }
  });
};
