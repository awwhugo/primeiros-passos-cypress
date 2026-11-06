import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Login', () => {

   it('Login - fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.failedLogin.username, userData.failedLogin.password)
    loginPage.checkLoginErrorMessage()
  })

   it('Login - Successful', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.successfulLogin.username, userData.successfulLogin.password)
    dashboardPage.checkDashboardPage()
  })

})
