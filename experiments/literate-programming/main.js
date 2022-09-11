const { execFile } = require("child_process");
const { readFile, writeFile } = require("fs/promises");

const main = async () => {
  const data = await readFile("./intro.md", { encoding: "utf-8" });
  const lines = data.split("\n");
  const transformed = [];
  let started = false;
  lines.forEach((line) => {
    if (line.startsWith("```")) {
      if (started) {
        started = false;
      } else {
        started = true;
      }
    } else {
      if (started) {
        transformed.push(line);
      } else {
        transformed.push(`//${line}`);
      }
    }
  });

  const outputFilePath = "./output/hello.js";

  writeFile(outputFilePath, transformed.join("\n"));

  execFile("node", [outputFilePath], (error, stdout, stderr) => {
    if (error) {
      throw error;
    }
    console.log(stdout);
  });
};

main();
