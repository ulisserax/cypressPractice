/// <reference types="cypress" />

describe('selecting elements from a web table to assert text', () => {
    it('should perform the test', () => {
      
      cy.visit('https://rahulshettyacademy.com/AutomationPractice');
      cy.get('body > div:nth-child(5) > div:nth-child(1) > fieldset:nth-child(1) > table:nth-child(2) > tbody tr td:nth-child(2)').as('tableCourseElements').each(($el, index, $list) => {
          const course = $el.text();
          if(course.includes('Python')){
              cy.get('@tableCourseElements').eq(index).next().then(function(price){
                  const priceText = price.text();
                  expect(priceText).to.equal('25');
              })
          }
      });
        
    });

  });