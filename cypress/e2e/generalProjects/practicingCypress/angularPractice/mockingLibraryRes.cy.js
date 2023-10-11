/// <reference types="cypress" />

describe('mocking library API responses', () => {
    it('should perform the test', () => {
      
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        cy.intercept({
         method: 'GET',
         url: "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        }, 
        {
         statusCode: 200,
         body: [{
            "book_name": "Selenium",
            "isbn": "mcm",
            "aisle": "222"
            }]

        }).as('mockingResponse');
        cy.get('.btn.btn-primary').click();
        cy.wait('@mockingResponse');
        cy.get('p').should('have.text', 'Oops only 1 Book available');
    });
  });
  