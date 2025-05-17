# Parabank Test Automation Framework

This project contains end-to-end test automation using Cypress, Page Objects, Custom Commands, Cucumber (BDD), and GitHub Actions CI.

## Target Website

[https://parabank.parasoft.com](https://parabank.parasoft.com)

---

## Features Covered

| Test Case ID | Feature             | Description                                    |
| ------------ | ------------------- | ---------------------------------------------- |
| TC1          | User Login          | Valid and invalid login flow                   |
| TC2          | Open New Account    | Create new savings/checking account            |
| TC3          | Account Overview    | Validate account presence and balances         |
| TC4          | Transfer Funds      | Transfer between two valid accounts            |
| TC5          | Loan Request        | Request loan (positive and negative scenarios) |
| TC6          | Update Contact Info | Update user profile information                |

---

## Project Structure

├── cypress/
│ ├── e2e/
│ │ ├── features/.feature
│ │ ├── step_definitions/.js
│ ├── support/
│ │ ├── commands.js
│ │ ├── e2e.js
│ ├── pageObjects/
│ │ ├── \*.js
├── .github/
│ └── workflows/
│ └── cypress.yml
├── package.json
└── README.md

---

## Running Tests Locally

### 1. Install Dependencies

```bash
npm install
npx cypress open
npx cypress run --browser chrome
```
