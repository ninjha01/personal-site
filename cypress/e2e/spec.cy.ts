describe("spec.cy.ts", () => {
  it("should visit", () => {
    cy.visit("/");
    cy.contains("Life Science Software Engineer");
    cy.visit("/blast");
    cy.contains("Project Nitro");
    cy.visit("/seqbuild");
    cy.contains("a sequence building and ordering platform");
    cy.visit("/sitearch");
    cy.contains("This is the architecture diagram for nishantjha.org");
    cy.visit("/notebook");
    cy.contains("Running Cell #3");
  });
});
