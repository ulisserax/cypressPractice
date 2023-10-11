/// <reference types="cypress" />

describe('creating a tab with cypress without failing the test', () => {
    it.only('should perform the test', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('#opentab').then(function(element){
         const urlTab = element.prop('href');
         cy.visit(urlTab);
         cy.origin(urlTab, () => 
         {
            cy.get('div.sub-menu-bar a[href*="about"]').should('be.visible').click();
         })
      })
    });

    it('should invoke an attribute to open a tab', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('#opentab').invoke('removeAttr', 'target').click();
      cy.url().should('include', 'qaclickacademy');
    });

  });
  