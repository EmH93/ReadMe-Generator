// function to generate markdown for README
function generateMarkdown(data) {
  var licenseIcon
  var chosenLicense = `${data.license}`;

  if(chosenLicense === "MIT License"){
    licenseIcon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (chosenLicense === "Apache License v2.0") {
    licenseIcon = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (chosenLicense === "GNU General Public License v3.0") {
    licenseIcon = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  };

  return `# ${data.title}  

  ${licenseIcon}

  ## Description  
  
  ${data.description}
  
  ## Table of Contents  
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation  
  
  ${data.installation}
  
  ## Usage  
  
  ${data.usage}
  
  ## Contributing 
  
  ${data.credits}

  ## Tests

  ${data.tests}
  
  ## License  

  ${data.license}

  ## Questions
  
  If you have any questions about this project you can contact me via GitHub or email:  
  - [My GitHub username is ${data.gitHub}](https://github.com/${data.gitHub})
  - My email address is: ${data.email}

`;
}

module.exports = generateMarkdown;
