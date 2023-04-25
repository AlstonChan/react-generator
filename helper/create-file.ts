import fs from "node:fs";
import path from "node:path";

const createPackageJSON = async (
  projectPath: string,
  file: string,
  fileContent: string
) => {
  const parsedJSON = JSON.parse(fileContent);
  parsedJSON.name = path.basename(projectPath);
  const updatedJSON = JSON.stringify(parsedJSON, null, 4);
  const fileDestination = path.join(projectPath, file);
  return fs.writeFileSync(fileDestination, updatedJSON, "utf8");
};

const createFile = async (
  filePath: string,
  projectPath: string,
  file: string
) => {
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  switch (file) {
    case "package.json":
      createPackageJSON(projectPath, file, fileContent);
      break;

    // gitignore have to be renamed afterwards as .gitignore
    // is ignore by default by NPM.
    // https://docs.npmjs.com/cli/v9/using-npm/developers#keeping-files-out-of-your-package
    case "gitignore":
      const dotFileDestination = path.join(projectPath, `.${file}`);
      fs.writeFileSync(dotFileDestination, fileContent, "utf8");
      break;

    default:
      const fileDestination = path.join(projectPath, file);
      fs.writeFileSync(fileDestination, fileContent, "utf8");
      break;
  }
};

export const createDirectory = async (
  templatePath: string,
  projectPath: string
) => {
  try {
    // get all files that needs to be copied to user working directory
    const filesToCreate = fs.readdirSync(templatePath, {
      withFileTypes: true,
    });

    for (const file of filesToCreate) {
      const currentPath = path.join(templatePath, file.name);
      const fileType = fs.statSync(currentPath);

      if (fileType.isFile()) {
        await createFile(currentPath, projectPath, file.name);
      }

      if (fileType.isDirectory()) {
        const newDirPath = path.join(projectPath, file.name);
        const deepTemplatePath = path.join(templatePath, file.name);
        fs.mkdirSync(newDirPath);
        await createDirectory(deepTemplatePath, newDirPath);
      }
    }
  } catch (error: any) {
    throw new Error(error);
  }
};