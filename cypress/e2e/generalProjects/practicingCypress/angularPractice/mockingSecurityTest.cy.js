/// <reference types="cypress" />

describe('creating a window that would open in another web page - child window', () => {

    it('will login through local storage', () => {

        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', (req) => {
            
            req.url = "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra";
            req.continue((res) => {
                expect(res.statusCode).to.equal(403);
            });
        }).as('mockingResponse');
        cy.get('.btn.btn-primary').click();
        cy.wait('@mockingResponse');
    });
});