/// <reference types="cypress" />

describe('selecting elements in dropdowns', () => {
    it('static dropdown', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('select').select('option2').should('have.value', 'option2');
    });

    it('dynamic dropdown', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice');
        cy.get('#autocomplete').type('br');
        cy.get('.ui-menu-item div').each(($el) => {
            if($el.text() === 'Brazil'){
                cy.wrap($el).click();
            }
        })
    })
  });
  