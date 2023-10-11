/// <reference=types="Cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Im  accessing the Google Page', () => {
    cy.visit('https://www.google.com/');
});

When('I click in the search field', (searchWord) => {

    cy.get('#input').should('be.visible');
});

Then('I type Ulisses in the search field', () => {
    cy.get('#input').type('Ulisses');
});

Then('I click on the search button', () => {
    cy.get('#input').type('{enter}');
});

Then('I should see the results', () => {
    cy.contains('Odysseus - Wikipedia');
});

