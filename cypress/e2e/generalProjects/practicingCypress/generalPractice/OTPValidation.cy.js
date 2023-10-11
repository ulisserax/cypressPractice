/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');
const {mailosaurGetMessage} = require('cypress-mailosaur');

describe("Testing OTP functionality with Cypress", () => {

    const testStartTime = Date.now();
    const emailAddress = `${faker.internet.userName()}@${Cypress.env('ServerID')}.mailosaur.net`;
    beforeEach("will use credentials from fake and send 2FA for mailosaur email", () => {

        cy.visit('https://notes-serverless-app.com/signup');
        cy.get('#email').type(emailAddress);
        cy.get('#password').type(Cypress.env('password'));
        cy.get('#confirmPassword').type(Cypress.env('password'));
        cy.get('.LoaderButton').click();
    });

    it("Successfully create the account on the signup page by an authenticator code sent by email", () => {
        cy.mailosaurGetMessage(Cypress.env('ServerID'), {
            sentTo: emailAddress,
            receivedAfter: testStartTime  // Use the captured start time
        }).then((message) => {
            
            const code = message.html.body.match(/\d{6}/)[0];
            cy.get('#confirmationCode').type(`${code}{enter}`);
            cy.wait(3000);//wait for the page to load
            cy.contains('.navbar-right a', 'Logout').should('be.visible');
            cy.contains('.page-header h1', 'Your Notes').should('be.visible');
        });
    });
})