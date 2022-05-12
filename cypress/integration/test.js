describe('Did the product open with the right color mentioned?', function hw5 () {
    it('Testing the first item', function hilverdaFlorist() {
        cy.viewport(1920, 1080)
        cy.visit("https://www.hilverdaflorist.com/");
        cy.get('[href="https://www.hilverdaflorist.com/assortiment/"]').click();
        cy.scrollTo(0, 500);
        cy.url().should('include', "assortment");
        cy.get('.product').eq(0).click();
        cy.get('.product-information__title').should('contain.text', "Abby Lou")
        cy.get('.product-information__row').eq(2).should('contain.text', "Pink Bicolour").end();
    })
})
