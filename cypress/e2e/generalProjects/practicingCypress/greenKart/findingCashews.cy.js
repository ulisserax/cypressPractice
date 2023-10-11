/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given(/^A user type a word to search on the search bar$/, () => {
	cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.products').should('be.visible');
    cy.get('.search-keyword').type('ca');
});

When(/^The products are shown on the page$/, () => {
	cy.get('.products').should('be.visible');
});

Then(/^It should be displayed only four products$/, () => {
	cy.get('.product:visible').should('have.length', 4);
});

Given(/^a user can see the four products able to be added on the cart$/, () => {
	cy.get('.products').find('.product').should('contain.text', 'ADD TO CART');
});

When(/^the user finds Cashews$/, () => {
	cy.get('.products').find('.product').each(($el, index, $list) => {
        const vegetablesText = $el.find('h4.product-name').text();
        if(vegetablesText.includes('Cashews')){
            //cy.get('.products').find('.product').eq(index).contains('ADD TO CART').click();
            cy.wrap($el).find('button').click();
        }
    });
});

Then(/^the Cashews can be visible on the cart by pressing the ADD TO CART button$/, () => {
	cy.get('.cart-icon').click();
    cy.get('.cart-preview.active').should('be.visible');
    cy.contains('PROCEED TO CHECKOUT').click();
    cy.get('tbody td p').eq(0).then(function(element) {
        const vegText = element.text();
    
        if (vegText.includes('Cashews')) {
            cy.contains('Place Order').click();
        } else {
            cy.log('Wrong element on the table');
        }
    });
    
    
});
