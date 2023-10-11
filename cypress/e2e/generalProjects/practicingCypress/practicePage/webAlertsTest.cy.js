/// <reference types="cypress" />

describe('checking the checkboxes with cypress', () => {
    it('should perform the test', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('#alertbtn').click();
      cy.get('#confirmbtn').click();
      
      cy.on('window:alert', (alert) => {
        expect(alert).to.equal("Hello , share this practice page and share your knowledge");
      })

      cy.on('window:confirm', (alert) => {
        expect(alert).to.equal("Hello , Are you sure you want to confirm?");
      })
    });
});
  