describe("Examine the creation of employees", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/employee/create");
  });

  it("validates empty submitted fields properly", () => {
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=surnameErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=emailErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=birthDateErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=statusErrorMessage]").should("contain", "Required");
    cy.get("[data-cy=jobTitleErrorMessage]").should("contain", "Required");
  });

  it("validates too long submitted values properly", () => {
    cy.get("[data-cy=firstNameInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn"
    );
    cy.get("[data-cy=surnameInput]").type(
      "DoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoeDoe"
    );
    cy.get("[data-cy=emailInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn.doe@example.com"
    );
    cy.get("[data-cy=birthDateInput]").click().type("2100-04-04");
    cy.get("[data-cy=jobTitleInput]").type(
      "JohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohnJohn.doe@example.com"
    );

    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=firstNameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=surnameErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=emailErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
    cy.get("[data-cy=birthDateErrorMessage]").should(
      "contain",
      "Birth date cannot be greater than today"
    );
    cy.get("[data-cy=jobTitleErrorMessage]").should(
      "contain",
      "The maximum number of characters is 255"
    );
  });

  it("validates invalid email address properly", () => {
    cy.get("[data-cy=emailInput]").type("john.doe.example.com");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=emailErrorMessage]").should(
      "contain",
      "Invalid email address"
    );
  });
});
