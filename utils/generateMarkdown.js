// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  [Github Repo]https://github.com/${data.Username}/${data.Title}
## Description
${data.Description}
## Table od Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
 ${data.Installation}
## Usage
 ${data.Usage}
## License
This project is licensed under the ${data.License} license.
## Contributing
 ${data.Contributing}
## Tests
The following is needed to run the test: 

\` ${data.Tests} \`


## Questions
If you have any questions about repository, open an issue or contact me at: ${data.Email}.
You can find more of my work at [${data.Username}](https://github.com/${data.Username}/).
`;
}

module.exports = generateMarkdown;
