class DashboardPage {
    selectorsList() {
        const selectors = {
            sectionTitleTopbar: '.oxd-topbar-header-breadcrumb-module',
            dashboardGrid: '.orangehrm-dashboard-grid',
        };

        return selectors;
    }

    checkDashboardPage() {
        cy.location('pathname').should('eq', '/web/index.php/dashboard/index');
        cy.get(this.selectorsList().dashboardGrid).should('be.visible');
    }
}

export default DashboardPage;

