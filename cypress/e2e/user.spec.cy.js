import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/dashboardPage.js'
import MenuPage from '../Pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Login', () => {

    const selectorsList = {
    //sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
    ///dashboardGrid: ".orangehrm-dashboard-grid",
    //myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
    FirstNameField: '[name="firstName"]',
    MiddleNameField: '[name="middleName"]',
    LastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dataCloseButton: '.--close',
    submitButton: '[type="submit"]',
    dropdownButton: '.oxd-select-text--arrow'

  }

    it.only('User e2e info Update - Successful', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.successfulLogin.username, userData.successfulLogin.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
   // cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
   // cy.get(selectorsList.dashboardGrid)
   // cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear()
    cy.get(selectorsList.FirstNameField).type("Hugo")
    cy.get(selectorsList.MiddleNameField).clear()
    cy.get(selectorsList.MiddleNameField).type("Ribas")
    cy.get(selectorsList.LastNameField).clear()
    cy.get(selectorsList.LastNameField).type("Musk")
    // Flaky. Fizeram um update na pagina e os elementos da array mudaram de lugar. Precisa de um update no teste.
    cy.get(selectorsList.genericField).eq(3).clear().type("Employ1")
    cy.get(selectorsList.genericField).eq(4).clear().type("OtherIdTest1")
    cy.get(selectorsList.genericField).eq(5).clear().type("145678901_License")
    cy.get(selectorsList.dateField).eq(0).clear().type("2026-10-10")
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.dropdownButton).eq(0).click()
    cy.get(':nth-child(26)').click()
    cy.get(selectorsList.dropdownButton).eq(1).click()
    cy.get('.oxd-select-dropdown > :nth-child(2)').click()
    cy.get('.oxd-radio-input--active').eq(1).click()
    cy.get(selectorsList.dateField).eq(1).clear().type("2027-10-10")
    cy.get(selectorsList.dataCloseButton).click()
    cy.get(selectorsList.submitButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
  })

   it('Login - fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.failedLogin.username)
    cy.get(selectorsList.passwordField).type(userData.failedLogin.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.loginErrorMessage)
  })
})
