/// <reference types="cypress" />

describe('creating a window that would open in another web page - child window', () => {
    it('will login through local storage', () => {
        
      cy.LoginAPI().then(function(){
            cy.visit('https://rahulshettyacademy.com/client');
            //onBeforeLoad: function(window){
                window.localsorage.setItem('token', Cypress.env('token'));
            //}
      });      
    });
});