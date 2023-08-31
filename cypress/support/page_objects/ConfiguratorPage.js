export class ConfiguratorPage {
    get bookTripButton() {
      return cy.get('[data-cy="bookTrip"]');
    }
    get bookWithoutSightsButton() {
      return cy.get('[data-cy="confirm"]');
    }
  
    bookYourTrip() {
      this.bookTripButton.first().click({ force: true });
      this.bookWithoutSightsButton.click();
    }
  }
  
  export const onConfiguratorPage = new ConfiguratorPage();
  