export class ConfirmationPage {
    get tripSummary() {
      return cy.contains("Trip summary");
    }
    get priceInfo() {
      return cy.get('[data-cy="summaryTotalPrice"]');
    }
  
    checkIfTheTripSummaryIsVisibleAndContainsDetails() {
      cy.title().should("eq", "Daytrip: Wroclaw to Warsaw Booking");
      this.tripSummary.should("be.visible");
      this.priceInfo.should("contain.text", "€");
    }
  }
  
  export const onConfirmationPage = new ConfirmationPage();
  