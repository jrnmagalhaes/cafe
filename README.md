# <u>C</u>reate <u>A</u>tomic <u>F</u>iles <u>E</u>legantly

> A tool to create files following the atomic design pattern

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#thank-you-notes">Thank you notes</a></li>
    <li><a href="#disclaimers">Disclaimers</a></li>
    <!-- <li><a href="#contact">Contact</a></li> -->
  </ol>
</details>

## About The Project

The objective of this tool is to automate the process of creating atomic files (atoms, molecules, organisms or whatever you want).

It creates the file itself, the folders to keep everything organized and updates all index.js files needed to get it ready to use.

## Getting Started

### Installation

1. Install the toll using npm

```bash
npm install -g git+https://github.com/jrnmagalhaes/atomicfiles.git
```

2. Create a cafe.config.json file in the folder you are planning to use this tool.

```js
{
  "projectType": "react-native", //react-native or react
  "src_folder": "folderName"
}
```

## Usage

To create atoms:

```bash
cafe atoms atomname
```

To create molecules:

```bash
cafe molecules moleculename
```

To create organisms:

```bash
cafe organisms moleculename
```

To create anything:

```bash
cafe anything anythingname
```

You can even specify the folder name. The following command will create a folder called myCustomFolder inside atom's folder with AtomName.js inside:

```bash
cafe atom myCustomFolder/atomName
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Thank you notes

1. A huge thanks to <a target="_blank" href="https://github.com/VictorLopes">Victor</a> for giving me ideas for the name

## Disclaimers

1. I'm not a NodeJS developer, if any part of this code hurts your feelings <b>I'M SORRY</b>
2. Cafe means coffee in portuguese.
