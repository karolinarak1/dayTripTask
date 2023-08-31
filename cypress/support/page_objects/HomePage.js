export class HomePage {
    get dayTripLogo() {
      return cy.get('[alt="Daytrip logo"]');
    }
    get departureInput() {
      return cy.get('[data-cy="fromSelect"]');
    }
    get destinationInput() {
      return cy.get('[data-cy="toSelect"]');
    }
    get departureDateButton() {
      return cy.get('[data-cy="departureDate"]');
    }
    get departureTimeButton() {
      return cy.get('[data-cy="departureTime"]');
    }
    get nextMonthButton() {
      return cy.get('[direction="1"]');
    }
    get day10InCalendarButton() {
      return cy.get('[data-cy="10"]');
    }
    get passengersButton() {
      return cy.get('[data-cy="passengersSelector"]');
    }
    get passengersdecreaseButton() {
      return cy.get('[data-cy="decrease"]');
    }
    get searchButton() {
      return cy.get('[data-cy="book-button"]');
    }
  
    searchForAtrip(departure, destination) {
      this.departureInput.first().click().type(departure);
      this.departureInput.siblings("div").should("be.visible").click();
      this.destinationInput.first().click().type(destination);
      this.destinationInput.siblings("div").should("be.visible").click();
      this.departureTimeButton.first().click();
      this.passengersButton.first().click();
      this.passengersdecreaseButton.first().click();
      this.passengersButton.first().click();
      this.departureDateButton.first().click();
      this.dayTripLogo.first().scrollIntoView();
      this.nextMonthButton.first().click();
      this.dayTripLogo.first().scrollIntoView();
      this.day10InCalendarButton.first().click();
      this.searchButton.first().click();
    }
  }
  
  export const onHomePage = new HomePage();
  