describe('Form App', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })


  // Helpers
  const nameInput = () => cy.get("input[name=username]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const tosInput = () => cy.get("input[name=tos]");
  const submitBtn = () => cy.get("input[type=submit]");


describe("Filling out inputs", () => {
    nameInput().should("have.value", "").type("JohnDoe");
    nameInput().should("have.value", "JohnDoe");
})






















  })