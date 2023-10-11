/// <reference types="cypress" />

describe('checking the checkboxes with cypress', () => {
    it('should perform the test', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1');
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
      cy.get('input[type="checkbox"]').check(['option2', 'option3']);
    });
  });
  