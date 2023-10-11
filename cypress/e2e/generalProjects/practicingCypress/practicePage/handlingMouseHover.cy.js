/// <reference types="cypress" />

describe('showing elements hidden from a menu to hover the mouse', () => {
    it('should perform the test', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('#mousehover').invoke('show');
      cy.contains('Top').click({force:true});
      cy.url().should('include', 'top');

    });

  });