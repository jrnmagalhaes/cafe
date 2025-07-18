const fs = require("node:fs");
const path = require("node:path");

class Templates {
  constructor(type, name, sass, atomType) {
    this.type = type;
    this.name = name;
    this.sass = sass;
    this.atomType = atomType;
    this.availableTemplates = {
      "react-native": {
        imports: {
          regular: `import React from "react";\nimport { View, Text } from "react-native";\n`,
          sass: `import Styles from "./name.module.scss";`,
        },
        body: {
          regular: `\nconst name = () => {\n  return (\n    <View>\n      <Text>name</Text>\n    </View>\n  );\n};\n\n`,
          sass: `\nconst name = () => {\n  return (\n    <View className={Styles.container}>\n      <Text>name</Text>\n    </View>\n  );\n};\n\n`,
        },
        export: `export {name};\n`,
      },
      react: {
        imports: {
          regular: "",
          sass: `import Styles from "./name.module.scss";\n`,
        },
        body: {
          regular: `\nconst name = () => {\n  return (\n    <div>\n      name\n    </div>\n  );\n};\n\n`,
          sass: `\nconst name = () => {\n  return (\n    <div className={Styles.container}>\n      name\n    </div>\n  );\n};\n\n`,
        },
        export: `export {name};\n`,
      },
      sass: `.container {\n  display: flex;\n}\n`,
    };
  }

  render() {
    const template = this.availableTemplates[this.type];
    return `${template.imports.regular}${
      this.sass ? template.imports.sass : ""
    }${this.sass ? template.body.sass : template.body.regular}${
      template.export
    }`.replace(/name/g, this.name);
  }

  renderSass() {
    return this.availableTemplates.sass;
  }

  renderStorybook() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "/templates/storybookFile"),
        "utf8",
        (err, data) => {
          if (err) {
            reject(err);
          }
          if (data) {
            resolve(
              data
                .replace(/name/g, this.name)
                .replace(/AtomType/g, this.atomType)
            );
          }
        }
      );
    });
  }

  renderJsTestFile() {
    return new Promise((resolve, reject) => {
      fs.readFile(
        path.join(__dirname, "/templates/jsTestFile"),
        "utf8",
        (err, data) => {
          if (err) {
            reject(err);
          }
          if (data) {
            resolve(data.replace(/name/g, this.name));
          }
        }
      );
    });
  }
}

module.exports = Templates;
