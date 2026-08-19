describe('Orange HRM Login', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
    loginErrorMessage: '.orangehrm-login-error'

  }

  it('Login - Successful', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopbar).contains('Dashboard')
  })
   it('Login - fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Teste')
    cy.get(selectorsList.passwordField).type('teste123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.loginErrorMessage)
  })
})