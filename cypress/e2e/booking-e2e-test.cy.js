import { onHomePage } from "../support/page_objects/HomePage.js";
import { onCheckoutPage } from "../support/page_objects/CheckoutPage.js";
import { onConfiguratorPage } from "../support/page_objects/ConfiguratorPage.js";
import { onBookingPage } from "../support/page_objects/BookingPage.js";
import { onConfirmationPage } from "../support/page_objects/ConfirmationPage.js";

describe("Testing flow of the booking on DayTrip", () => {
  beforeEach("Visit DayTrip site", () => {
    cy.visit("/");
  });

  it("Check the booking details", () => {
    onHomePage.searchForAtrip("Wroclaw", "Warsaw");
    onConfiguratorPage.bookYourTrip();
    onBookingPage.saveAndContinueToCheckout("test@test.com");
    onCheckoutPage.fillInDetailsAndConfirmBooking(
      "Karolina",
      "Rak",
      11,
      1993,
      3643664000
    );
    onConfirmationPage.checkIfTheTripSummaryIsVisibleAndContainsDetails();
  });
});
