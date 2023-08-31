export class CheckoutPage {
    get firstNameInput() {
      return cy.get('[name="adult_0_firstName"]');
    }
    get lastNameInput() {
      return cy.get('[name="adult_0_lastName"]');
    }
    get dayInput() {
      return cy.get('[name="date-input"]');
    }
    get monthInput() {
      return cy.get('[data-cy="monthSelector"]');
    }
    get ninthMonthInCalendar() {
      return cy.get('[id="month-option-9"]');
    }
    get yearInput() {
      return cy.get('[data-cy="yearInput"]');
    }
    get phoneInput() {
      return cy.get('[name="phone"]');
    }
    get cashButton() {
      return cy.contains("Cash");
    }
    get confirmButton() {
      return cy.get('[data-cy="confirmPayment"]');
    }
  
    fillInDetailsAndConfirmBooking(name, surname, day, year, phone) {
      this.firstNameInput.click().type(name);
      this.lastNameInput.click().type(surname);
      this.dayInput.click().type(day);
      this.ninthMonthInCalendar.click();
      this.yearInput.click().type(year);
      this.phoneInput.click().type(phone);
      this.cashButton.click();
      this.confirmButton.click();
    }
  }
  
  export const onCheckoutPage = new CheckoutPage();
  