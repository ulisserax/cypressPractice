// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('selectProduct', (productName) => {

    cy.get('h4.card-title').each(($el, index) => {

        if($el.text().includes(productName)){
            cy.get('button.btn.btn-info').eq(index).click();
        }
    });
})

Cypress.Commands.add('loginAPI', () => {

    cy.request('POST', 'https://rahulshettyacademy.com/client/auth/login', {"userEmail": "ulissesbgd@gmail.com", "userPassword": "Iamking@00" }).then((response) => {

        expect(response.status).to.equal(200);
        Cypress.env('token', response.body.token);
    });
})

Cypress.Commands.add('addProductToCart', (productName) => {
    
        cy.get('h4.card-title').each(($el, index) => {
    
            if($el.text().includes(productName)){
                cy.get('button.btn.btn-info').eq(index).click();
            }
        });
})
//Navigate from one sibling to another sibling far away.
//cy.get('your-selector-for-sibling-1').nextSibling(4).should('exist');
Cypress.Commands.add('nextSibling', { prevSubject: 'element' }, (subject, times = 1) => {
    let next = cy.wrap(subject);
    for (let i = 0; i < times; i++) {
        next = next.next();
    }
    return next;
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })