/// <reference types="cypress" />

describe('I want to play a video on the website', () => {

    cy.visit('https://www.thespruceeats.com');
    cy.get('.jw-media jw-reset').invoke('src').click();
});