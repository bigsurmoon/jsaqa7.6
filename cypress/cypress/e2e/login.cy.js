beforeEach(() => {
  cy.visit("/");
});

it("Should open the main page", () => {
  cy.login("test@test.com", "test");
  cy.contains("Books list");
});

it("Should log in successfully", () => {
  cy.login("test@test.com", "test");
  cy.contains("test@test.com").should("be.visible");
  cy.contains("Add new").should("have.class", "btn");
});

it("Should not log in successfully with empty passsword field", () => {
  cy.login("test@test.com");
  cy.get("#pass")
    .then(($el) => $el[0].checkValidity())
    .should("be.false");
});

it("Should add a book to favourite", () => {
  cy.login("test@test.com", "test");
  cy.addToFav("1984", "Must Have", "George Orwell");
});

it("Should delete a book from favourite", () => {
  cy.login("test@test.com", "test");
  cy.contains("Favorites").click();
  cy.contains("1984").should("be.visible");
  cy.get("button.btn.btn-secondary").eq(0).click();
  cy.contains("1984").should("not.exist");
});

it("Should have download button", () => {
  cy.login("test@test.com", "test");
  cy.addToFav("1984", "Must Have", "George Orwell");
  cy.get("a:nth-child(1) > div > div.card-body").click();
  cy.contains("Dowload book");
});