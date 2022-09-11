describe("spec.cy.ts", () => {
  it("should visit", () => {
    cy.visit("/");
    cy.contains("Life Science Software Engineer");
    // Mockups
    cy.visit("/mockups");
    cy.contains("UI Mockups");
    cy.visit("/mockups/blast");
    cy.contains("Blast Service");
    cy.visit("/mockups/notebook");
    cy.contains("Running Cell #3");

    // Archs
    cy.visit("/architectures");
    cy.contains("Architecture diagrams");
    cy.visit("/architectures/blastarch");
    cy.contains("A blast service must be performant and private");
    cy.visit("/architectures/sitearch");
    cy.contains("Enable a hands-off deployment to prod");

    // Uses
    cy.visit("/uses");
    cy.contains("My tools of the trade");
  });
});
