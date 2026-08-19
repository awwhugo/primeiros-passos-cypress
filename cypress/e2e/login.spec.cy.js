import userData from '../fixtures/userData.json'

describe('Orange HRM Login', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
    dashboardGrid: ".orangehrm-dashboard-grid",
    loginErrorMessage: '.orangehrm-login-error',

  }

  it('Login - Successful', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.successfulLogin.username)
    cy.get(selectorsList.passwordField).type(userData.successfulLogin.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })
   it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.failedLogin.username)
    cy.get(selectorsList.passwordField).type(userData.failedLogin.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.loginErrorMessage)
  })
})