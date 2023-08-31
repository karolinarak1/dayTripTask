export class BookingPage {
    get emailAddressInput() {
      return cy.get('[name="lead-passenger-email"]');
    }
    get saveAndContinueButton() {
      return cy.get('[data-cy="saveAndContinue"]');
    }
  
    saveAndContinueToCheckout(emailAddress) {
      this.emailAddressInput.click().type(emailAddress);
      this.saveAndContinueButton.click();
    }
  }
  
  export const onBookingPage = new BookingPage();
  