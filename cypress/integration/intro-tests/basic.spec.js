describe("My first cypress test", () => {
    it("should load example webpage", function() {
        cy.visit("/")

        cy.url().should("include", "example.com")
        cy.title().should("eq", "Example Domain")
        //cy.get("h1").contains("Example Domain")

        //cy.pause() for debugging better than cy.wait()

        cy.get("h1").as("title")
        cy.get("@title").contains("Example Domain")
        cy.get("@title").should("be.visible")
    })

    it("should load another superdomain", function() {
        cy.visit("https://www.dev.to")
    })
})