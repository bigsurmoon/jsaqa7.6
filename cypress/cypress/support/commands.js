Cypress.Commands.add('login', (email, password) => {
    cy.contains("Log in").click();
    if (email) {
        cy.get("#mail").type(email);
    }
    if (password) {
        cy.get("#pass").type(password);
    }
    cy.contains("Submit").click();

});

Cypress.Commands.add("addToFav", (bookName, description, author) => {
    cy.contains("Add new").click();
    cy.get("#title").type(bookName);
    cy.get("#description").type(description);
    cy.get("#authors").type(author);
    cy.get("#favorite").dblclick();
    cy.contains("Submit").click();
    cy.contains("Favorites").click();
    cy.contains("1984").should("be.visible");
});