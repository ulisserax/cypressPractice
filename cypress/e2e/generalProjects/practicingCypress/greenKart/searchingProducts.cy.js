/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^a user type a word to search on the search bar$/, () => {
	cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.products').should('be.visible');
    cy.get('.search-keyword').type('ca');
});

When(/^the products are shown on the page$/, () => {
	cy.get('.products').should('be.visible');
});

Then(/^it should be displayed only four products$/, () => {
	cy.get('.product:visible').should('have.length', 4);
	//cy.get('.products').find('.product').should('have.length', 4);
});
