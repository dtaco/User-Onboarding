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


it("Fills out inputs, ticks, and submits", () => {
    nameInput().should("have.value", "").type("JohnDoe");
    nameInput().should("have.value", "JohnDoe");
    emailInput().should("have.value", "").type("jd@jd.com");
    emailInput().should("have.value", "jd@jd.com");
    passwordInput().should("have.value", "").type("abc123");
    passwordInput().should("have.value", "abc123");
    tosInput().should("have.value", "false").click();
    tosInput().should("have.value", "true");
    submitBtn().click();
    nameInput().clear();
    cy.contains("JohnDoe");
})

it("Form Validation working", () => {
    nameInput().type("JD");
    cy.contains("Username must be 3 characters long!");
})






















  })