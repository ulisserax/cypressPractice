/// <reference types="cypress" />

describe('loggin in on the website without having to type username and password', () => {
    it('should perform the test', () => {
      //It will already execute loginAPI and then will execute the next steps.
      cy.loginAPI().then(() => {
        
        cy.visit('https://rahulshettyacademy.com/client/', {
          onBeforeLoad: (win) => {
            win.localStorage.setItem('token', Cypress.env('token'));
          }
        });

      })

    });

  });