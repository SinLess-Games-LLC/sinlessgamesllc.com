// apps/sinlessgames-ui-e2e/src/e2e/app.cy.ts

describe("SinLess Games Homepage", () => {
  beforeEach(() => {
    cy.visit("/") // Assuming your homepage is at the root URL
  })

  it("should display the welcome message", () => {
    cy.contains("Welcome to SinLess Games!").should("be.visible")
  })

  it("should display the introduction description", () => {
    cy.contains("SinLess Games is a game development studio").should(
      "be.visible"
    )
  })

  it("should display the introduction image", () => {
    cy.get('img[src="/images/3.png"]').should("be.visible")
  })
})
