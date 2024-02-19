// Function that returns a license badge based on which license is passed in or an empty string
function renderLicenseBadge(License) {
  let licenseOption = License;
  let licenseBadge = '';

 if (licenseOption === 'Apache License 2.0') {
      licenseBadge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (licenseOption === 'MIT') {
      licenseBadge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (licenseOption === 'Unlicense') {
    licenseBadge = '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)'
  } else {
    licenseBadge = '';
  }
  return licenseBadge
}

// Function that returns the license section of README or an empty string
function renderLicenseSection(License) {
  let licenseOption = License;
  let licenseMessage = '';

   if (licenseOption === 'Apache License 2.0') {
    licenseMessage = 'License shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.';
  } else if (licenseOption === 'MIT') {
    licenseMessage = 'Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to dealin the Software without restriction, including without limitation the rightsto use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions...';
  } else if (licenseOption === 'Unlicense') {
    licenseMessage = 'Anyone is free to copy, modify, publish, use, compile, sell, ordistribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means.';
  } else {
    licenseMessage = '';
  }
  return licenseMessage
}



// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.Title}

  ${renderLicenseBadge(data.License[0])}

## Description
${data.Description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
## Installation
\` ${data.Installation} \`
## Usage
 ${data.Usage}
## License
${data.License}
${renderLicenseSection(data.License[0])}
## Contributing
 ${data.Contributing}
## Tests
The following is needed to run the test: 
\` ${data.Tests} \`

## Questions
If you have any questions about repository contact me at: ${data.Email}.
You can find more of my work at [${data.Username}](https://github.com/${data.Username}/).
`;
}

module.exports = generateMarkdown;
