# Node.js Project - Development Environment

## Description
This project provides a structured and professional development environment for a Node.js application. The setup includes modern tools such as Webpack, Babel, ESLint, SASS, and more to streamline development.

---

## Features
- **Unit Testing** with Jest, including a coverage report.
- **Automated Documentation** generated with JSDoc.
- **ESLint Linter** using Airbnb configuration.
- **Style Management** with SASS and Webpack.
- **Hot Reload** for live updates during development.
- **JavaScript Transpilation** (ES6+ to older browser-compatible versions) with Babel.
- **Commit Conventions** enforced using Commitizen and Commitlint.

---

## Project Structure
The project is organized as follows:

/project_name ├── /tests/ # Folder for test files ├── /src/ # Source code │ ├── index.js # Main entry point │ ├── styles.scss # SASS styles ├── /dist/ # Generated files from Webpack ├── jsdoc.json # JSDoc configuration ├── package.json # Node.js project configuration ├── webpack.config.js # Webpack configuration └── README.md # Project documentation


---

## Prerequisites
Make sure you have the following installed:
- **Node.js** (version 22 or higher)
- **npm** 

---

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DivineBi/app-installation-process.git
   cd ENV-APP

2. Install dependencies:

    ```bash
    npm install

### Available Commands
The following commands are defined in package.json:

npm run prod: Builds the project for production (includes tests).

npm run dev: Starts the development environment with hot reload.

npm run lint: Runs the linter (ESLint).

npm run test: Executes unit tests with Jest.

npm run doc: Generates JSDoc documentation.

### Unit Testing
Tests are organized in the __tests__/ folder.

To run the tests:

```bash
    npm run test
```
    

### Documentation
Documentation is automatically generated using JSDoc. To generate the documentation:

```bash
    npm run doc
```

The documentation will be available in the out/ folder.

### Contribution
Follow the commit conventions (use npm run commit for a structured commit message).

Lint your code before creating a pull request:

```bash
    npm run lint
```

### License
This project is licensed under the MIT License.



