/// <reference types="cypress" />

describe('creating a window that would open in another web page - child window', () => {
    it('should perform the test', () => {
        
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
  
      cy.on('window:open', (url) => {
        expect(url).to.equal('http://www.qaclickacademy.com/');
      });
  
      cy.get('#openwindow').click();

    });
  });
  
  
  