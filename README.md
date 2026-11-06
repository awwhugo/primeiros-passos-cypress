# Cypress Test Automation | First Steps

![Cypress](https://img.shields.io/badge/Cypress-15.20.0-17202C?logo=cypress&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Learning%20Project-blue)

## About the Project

This repository documents my first steps in **end-to-end (E2E) test automation** using **Cypress** and **JavaScript**. It is a hands-on learning project focused on developing practical Quality Assurance (QA) skills, writing automated tests, and understanding how test automation fits into a software testing workflow.

The project is configured to work with the public [OrangeHRM demo application](https://opensource-demo.orangehrmlive.com/web/index.php).

## Tech Stack

- **JavaScript** — test scripting
- **Cypress** — end-to-end testing framework
- **Node.js and npm** — JavaScript runtime and dependency management
- **Chance** — utility library for generating test data
- **Git and GitHub** — source control and project documentation

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (which includes npm) and [Git](https://git-scm.com/).

### 1. Clone the repository

```bash
git clone https://github.com/awwhugo/primeiros-passos-cypress.git
cd primeiros-passos-cypress
```

### 2. Install dependencies

```bash
npm install
```

### 3. Open Cypress

```bash
npx cypress open
```

Select **E2E Testing** in the Cypress interface, choose a browser, and run an available test spec.

### 4. Run tests in headless mode

```bash
npx cypress run
```

> **Note:** The `npm test` script in the current `package.json` is still a placeholder. Use the Cypress commands above to run tests.

## Project Configuration

The `cypress.config.js` file defines the base URL for the OrangeHRM demo application:

```js
baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php'
```

This allows tests to use relative paths when visiting pages. The public demo application is maintained externally, so its content and availability may change.

## Learning Objectives

Through this project, I am practicing:

- Creating and organizing Cypress end-to-end tests
- Navigating web pages and interacting with UI elements
- Writing assertions to validate expected behavior
- Using JavaScript in test automation
- Working with test data and reusable testing patterns
- Maintaining test code using Git and GitHub

## Next Steps

As I continue learning, I plan to explore:

- Page Object Model (POM) and reusable commands
- Fixtures and data-driven testing
- Positive and negative test scenarios
- Test reporting and debugging
- Continuous integration with GitHub Actions

These are **future learning goals**, not features claimed to be implemented in this repository.

## About Me

I am developing my skills in **Software Quality Assurance and Test Automation**, with a focus on JavaScript, Cypress, and practical testing projects.

Follow my progress on [GitHub](https://github.com/awwhugo).

---

*This is an educational project created for learning and portfolio development. It is not affiliated with OrangeHRM or Cypress.*
