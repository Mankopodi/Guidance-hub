describe('', () =>{
    it('goes to help me choose category page', () => {
        cy.visit('help/category')
        cy.get('button')
        cy.visit('help/question/2')
        cy.visit('help/suggestion/24/12')
    })
});