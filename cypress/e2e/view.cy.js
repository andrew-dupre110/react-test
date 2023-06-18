describe("Examine employees list content and functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/#/view");
  });
  it("contains correct information", () => {
    cy.get("[data-cy=header]").should("contain", "View Employees");
  });

  it("redirect to edit page", () => {
    cy.get("[data-cy=editButton]").click();
    cy.get("[data-cy=header]").should("contain", "Edit employee");
    cy.get("[data-cy=firstNameInput]").type("John");
    cy.get("[data-cy=saveButton]").click();
    cy.get("[data-cy=header]").should("contain", "View Employees");
  });

  it("delete employee", () => {
    cy.get("[data-cy=deleteButton]").click();
    cy.get("[data-cy=noData]").should("contain", "No data to display");
  });
});
