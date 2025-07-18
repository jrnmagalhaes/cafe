#! /usr/bin/env node
const Fs = require("fs");
const { showAtomTypes } = require("./utils");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const AtomicFile = require("./atomicFile");
const AtomicFileTypes = require("./atomicFileTypes");

const {
  projectType,
  src_folder = "./src",
  fileType = "ts",
} = require(process.cwd() + "/cafe.config.json");

const usage = "\nUsage: cafe <arguments> <atom_path>";
const options = yargs
  .usage(usage)
  .option("types", {
    alias: "atom_types",
    describe: "List all supported types.",
    type: "boolean",
    demandOption: false,
  })
  .option("at", {
    alias: "type",
    describe: "choose the atom type",
    choices: ["a", "m", "o", "p", "t"],
    demandOption: false,
  })
  .option("s", {
    alias: "render_styles",
    describe: "define if you want to add a sass module",
    demandOption: false,
    type: "boolean",
  })
  .option("d", {
    alias: "create_storybook",
    describe: "define if you want to include a storybook file",
    demandOption: false,
    type: "boolean",
  })
  .option("t", {
    alias: "create_testfiles",
    describe: "define if you want to include a test file",
    demandOption: false,
    type: "boolean",
  })
  .option("setup", {
    describe: "setup initial folder structure",
  })
  .help(true).argv;

const argv = yargs(hideBin(process.argv)).parse();

if (argv.type || argv.at) {
  if (argv._[0]) {
    const atomicFile = new AtomicFile(
      argv._[0],
      argv.type ? argv.type : argv.at,
      projectType,
      src_folder,
      argv.s,
      argv.d,
      argv.t,
      fileType
    );
    atomicFile.createAtom();
  } else {
    console.log("************* ERROR *************");
    console.log("provide a file name or path");
  }
  return;
}

if (argv.setup) {
  let folderPath = "";
  for (const [key, value] of Object.entries(AtomicFileTypes)) {
    folderPath = `${src_folder}/${value}`;
    if (!Fs.existsSync(folderPath)) {
      Fs.mkdirSync(folderPath, { recursive: true });
    }
    if (!Fs.existsSync(`${folderPath}/index.${fileType}`)) {
      Fs.writeFileSync(`${folderPath}/index.${fileType}`, "", function (err) {
        if (err) throw err;
      });
    }
  }
  console.log("Structure created");
  return;
}

// list all file types
if (argv.types) {
  showAtomTypes();
  return;
}
