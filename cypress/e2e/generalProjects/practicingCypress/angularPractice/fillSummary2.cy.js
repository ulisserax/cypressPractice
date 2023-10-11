/// <reference types="cypress" />


import homePage from "../../../pageObjects/homePage";

describe('Filling the summary', () => {
    
	before(() => {
		cy.fixture('userInfo.json').then((data) => {
		  Cypress.env('userData', data);
		});
	  });
	  
	it('User can see all space bars empty without any input data and fill all the data', () => {
		
		cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
		cy.get('input[name="name"]:nth-child(2)').should('be.empty');
		cy.get('input[name="email"]').should('be.empty');
		cy.get('input[type="password"]').should('be.empty');

		//cy.get('input[name="name"]:nth-child(2)').type('Ulisses');

		const userData = Cypress.env('userData');
		const HomePage = new homePage();

		HomePage.insertName(userData.name);  
		HomePage.insertEmail(userData.email);
		HomePage.insertPassword(userData.password);
		cy.get('.form-check-input').eq(2).check();
		cy.get('select').select(userData.gender);
		cy.get('.form-check-input').eq(0).check();
		cy.get('input[name="name"]:nth-child(1)').should('have.value', userData.name);

    });

	

  });
  
