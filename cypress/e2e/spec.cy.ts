describe("spec.cy.ts", () => {
  it("should visit", () => {
    cy.visit("/");
    cy.contains("Life Science Software Engineer");
    cy.visit("/blast");
    cy.contains("BLAST finds regions");
    cy.visit("/notebook");
    cy.contains("Running Cell #3");
    cy.visit("/sitearch");
    cy.contains("This is the architecture diagram for nishantjha.org");
    cy.visit("/blastarch");
    cy.contains("A blast service must be performant and private.");
  });
});
