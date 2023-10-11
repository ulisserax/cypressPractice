/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('practicing with iframes in cypress', () => {
    it('should perform the test', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.frameLoaded('#courses-iframe');
      cy.iframe().find('a[href*="mentorship"]').eq(0).click();
    });
  });
  
