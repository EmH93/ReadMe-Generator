// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  

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
