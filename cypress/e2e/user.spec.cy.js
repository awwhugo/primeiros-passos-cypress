import userData from '../fixtures/userData.json'
import LoginPage from '../Pages/loginPage.js'
import DashboardPage from '../Pages/dashboardPage.js'
import MenuPage from '../Pages/menuPage.js'
import MyInfoPage from '../Pages/myInfoPage.js'

const Chance = require('chance');
const chance = new Chance();

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Login', () => {

    it('User e2e info Update - Successful', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.successfulLogin.username, userData.successfulLogin.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.name())
    myInfoPage.fillEmployeeDetails(chance.word(), chance.word(), chance.ssn(), chance.date({ year: 2026 }).toISOString().split('T')[0])
    myInfoPage.fillStatusDetails(chance.date({ year: 2024 }).toISOString().split('T')[0])
    myInfoPage.submitForm()
  })

})
