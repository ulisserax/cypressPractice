/// <reference types="cypress" />

describe('clicking on the header to access the shopping page', () => {

    before(() =>{
        cy.fixture('productNames.json').then((data) => {
            Cypress.env('productData', data);
        });
    })

    it('should click on Shop header element', () => {
    
      const productData = Cypress.env('productData');
      cy.visit('https://www.rahulshettyacademy.com/angularpractice/');
      cy.get('.nav-link').eq(1).click();
      productData.productName.forEach((element) => {
        cy.selectProduct(element);
      });
      cy.get('.nav-link.btn.btn-primary').click();
      var sum = 0;
      cy.get('tr td:nth-child(3) strong').each(($el, index, $list) => {
            const actualText = $el.text();
            var priceValue = actualText.split(" ");
            priceValue = priceValue[1].trim();
            sum = Number(sum) + Number(priceValue);
      
            cy.get('h3 strong').then((textPrice) => {
                const totPrice = textPrice.text();
                var totalPrice = totPrice.split(" ");
                var total = totalPrice[1].trim();
                expect(sum).to.equal(Number(total));
            });
        });
    });
});
  


