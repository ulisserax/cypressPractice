/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^A user can see all space bars empty without any input data$/, () => {
	cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
    cy.get('input[name="name"]:nth-child(2)').should('be.empty');
    cy.get('input[name="name"]:nth-child(2)').should('be.empty');
    cy.get('input[name="email"]').should('be.empty');
    cy.get('input[type="password"]').should('be.empty');
});

When(/^A user types name$/, () => {
	cy.get('input[name="name"]:nth-child(2)').type('Ulisses');
});

When(/^A user types email$/, () => {
	cy.get('input[name="email"]').type('ulisses@gmail.com');
});

When(/^A user types password$/, () => {
	cy.get('input[type="password"]').type('abc1234!');
});

When(/^A user checks the IceCream option checkbox$/, () => {
	cy.get('.form-check-input').eq(2).check();
});

When(/^A user set the gender$/, () => {
	cy.get('select').select('Male');
});

When(/^A user checks the employment status$/, () => {
	cy.get('.form-check-input').eq(0).check();
});

Then(/^It should be displayed on the bottom on the page inside the Two-Way Data Binding bar$/, () => {
	cy.get('.ng-untouched.ng-untouched.ng-pristine.ng-valid').should('have.text', 'Ulisses');
});

Then(/^the user can submit all the personal info$/, () => {
	return true;
});
