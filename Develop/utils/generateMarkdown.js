function generateMarkdown(data) {
  return `# ${data.title}
  ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
  <br> 
  ![badge](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues-closed/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/last-commit/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
`
}

module.exports = generateMarkdown;
